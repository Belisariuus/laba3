{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "e81432de-3493-4720-9bf0-7dc3be1e5d9e",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import os\n",
    "import warnings\n",
    "import re\n",
    "import sys\n",
    "import numpy as np\n",
    "import subprocess\n",
    "import math\n",
    "import pyspark.sql.functions as f\n",
    "import openpyxl\n",
    "\n",
    "from datetime import datetime, timedelta\n",
    "from sys import stdout as sysout\n",
    "from datetime import date\n",
    "from pyspark.sql import SparkSession\n",
    "from pyspark import SparkContext, SparkConf, HiveContext\n",
    "from pyspark.sql.types import *\n",
    "\n",
    "pd.set_option('display.max_columns', None)\n",
    "warnings.filterwarnings('ignore')\n",
    "dt_format = '%Y.%m.%d_%H.%M.%S'\n",
    "\n",
    "conf = SparkConf()\n",
    "conf.setAll(\n",
    "    [\n",
    "          (\"spark.ui.enabled\", \"true\")\n",
    "        , ('spark.ui.port','4041')\n",
    "        , (\"spark.driver.memory\", \"16g\")\n",
    "        , (\"spark.executor.instances\", \"2\")\n",
    "        , (\"spark.executor.cores\", \"8\")\n",
    "        , (\"spark.kubernetes.executor.limit.cores\", \"2\")\n",
    "        , (\"spark.kubernetes.executor.request.cores\", \"1800m\")\n",
    "        , (\"spark.executor.memory\", \"16g\")\n",
    "        , (\"spark.executor.memoryOverhead\", \"16g\")\n",
    "        , (\"spark.dynamicAllocation.enabled\", \"true\")\n",
    "        , (\"spark.dynamicAllocation.shuffleTracking.enabled\", \"true\")\n",
    "        , (\"spark.sql.parquet.compression.codec\", \"snappy\")\n",
    "        , (\"spark.sql.execution.arrow.pyspark.enabled\", \"true\")\n",
    "        , ('spark.dynamicAllocation.maxExecutors', '60')\n",
    "        , (\"spark.sql.session.timeZone\",\"Europe/Moscow\")\n",
    "        , (\"spark.sql.parquet.writeLegacyFormat\",\"true\")\n",
    "        , ('spark.hadoop.mapreduce.input.fileinputformat.input.dir.recursive', 'true')\n",
    "        , ('spark.sql.hive.convertMetastoreParquet', 'false')\n",
    "        , (\"dfs.replication\", \"1\")\n",
    "        , (\"parquet.block.size\", 128*1024*1024)\n",
    "        , (\"dfs.block.size\", 128*1024*1024)\n",
    "        , (\"spark.rpc.message.maxSize\", 1024)\n",
    "        , (\"spark.driver.maxResultSize\", \"256g\")\n",
    "        , (\"spark.master\", \"local[*]\")\n",
    "    ])\n",
    "\n",
    "spark = SparkSession.builder.config(conf=conf).enableHiveSupport().getOrCreate()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b2b25728-4627-493d-b883-f19918ea0071",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "query = f\"\"\"\n",
    "    SELECT distinct *\n",
    "    FROM arnsdpsbx_t_team_sva_oapso.uzb_22056825_loan_fact_provv_viborka\n",
    "\"\"\"\n",
    "df_base = spark.sql(query).toPandas()\n",
    "print(f\"Количество строк: {len(df_base)}\")\n",
    "df_base.head(1)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "4c04ce67-bb7f-4775-8888-03a09a88799c",
   "metadata": {},
   "source": [
    "## 1) формирую сумму и дату проводки субсидирование погашение"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "d37cbf07-df8f-4b93-97ae-20b43998b6d7",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "df_sum_date_provod = df_base[['LOAN_AGRMNT_ID','c_sys_name','AGRMNT_NBR','c_summa','c_date','c_sum_nt','c_date_prov']]\n",
    "df_sum_date_provod['Месяц операции'] = pd.to_datetime(df_sum_date_provod['c_date']).dt.to_period('M')\n",
    "df_sum_date_provod['c_sum_nt'] = df_sum_date_provod['c_sum_nt'].astype(float)\n",
    "df_sum_date_pivot = df_sum_date_provod.pivot_table(\n",
    "    index='LOAN_AGRMNT_ID',\n",
    "    columns=['Месяц операции'],\n",
    "    values='c_date_prov',\n",
    "    aggfunc='max',\n",
    "    fill_value='',\n",
    ")\n",
    "df_sum_date_pivot"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "057039ca-9654-4d82-b5b2-ad52922d7f89",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "df_provv_pivot_sum = df_provv.pivot_table(\n",
    "    index='LOAN_AGRMNT_ID',\n",
    "    columns=['месяц операции'],\n",
    "    values='c_sum_nt',\n",
    "    aggfunc='sum',\n",
    "    fill_value='',\n",
    ")\n",
    "df_provv_pivot_sum"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "adbd3413-0d52-4754-82c4-c7a64e6adf1f",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "df_provv_pivot_sum_res = df_provv_pivot_sum.reset_index()\n",
    "df_provv_pivot_res = df_provv_pivot.reset_index()\n",
    "pogashenie_provv_final_merge = pd.merge(df_provv_pivot_sum_res,df_provv_pivot_res, on='LOAN_AGRMNT_ID',suffixes=(\"_сума_проводки\",\"_дата_проводки\"), how=\"outer\")\n",
    "pogashenie_provv_final_merge"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "d451056c-fd13-42e9-8487-a8e8dd725e01",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "pogashenie_provv_final_merge = pogashenie_provv_final_merge.sort_index(axis=1)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "417c370a-3aa2-4ff0-a2aa-e766cd40521f",
   "metadata": {},
   "source": [
    "## подгрузка 3 столбцов суб учет, выдача, суб погажение в периоде"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "29aefc26-fb07-415e-b4e4-66cc06064c2c",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "query = f\"\"\"\n",
    "SELECT distinct *\n",
    "FROM arnsdpsbx_t_team_sva_oapso.uzb_22056825_loan_fact\n",
    "where 1=1\n",
    " and c_date >= '2022-07-01 00:00:00'\n",
    " and c_date <= '2025-01-31 00:00:00' \n",
    " \n",
    "    \"\"\" \n",
    "dfsql = spark.sql(query)\n",
    "dfsql.repartition(1).write.option(\"parquet.block.size\", 128*1024*1024).saveAsTable('arnsdpsbx_t_team_sva_oapso.uzb_22056825_loan_fact_viborka_all_pogashenia2', mode = 'append')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "53af8c95-6322-4d87-b8af-3b89d125edd9",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "query = f\"\"\"\n",
    "SELECT distinct *\n",
    "FROM arnsdpsbx_t_team_sva_oapso.uzb_22056825_loan_fact_viborka_all_pogashenia\n",
    " \"\"\"\n",
    "df1 = spark.sql(query)\n",
    "pogash_fact_op= df1.select([f.col(c).cast('string') for c in df1.columns]).toPandas()\n",
    "pogash_fact_op"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "0ada3395-fc28-4e34-a627-5b537a99923e",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "pogash_fact_op_s = pogash_fact_op[pogash_fact_op['c_sys_name']=='Субсидирование - погашение требований по процентам']\n",
    "pogash_fact_op_s = pogash_fact_op_s[['LOAN_AGRMNT_ID','c_sys_name','AGRMNT_NBR','c_summa','c_date']]\n",
    "pogash_fact_op_s"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "fd308225-3f12-444f-85e2-d79d17aabe0c",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "pogash_fact_op_s['c_summa'] = pogash_fact_op_s['c_summa'].astype(float)\n",
    "pogash_fact_op_s['месяц операции'] = pd.to_datetime(pogash_fact_op_s['c_date']).dt.to_period('M')\n",
    "pogash_fact_op_sum = pogash_fact_op_s.pivot_table(\n",
    "    index='LOAN_AGRMNT_ID',\n",
    "    columns=['месяц операции'],\n",
    "    values='c_summa',\n",
    "    aggfunc='sum',\n",
    "    fill_value='',\n",
    ")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "82805207-c6bd-4c09-821f-677112380ec5",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "pogash_fact_op_sum = pogash_fact_op_sum.reset_index()\n",
    "pogash_fact_op_sum"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "1d397f21-f8e4-425f-b843-5002527bd882",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "new_col = {\n",
    "    col: f\"{col}_субсидирование_погашение\" if col != 'LOAN_AGRMNT_ID' else col\n",
    "    for col in pogash_fact_op_sum.columns\n",
    "}\n",
    "new_col"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "fdc1dad4-e342-4af6-834e-657484498bf0",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "pogash_fact_pivot = pogash_fact_op_sum.rename(columns = new_col)\n",
    "pogash_fact_pivot"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "9e1c66c4-e66f-4d78-a20c-44d987b32c27",
   "metadata": {},
   "source": [
    "## ♦ Субсидирование - погашение требований по процентам"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "9b12c437-d7f5-460c-8429-67abde4fe3e9",
   "metadata": {},
   "outputs": [],
   "source": [
    "pogash_fact_pivot"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "7e443297-1c99-46d0-b991-b77b6a7d0437",
   "metadata": {},
   "source": [
    "## Выдача кредита "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "bf601cad-0326-44df-98eb-e33c9279396d",
   "metadata": {},
   "outputs": [],
   "source": [
    "vidacha_kredita = pogash_fact_op[pogash_fact_op['c_sys_name']=='Выдача кредита']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "45dea4af-e825-4b1c-9ae4-eeb7a005fd2a",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "vidacha_kredita['c_summa'] = vidacha_kredita['c_summa'].astype(float)\n",
    "vidacha_kredita['месяц операции'] = pd.to_datetime(vidacha_kredita['c_date']).dt.to_period('M')\n",
    "vidacha_kredita_pivot = vidacha_kredita.pivot_table(\n",
    "    index='LOAN_AGRMNT_ID',\n",
    "    columns=['месяц операции'],\n",
    "    values='c_summa',\n",
    "    aggfunc='sum',\n",
    "    fill_value='',\n",
    ")\n",
    "vidacha_kredita_pivot"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "46268782-d7f0-416a-8ea3-46ab8b78bd90",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "vidacha_kredita_pivot = vidacha_kredita_pivot.reset_index()\n",
    "vidacha_kredita_pivot"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "9a152e14-4226-4c8d-a5fc-a03fee3dd403",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "new_col = {\n",
    "    col: f\"{col}_выдача_кредита\" if col != 'LOAN_AGRMNT_ID' else col\n",
    "    for col in vidacha_kredita_pivot.columns\n",
    "}\n",
    "new_col"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "e21aaa57-d01c-45cb-a802-0716aa54e2d3",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "vidacha_kredita_pivot = vidacha_kredita_pivot.rename(columns = new_col)\n",
    "vidacha_kredita_pivot"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "1a556992-d1fa-4a42-84a8-50c500724dce",
   "metadata": {},
   "source": [
    "# ♦ выдача кредита"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "dcde18ec-f07d-47dc-87ce-95a585d319aa",
   "metadata": {},
   "outputs": [],
   "source": [
    "vidacha_kredita_pivot"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "ad0c49b0-2dc7-4844-9625-741e65fcc640",
   "metadata": {},
   "source": [
    "## "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "9537cb62-9e58-4053-86c9-1aa14a547575",
   "metadata": {},
   "outputs": [],
   "source": [
    "syb_ychet = pogash_fact_op[pogash_fact_op['c_sys_name']=='Субсидирование - учет процентов за кредит (образовательные)']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "2bf578cc-2837-4c60-af7a-67b132a03112",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "syb_ychet_s = syb_ychet[['LOAN_AGRMNT_ID','c_sys_name','AGRMNT_NBR','c_summa','c_date']]\n",
    "syb_ychet_s"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "cf1a7978-0cb8-473e-a60f-8c6b9791b7d5",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "syb_ychet_s['c_summa'] = syb_ychet_s['c_summa'].astype(float)\n",
    "syb_ychet_s['месяц операции'] = pd.to_datetime(syb_ychet_s['c_date']).dt.to_period('M')\n",
    "syb_ychet_pivot = syb_ychet_s.pivot_table(\n",
    "    index='LOAN_AGRMNT_ID',\n",
    "    columns=['месяц операции'],\n",
    "    values='c_summa',\n",
    "    aggfunc='sum',\n",
    "    fill_value='',\n",
    ")\n",
    "syb_ychet_pivot"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "97bcfe2b-59b1-484a-aeef-374068ea5e94",
   "metadata": {},
   "outputs": [],
   "source": [
    "syb_ychet_pivot = syb_ychet_pivot.reset_index()\n",
    "new_col = {\n",
    "    col: f\"{col}_субсидирование_учёт_процентов\" if col != 'LOAN_AGRMNT_ID' else col\n",
    "    for col in syb_ychet_pivot.columns\n",
    "}\n",
    "new_col"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "cdb95cb4-401d-4057-9b95-701acd1b74f9",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "syb_ychet_pivot = syb_ychet_pivot.rename(columns=new_col)"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "fe1c1ba1-e026-45b9-a0e3-43d353b45fd0",
   "metadata": {},
   "source": [
    "## ♦ суб учет"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "1e853346-c7e5-4731-b70a-34d32d163c69",
   "metadata": {},
   "outputs": [],
   "source": [
    "syb_ychet_pivot"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "4e7fa887-f660-4ec1-adb0-a754a4bfa024",
   "metadata": {},
   "source": [
    "## обьединение в сводный файл"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "e9175c21-f262-448b-9b23-70aa567b09f5",
   "metadata": {},
   "outputs": [],
   "source": [
    "syb_ychet_pivot - суб. учет                                                360907 \n",
    "pogashenie_provv_final_merge - суб погашение проведенные документы         287377 \n",
    "vidacha_kredita_pivot - выдача кредита                                     295192 \n",
    "pogash_fact_op_sum - субсидирование погашение                              308414 "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b1b5f44d-4aee-4ea6-a3e3-0844261768dd",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "df1 = pd.merge(syb_ychet_pivot, pogashenie_provv_final_merge, how='outer',on='LOAN_AGRMNT_ID')\n",
    "df2 = pd.merge(df1, vidacha_kredita_pivot, how='outer',on='LOAN_AGRMNT_ID')\n",
    "df3 = pd.merge(df2, pogash_fact_pivot, how='outer',on='LOAN_AGRMNT_ID')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "8da3d4b2-6d84-4734-93b1-a2d2143b9da2",
   "metadata": {
    "tags": []
   },
   "outputs": [],
   "source": [
    "df3= df3.fillna(\"\")\n",
    "df3 = df3.sort_index(axis=1)\n",
    "df3"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
