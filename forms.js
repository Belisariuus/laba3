var methods_forms = {

    // ********************************************Работа с пропусками***********************************************************
    'MissingValues':{
        'html':`
            <div class="card-body">
                <div class="row mb-0 pb-0">
                    <div class="col-lg-1">
                        <button class="btn btn-dark btn-sm mb-2 up" style="display: flex">
                            <i class="bi bi-arrow-up"></i>
                        </button>
                        <button class="btn btn-dark btn-sm down">
                            <i class="bi bi-arrow-down "></i>
                        </button>
                    </div>  
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Работа с пропусками</h5>
                        <p class="text-muted text-center pt-0">Выберите только один параметр</p>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('MissingValues')" style="cursor: pointer"></i>
                    </div>
                </div>
                
                <form id="MissingValues">
                    <input type="hidden" name="methods" value="Preprocess">
                    <input type="hidden" name="types" value="method">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                        
                        <!--************************ Заменить средним ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>Заменить средним</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 4%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input missing" type="checkbox" name="mean" id="mean"/>
                                    <label for="mean" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Заменяет пустые значения в столбцах датасета <strong>средними</strong> значениями.
                            </td>
                        </tr>
                        <!--*************************************************************** -->
                        
                        <!--************************ Заменить медианой ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>Заменить медианой</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 4%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input missing" type="checkbox" name="median" id="median"/>
                                    <label for="median" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Заменяет пустые значения в столбцах датасета <strong>медиаными</strong> значениями.
                            </td>
                        </tr>
                        <!--*************************************************************** -->


                        <!--************************ Заменить нулями ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>Заменить нулями</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 4%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="zero" id="zero"/>
                                    <label for="zero" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Заменяет пустые значения в столбцах датасета <strong>нулями</strong>.
                            </td>
                        </tr>
                        <!--*************************************************************** -->

                        <!--************************ Заменить на значение ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>Заменить на значение</strong>
                            </td>
                            <td class="d-flex flex-column justify-content-center align-items-center">
                                <div class="form-check form-switch" style="display: block" >
                                    <input class="form-check-input " type="checkbox" name="replace" id="replace"/>
                                    <label for="replace" class="form-check-label">False</label>
                                </div>
                                <div class="w-100">
                                    <input class="form-control mt-1" type="text" name="replaceInput" id="replaceInput" placeholder="Введите значение замены" hidden>
                                </div>
                                
                            </td>
                            <td>
                            Заменяет пустые значения в столбцах датасета <strong>введённым</strong> значением.
                            </td>
                        </tr>
                        <!--*************************************************************** -->


                        <!--************************ Удаление столбцов ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>Удаление столбцов</strong>
                            </td>
                            <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 4%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input " type="checkbox" name="delete" id="delete"/>
                                    <label for="delete" class="form-check-label">False</label>
                                </div>
                                <div class="w-100 text-center">    
                                    <input class="form-range mt-1" type="range" name="deleteRange" id="deleteRange" min="0" max="100" value="0" hidden>
                                    <label for="deleteRange" class="form-check-label" hidden>Значение: 0</label>
                                </div>
                            </td>
                            <td>
                            Удаляет столбцы, где <strong>%</strong> пропущенных значенией.
                            </td>
                        </tr>
                        <!--*************************************************************** -->
                      </table>
                </form>
            </div>
         `,
        'draw_status': false
    },
     // *************************************************************************************************************************

    // ********************************************Работа с текстовыми данными***********************************************************
    'TextDataPrepare':{
    'html':`
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1">
                        <button class="btn btn-dark btn-sm mb-2 up" style="display: flex">
                            <i class="bi bi-arrow-up"></i>
                        </button>
                        <button class="btn btn-dark btn-sm mb-2 down">
                            <i class="bi bi-arrow-down "></i>
                        </button>
</div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Работа с текстовыми данными</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('TextDataPrepare')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="MissingValues">
                    <input type="hidden" name="methods" value="Prepare">
                    <input type="hidden" name="types" value="TextDataPrepare">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-50 bg-dark" style="color: white;">Значение</th>
                                <th class="w-25 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                            <tr>
                            <td class="text-center align-middle">
                                <strong>Очистка с помощью регулярного выражения</strong>
                            </td>
                            
                            <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 4%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input " type="checkbox" name="clear" id="clear"/>
                                    <label for="clear" class="form-check-label">False</label>
                                </div>
                                <div class="row">   
                                    <div class="col-lg-6">
                                        <input class="form-control mt-1" type="text" name="clearInput" id="clearInput" placeholder="Регулярное выражение">
                                    </div>
                                    <div class="col-lg-6">
                                        <input class="form-control mt-1" type="text" name="clearInput" id="clearInput" placeholder="На что заменить" style="width: 100%">
                                    </div>
                                </div>                             
                            </td>
                            
                            <td>
                            </td>
                            </tr>
                            <tr>
                                <td class="text-center align-middle">
                                    <strong>Лемматизация</strong>
                                </td>
                                <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 4%">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input " type="checkbox" name="lemmatize" id="lemmatize"/>
                                        <label for="lemmatize" class="form-check-label">False</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center align-middle">
                                    <strong>Векторизация</strong>
                                </td>
                                <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 4%">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input " type="checkbox" name="vectorize" id="vectorize"/>
                                        <label for="vectorize" class="form-check-label">False</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center align-middle">
                                    <strong>Выберите поля для которых произвести действия</strong>
                                </td>
                                <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 4%">
                                    <div class="form-check form-switch">
                                        <select class="form-select" name="columns" id="columns" size="1">
                                        <option selected value="None">None</option>
                                    </div>
                                </td>
                            </tr>
                        
                    </table>
                </form>
            </div>

                </fieldset>`,
    'draw_status': false
    },
    // *************************************************************************************************************************


    // ********************************************Классификация XGBOOST***********************************************************
    'xgboost_classifier':{
    'html':`
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1">
                                                    <button class="btn btn-dark btn-sm mb-2 up" style="display: flex">
                        <i class="bi bi-arrow-up"></i>
                    </button>
                    <button class="btn btn-dark btn-sm down">
                        <i class="bi bi-arrow-down "></i>
                    </button>
</div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Классификация XGBOOST</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('xgboost_classifier')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="xgboost_classifier">
                    <input type="hidden" name="methods" value="Classifier">
                    <input type="hidden" name="types" value="xgboost_classifier">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                        <tr>
                            <!--************************ booster ************************* -->
                            
                            <td class="text-center align-middle">
                                <strong>booster</strong>
                            </td>
                            
                            <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 35%">
                                <select class="form-select" name="booster" id="booster" size="1">
                                    <option selected value="gbtree">gbtree</option>
                                    <option value="gblinear">gblinear</option>
                                    <option value="dart">dart</option>
                                </select>
                            </td>
                            <td>
                                <p>Выбор используемого классификатора.</p>
                                <ul>
                                    <li><b>'gbtree'</b>: деревья решений, улучшенные с помощью обычного градиента</li>
                                    <li><b>'gblinear'</b>: использует линейную модель вместо деревьев принятия решений</li>
                                    <li><b>'dart'</b>: добавляет отсев к стандартному алгоритму повышения градиента.<br>Пожалуйста, также обратитесь к замечаниям по rate_drop для получения дополнительных пояснений по <b>'dart'</b></li>
                                </ul>
                            </td>
                        </tr>
                         <!--*************************************************************************************** -->
                         
                         <!--************************ normalize_type ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>normalize_type</strong>
                            </td>
                            <td class="d-flex flex-column justify-content-center align-items-center" style="padding-top: 35%">
                                <select class="form-select" name="normalize_type" id="normalize_type" size=1>
                                    <option selected value="tree">tree</option>
                                    <option value="forest">forest</option>
                                </select>
                            </td>
                            <td>
                                <p>Определяет, как нормализовать деревья во времени <b>'dart'</b></p>
                                <ul>
                                    <li><b>'tree'</b>: новое дерево имеет тот же вес, что и одно удаленное дерево.</li>
                                    <li><b>'forest'</b>: новое дерево имеет тот же вес, что и сумма всех удаленных деревьев.</li>
                                </ul>
                                <p>
                                    Пожалуйста, также ознакомьтесь с комментариями к rate_drop для получения дополнительных пояснений.<br>
                                    Будет проигнорировано, если для параметра booster не установлено значение 'dart'.<br>
                                </p>
                            </td>
                        </tr>
                        <!--*************************************************************************************** -->
                        
                        <!--************************ one_drop ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>one_drop</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 27%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="one_drop" id="one_drop"/>
                                    <label for="one_drop" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                                Если установлено значение <b>True</b>, то по крайней мере одно дерево всегда будет выпадать.<br>
                                Установка этого гиперпараметра в значение true снижает вероятность переобучения.<br>
                                Пожалуйста, также обратитесь к замечаниям по rate_drop для получения дальнейших объяснений.<br>
                                Будет проигнорировано, если для параметра booster не установлено значение <b>'dart'</b>.<br>
                            </td>
                        </tr>
                        <!--******************************************************************************************** -->
                        
                        <!--************************ external_memory  ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>external_memory</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 30%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="external_memory" id="external_memory"/>
                                    <label for="external_memory" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                                Если для параметра in_memory движка установлено значение False, XGBoost может использовать функции внешней памяти. <br>
                                Это снижает потребление памяти, но также может повлиять на качество прогнозов. <br>
                                Внешняя память по умолчанию отключена, и рекомендуется использовать ее только для выбора функций. <br>
                                Если для параметра in_memory движка установлено значение True (значение по умолчанию), XGBoost никогда не будет использовать внешнюю память.<br>
                            </td>
                        </tr>
                        <!--************************************************************************************** -->
                        
                        <!--************************ silent ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>silent</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 5%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="silent" id="silent"/>
                                    <label for="silent" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>В автоматическом режиме XGBoost не будет выводить информацию о ходе обучения.</td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************ sample_type столбцов ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>sample_type</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 25%">
                                <select class="form-select" id="sample_type" name="sample_type">
                                    <option selected value="uniform">uniform</option>
                                    <option value="weighted">weighted</option>
                                </select>
                            </td>
                            <td>
                                <ul>
                                    <li><b>'uniform'</b>: вероятность выпадения каждого дерева одинакова</li>
                                    <li><b>'weighted'</b>: вероятность выпадения будет пропорциональна весу дерева</li>
                                </ul>
                                <p>
                                    Пожалуйста, также ознакомьтесь с замечаниями к rate_drop для дальнейшего объяснения.
                                    Будет проигнорировано, если для параметра <b>booster</b> не установлено значение <b>'dart'</b>.
                                </p>
                            </td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************ objective ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>objective</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 5%">
                                <select class="form-select" id="objective" name="objective">
                                    <option selected value="reg_logistic">reg:logistic</option>
                                    <option value="binary_logistic">binary:logistic</option>
                                    <option value="binary_logitraw">binary:logitraw</option>
                                </select>
                            </td>
                            <td>
                                Необходим для указания задачи и соответствующую цель обучения.
                            </td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************ rate_drop  ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>rate_drop</strong>
                            </td>
                            <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 45%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="rate_drop" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="rate_drop" name="rate_drop">
                                </div>
                            </td>
                            <td>
                                Коэффициент выпадения деревьев - определяет вероятность того, что дерево будет удалено.<br>
                                Выпадение - это алгоритм, который пользуется значительной популярностью в сообществе глубокого обучения.<br>
                                Это означает, что каждый узел может быть случайным образом удален во время обучения.<br>
                                Этот подход также может быть применен для повышения градиента, где это означает, что каждое дерево может быть удалено случайным образом с определенной вероятностью.<br>
                                Указанная вероятность определяется параметром rate_drop. Отсев для повышения градиента называется алгоритмом <b>'dart'</b>.<br>
                                Увеличение этого гиперпараметра снижает вероятность переобучения.<br>
                                Будет проигнорировано, если для параметра booster не задано значение <b>'dart'</b>.<br>
                            </td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************  skip_drop ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>skip_drop</strong>
                            </td>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 20%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="skip_drop" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="skip_drop" name="skip_drop">
                                </div>
                            </td>
                            <td>
                                Вероятность пропуска отсева в течение заданной итерации.<br>
                                Пожалуйста, также обратитесь к замечаниям по rate_drop для получения дополнительных пояснений.<br>
                                Увеличение этого гиперпараметра снижает вероятность переобучения.<br>
                                Будет проигнорировано, если для параметра booster не установлено значение <b>'dart'</b>.<br>
                                Диапазон: [0, 1]
                            </td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************ colsample_bylevel  ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>colsample_bylevel</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 35%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="colsample_bylevel" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="colsample_bylevel" name="colsample_bylevel">
                                </div>
                            </td> 
                            <td>
                                Соотношение подвыборок для используемых столбцов для каждого уровня внутри дерева.<br>
                                Обратите внимание, что XGBoost расширяет свои деревья от уровня к уровню, а не от узла к узлу.<br>
                                На каждом уровне случайным образом выбирается подвыборка объектов, и выбирается наилучший объект для каждого разделения.<br>
                                Этот гиперпараметр определяет долю объектов, выбранных случайным образом на каждом уровне.<br>
                                Если установлено значение 1, то теперь выполняется такая выборка.<br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: (0, 1]
                            </td>
                        </tr>
                        <!--************************************************* -->
                        
                        <!--************************ subsample  ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>subsample</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="subsample" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="subsample" name="subsample">
                                </div>
                            </td> 
                            <td>
                                Соотношение подвыборок из обучающего набора.<br>
                                Это означает, что для каждого дерева в обучение будет включена подвыборка выборок из обучающего набора.<br>
                                Пожалуйста, обратите внимание, что это выборки без замены - обычным подходом для случайных лесов является выборка с заменой.<br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: (0, 1]
                            </td>
                        </tr>
                        <!--************************  ************************* -->
                        
                        <!--************************  learning_rate ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>learning_rate</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="learning_rate" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="learning_rate" name="learning_rate">
                                </div>
                            </td> 
                            <td>
                                Скорость обучения для алгоритма повышения градиента. <br>
                                Когда новое дерево будет обучено, оно будет добавлено к существующим деревьям. <br>
                                Перед этим оно будет умножено на learning_rate. <br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения. <br>
                                Диапазон: [0, 1]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ colsample_bytree  ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                            <strong>colsample_bytree</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 20%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="colsample_bytree" class="form-check-label">Значение: 0.5</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.5" id="colsample_bytree" name="colsample_bytree">
                                </div>
                            </td> 
                            <td>
                                Соотношение подвыборок для используемых столбцов для каждого дерева<br>
                                Это означает, что для каждого дерева выборка объектов будет выбрана случайным образом.<br>
                                Этот гиперпараметр определяет долю объектов, выбранных случайным образом для каждого дерева.<br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: (0, 1]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ gamma  ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>gamma</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 18%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="gamma" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="gamma" name="gamma">
                                </div>
                            </td> 
                            <td>
                                Минимальное снижение потерь, требуемое для любого обновления дерева. <br>
                                Это означает, что каждое потенциальное обновление сначала будет оцениваться на предмет улучшения функции потерь.<br>
                                Если улучшение превышает значение gamma, обновление будет принято.<br>
                                Увеличение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: [0, &#8734;]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************  max_delta_step ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>max_delta_step</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 6%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="max_delta_step" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="max_delta_step" name="max_delta_step">
                                </div>
                            </td> 
                            <td>
                                Максимальный шаг дельта, допустимый для оценки веса каждого дерева. <br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения. <br>
                                Диапазон: [0, &#8734;)
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ max_depth  ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>max_depth</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 6%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="max_depth" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="max_depth" name="max_depth">
                                </div>
                            </td>
                            <td>
                                Максимально допустимая глубина деревьев. <br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: [0, &#8734;]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ n_estimators  ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>n_estimators</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 6%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="n_estimators" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="n_estimators" name="n_estimators">
                                </div>
                            </td>
                            <td>
                                Количество оценок (деревьев).<br>
                                Уменьшение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: [10, &#8734;]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ n_jobs  ************************* -->
                        <tr>
                        <td class="text-center align-middle">
                            <strong>n_jobs</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 6%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="n_jobs" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="0" max="10" step="1" value="5" id="n_jobs" name="n_jobs">
                                </div>
                            </td>
                            <td>
                                Количество параллельных потоков. Если значение равно нулю, то оптимальное количество потоков будет определено автоматически.<br>
                                Диапазон: [0, &#8734;]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************ reg_alpha  ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>reg_alpha</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 10%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="reg_alpha" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="reg_alpha" name="reg_alpha">
                                </div>
                            </td>
                            <td>
                                Регуляризация L1 для весов.<br>
                                Увеличение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: [0, &#8734;]
                            </td>
                        </tr>
                        <!--************************   ************************* -->
                        
                        <!--************************  reg_lambda ************************* -->
                        <tr>
                           <td class="text-center align-middle">
                            <strong>reg_lambda</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="reg_lambda" class="form-check-label">Значение: 50000</label>
                                    <input type="range" class="form-range" min="0" max="100000" step="1" value="50000" id="reg_lambda" name="reg_lambda">
                                </div>
                            </td>
                            <td>
                                L2-регуляризация весов. Пожалуйста, ознакомьтесь с вводными замечаниями, чтобы понять, как этот гиперпараметр влияет на ваши веса.<br>
                                Увеличение этого гиперпараметра снижает вероятность переобучения.<br>
                                Диапазон: [0, &#8734;]
                            </td>
                        </tr>
                        <!--************************  ************************* -->
                    <table>
                </fieldset>
             `,
    'draw_status': false
    },
    // **********************************************************************************************************************


    // ********************************************Метод классификации KNearestNeighbors***********************************************************
    'knn_classifier':{
    'html': `
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Метод классификации KNearestNeighbors</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('knn_classifier')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="knn_classifier">
                    <input type="hidden" name="methods" value="Classifier">
                    <input type="hidden" name="types" value="knn_classifier">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                            <tr>
                           <td class="text-center align-middle">
                            <strong>n_neighbors</strong>
                               <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="n_neighbors" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10" step="1" value="5" id="n_neighbors" name="n_neighbors">
                                </div>
                            </td>
                    <td>
                        <p>Количество соседей, используемое по умолчанию для запросов kneighbors.</p>
                    </td>
                </tr>
                <tr>

                <td class="text-center align-middle">
                <strong>weights</strong></td>
                  <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 30%; padding-right: 15%">
                    <div class="form-check form-switch">
                        <select class="form-select"  name="weights" id="weights">
                            <option value="uniform" selected>uniform</option>
                            <option value="distance">distance</option>
                            <option value="None">None</option>
                        </select>
                    </td>
                    <td>
                        <p>Функция взвешивания, используемая при прогнозировании. Возможные значения:</p>
                        <ul>
                            <li>
                                <b>uniform</b>: одинаковые веса. Все точки в каждой окрестности взвешиваются одинаково.
                            </li>
                            <li>
                                <b>distance</b>: взвешивание точек обратно пропорционально их расстоянию. в этом случае более близкие соседи точки запроса будут иметь большее влияние, чем соседи, которые находятся дальше.
                            </li>
                        </ul>
                    </td>
                </tr>
                
                
                <tr>
                <td class="text-center align-middle">
                <strong>algorithm</strong></td>
                  <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 25%; padding-right: 15%">
                    <div class="form-check form-switch">
                        <select class="form-select" name="algorithm" id="algorithm">
                            <option value="auto" selected>auto</option>
                            <option value="ball_tree">ball_tree</option>
                            <option value="kd_tree">kd_tree</option>
                            <option value="brute">brute</option>
                        </select>
                        </div>  
                    </td>
                    <td>
                        <p>Алгоритм, используемый для вычисления ближайших соседей:</p>
                        <ul>
                            <li>
                                <b>auto</b> попытается выбрать наиболее подходящий алгоритм на основе значений, переданных методу fit.
                            </li>
                            <li>
                                <b>ball_tree</b> будет использовать BallTree
                            </li>
                            <li>
                                <b>kd_tree</b> будет использовать KDTree
                            </li>
                            <li>
                                <b>brute</b> будет использовать поиск методом перебора.
                            </li>
                        </ul>
                    </td>
                </tr>
                
                <tr>
               <td class="text-center align-middle">
                <strong>leaf_size</strong></td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 10%; padding-right: 15%">
                    <div class="form-check form-switch">
                        <label for="leaf_size" class="form-check-label">Значение: 30</label>
                        <input type="range" class="form-range" min="30" max="50" step="1" value="30" id="leaf_size" name="leaf_size">
                    </div>
                </td>
                    <td>
                        <p>Размер листа передается в BallTree или KDTree. Это может повлиять на скорость построения и выполнения запроса, а также на объем памяти, необходимый для хранения дерева. Оптимальное значение зависит от характера проблемы.</p>
                    </td>
                </tr>
                <tr>
               <td class="text-center align-middle">
                <strong>p</strong></td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 19%; padding-right: 15%">
                    <div class="form-check form-switch">
                        <label for="p" class="form-check-label">Значение: 2</label>
                        <input type="range" class="form-range" min="1" max="5" step="1" value="2" id="p" name="p">
                    </div>
                </td>
                    <td>
                        <p>Степенной параметр для метрики Минковского.</p>
                        <ul>
                            <li>p=1 - эквивалентно использованию manhattan_distance (l1)</li>
                            <li>p=2 - эквивалентно использованию euclidean_distance (l2)</li>
                            <li>Для произвольного p используется minkowski_distance (l_p)</li>
                        </ul>
                        <p>Ожидается, что этот параметр будет положительным.</p>
                    </td>
                </tr>
                
                
                <tr>
                    <td class="text-center align-middle">
                        <strong>n_jobs</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="n_jobs" class="form-check-label">Значение: 1</label>
                            <input type="range" class="form-range" min="-1" max="8" step="1" value="1" id="n_jobs" name="n_jobs">
                        </div>
                    </td>
                    <td>
                        <p>Количество параллельных заданий, выполняемых для поиска соседей. None означает 1, -1 - использование всех процессоров.</p>
                    </td>
                </tr>
            </table>
            </fieldset>
            `,
    'draw_status': false
    },
    // ***************************************************************************************************************************


    'random_forest_classifier':{
    'html':`        
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Классификация RandomForest</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('random_forest_classifier')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="random_forest_classifier">
                    <input type="hidden" name="methods" value="Classifier">
                    <input type="hidden" name="types" value="random_forest_classifier">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                    <tr>
                        <td class="text-center align-middle">
                            <strong>n_estimators</strong>
                        </td>
                       <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 1%; padding-right: 15%">
                            <div class="form-check form-switch">
                                <label for="n_estimators" class="form-check-label">Значение: 100</label>
                                <input type="range" class="form-range" min="50" max="300" step="10" value="100" id="n_estimators" name="n_estimators">
                            </div>
                        </td>         
                        <td>
                            Количество деревьев в лесу
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td class="text-center align-middle">
                            <strong>criterion</strong>
                        </td>
  
                        <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                            <div class="form-check form-switch">
                            <select class="form-select" id="criterion" name="criterion" size="1">
                                <option selected value="gini" selected>gini</option>
                                <option value="entropy">entropy</option>
                                <option value="log_loss">log_loss</option>
                            </select>
                        </td>
                        <td>
                            Функция для измерения качества разделения.
                            Поддерживаемыми критериями являются gini для примеси Джини и log_loss и entropy для получения информации Шеннона.
                        </td>
                    </tr>


                    <tr>
                    <td class="text-center align-middle">
                        <strong>max_depth</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="max_depth" class="form-check-label">Значение: 50</label>
                            <input type="range" class="form-range" min="1" max="100" step="1" value="50" id="max_depth" name="max_depth">
                        </div>
                    </td>
                        </td>
                        <td>
                        
                            Максимальная глубина дерева.
                            Если None, то узлы расширяются до тех пор, пока все листья не станут чистыми или пока все листья не будут содержать меньше выборок min_samples_split.
                        </td>
                    </tr>



                    <tr>
                    <td class="text-center align-middle">
                        <strong>min_samples_split</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 25%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="min_samples_split" class="form-check-label">Значение: 2</label>
                            <input type="range" class="form-range" min="2" max="10" step="0.5" value="2" id="min_samples_split" name="min_samples_split">
                        </div>
                    </td>
                        <td>
                            Минимальное количество выборок, необходимое для разделения внутреннего узла:
                            (минимально число наблюдений в узле родителе)
                            <ul>
                                <li>Если int, то рассматривайте min_samples_split как минимальное число.</li>
                                <li>Если float, то min_samples_split - это дробь, а ceil(min_samples_split * n_samples) - минимальное количество выборок для каждого разделения.</li>
                            </ul>
                        </td>
                    </tr>
                    
                    
                    <tr>
                    <td class="text-center align-middle">
                        <strong>min_samples_leaf</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="min_samples_leaf" class="form-check-label">Значение: 1</label>
                            <input type="range" class="form-range" min="1" max="10" step="1" value="1" id="min_samples_leaf" name="min_samples_leaf">
                        </div>
                    </td>
                        <td>
                            Минимальное количество выборок, необходимое для того, чтобы они находились в конечном узле.
                            (!!!!!минимальное число наблюдений в узле потомке)
                            Точка разделения на любой глубине будет учитываться только в том случае, если она оставляет как минимум min_samples_leaf обучающих выборок в каждой левой и правой ветвях.
                            Это может привести к сглаживанию модели, особенно при регрессии.
                        </td>
                    </tr>


                    <tr>
                    <td class="text-center align-middle">
                        <strong>min_weight_fraction_leaf</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="min_weight_fraction_leaf" class="form-check-label">Значение: 0.0</label>
                            <input type="range" class="form-range" min="0.0" max="10" step="0.5" value="0.0" id="min_weight_fraction_leaf" name="min_weight_fraction_leaf">
                        </div>
                    </td>
                        <td>
                            Минимальная взвешенная доля от общей суммы весов (всех входных выборок), которая должна находиться в конечном узле.
                            Выборки имеют одинаковый вес, если значение sample_weight не указано.
                        </td>
                    </tr>
                    
                    
                    
                    <tr>
                                            <td class="text-center align-middle">
                            <strong>max_features</strong>
                        </td>
  
                        <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 25%; padding-right: 15%">
                            <div class="form-check form-switch">
                            <select class="form-select" id="max_features" name="max_features" size="1">
                                <option selected value="gini" selected>sqrt</option>
                                <option value="entropy">log2</option>
                                <option value="log_loss">None</option>
                            </select>
                        </td>
  
                        <td>
                            Количество функций (переменных), которые следует учитывать при поиске наилучшего разделения:
                            <ul>
                                <li>
                                    <b>int</b> - учитывается функция max_features при каждом разделении.
                                </li>
                                <li>
                                    <b>float</b> -  max_features - это дробь, и при каждом разделении учитывается функция max(1, int(max_features * n_features_in_)).
                                </li>
                                <li>
                                    <b>sqrt</b>  - max_features=sqrt(n_features).
                                </li>
                                <li>
                                    <b>log2</b> -  max_features=log2(n_features).
                                </li>
                                <li>
                                    <b>None</b> - max_features=n_features
                                </li>
                            </ul>
                        </td>
                    </tr>
                    
                    
                    <tr>
                    <td class="text-center align-middle">
                        <strong>max_leaf_nodes</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="max_leaf_nodes" class="form-check-label">Значение: 10</label>
                            <input type="range" class="form-range" min="1" max="20" step="1" value="10" id="max_leaf_nodes" name="max_leaf_nodes">
                        </div>
                    </td>
                       
                        <td>
                            Создает оптимальные деревья с max_leaf_nodes.
                            Наилучшие узлы определяются как относительное уменьшение количества примесей.
                            Если их нет, то количество конечных узлов неограниченно.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td class="text-center align-middle">
                                <strong>bootstrap</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 10%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="bootstrap" id="bootstrap" checked/>
                                    <label for="bootstrap" class="form-check-label">True</label>
                                </div>
                            </td>
                        <td>
                            Указывает, будут ли при повторно использоваться значения из выборки при построении деревьев
                            Если значение равно False, для построения каждого дерева используется весь набор данных.
                        </td>
                    </tr>
                    
                    
                    <tr>
                    <td class="text-center align-middle">
                        <strong>n_jobs</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="n_jobs" class="form-check-label">Значение: 10</label>
                            <input type="range" class="form-range" min="-1" max="10" step="1" value="10" id="n_jobs" name="n_jobs">
                        </div>
                    </td>
                        <td>
                            Количество заданий, выполняемых параллельно.
                            Функции fit, predict, decision_path и apply распараллеливаются по деревьям.
                            None означает 1, -1 означает использование всех процессоров.
                        </td>
                    </tr>
                    
                    
                    
                    <tr>
                    <td class="text-center align-middle">
                        <strong>random_state</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 5%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="random_state" class="form-check-label">Значение: 10</label>
                            <input type="range" class="form-range" min="1" max="1000" step="1" value="10" id="random_state" name="random_state">
                        </div>
                    </td>
                        <td>
                            Управляет как случайностью начальной загрузки выборок, используемых при построении деревьев (если bootstrap=True), так и выборкой объектов, которые следует учитывать при поиске наилучшего разделения в каждом узле (если max_features < n_features).
                        </td>
                    </tr>
                    
                    
 
                        <tr>
                            <td class="text-center align-middle">
                                <strong>warm_start</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 15%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="warm_start" id="warm_start"/>
                                    <label for="warm_start" class="form-check-label">False</label>
                                </div>
                            </td>
                        <td>
                            Если установлено значение True, повторно используется решение предыдущего вызова для подгонки и добавления дополнительных оценок к ансамблю, в противном случае производится подгонка нового леса.
                            Возможность взять старый лес и добавить в него новые деревья
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td class="text-center align-middle">
                                <strong>class_weight</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 20%">
                                <div class="form-check form-switch">
                            <select class="form-select" name="class_weight" id="class_weight">
                                <option value="None" selected>None</option>
                                <option value="balanced">balanced</option>
                                <option value="balanced_subsample">balanced_subsample</option>
                            </select>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <b>balanced</b> режим использует значения y для автоматической настройки весов, обратно пропорциональных частотам классов во входных данных, в виде n_samples / (n_classes * np.bincount(y)).
                                </li>
                                <li>
                                    <b>balanced_subsample</b> аналогичен режиму <b>balanced</b>, за исключением того, что веса вычисляются на основе выборки начальной загрузки для каждого выращенного дерева.
                                </li>
                            </ul>
                        </td>
                    </tr>
                    
                    
                    <tr>
                    <td class="text-center align-middle">
                        <strong>max_samples</strong>
                    </td>
                   <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 25%; padding-right: 15%">
                        <div class="form-check form-switch">
                            <label for="max_samples" class="form-check-label">Значение: 5</label>
                            <input type="range" class="form-range" min="1" max="50" step="0.5" value="5" id="max_samples" name="max_samples">
                        </div>
                    </td>
                        <td>
                            <ul>
                                <li><b>True</b> - количество выборок, которые нужно отобрать из X для обучения каждого базового оценщика.</li>
                                <li><b>None</b> - рисует выборки X.shape[0]</li>
                                <li><b>int</b> - рисует выборки max_samples</li>
                                <li><b>float</b> - выводит max(round(n_samples * max_samples), 1) выборок.Таким образом, max_samples должны находиться в интервале (0.0, 1.0].</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </>`,
    'draw_status': false
    },


    // ********************************************ЛИНЕЙНАЯ РЕГРЕССИЯ***********************************************************
    'LinearRegression':{
        'html':`
            <div class="card-body">
              <div class="row">
                    <div class="col-lg-1">
                        <button class="btn btn-dark btn-sm mb-2 up" style="display: flex">
                            <i class="bi bi-arrow-up"></i>
                        </button>
                        <button class="btn btn-dark btn-sm mb-2 down">
                            <i class="bi bi-arrow-down "></i>
                        </button>
                    </div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">Линейная регрессия</h5>
                        <p class="text-muted text-center pt-0">После выбора параметров нажмите на кнопку "Сохранить"</p>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('LinearRegression')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="LinearRegression">
                    <input type="hidden" name="methods" value="Regression">
                    <input type="hidden" name="types" value="LinearRegression">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>

                        <!--************************ fit_intercept ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>fit_intercept</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 15%">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="fit_intercept" id="fit_intercept" checked/>
                                    <label for="fit_intercept" class="form-check-label">True</label>
                                </div>
                            </td>
                            <td>
                            Добавление свободного члена:<br>
                            <strong>True</strong>: Модель добавляет константу к уравнению регрессии <strong>(по умолчанию)</strong>.<br>
                            <strong>False</strong>: Константа не добавляется, предполагая, что данные уже центрированы.
                            </td>
                        </tr>
                        <!--*************************************************************** -->

                        <!--************************ copyX ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>copyX</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 15%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="missing_value" id="missing_value" checked/>
                                    <label for="missing_value" class="form-check-label">True</label>
                                </div>
                            </td>
                            <td>
                            Копирование данные:<br>
                            <strong>True</strong>: перед обучением создаётся копия входных данных X, что предотвращает их изменение в процессе обучения <strong>(по умолчанию)</strong>.<br>
                            <strong>False</strong>: используются исходные данные (экономия памяти).
                            </td>
                        </tr>
                        <!--*************************************************************** -->

                        <!--************************ positive ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>positive</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 20%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="positive" id="positive"/>
                                    <label for="positive" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Ограничение коэффициентов:<br>
                            <strong>True</strong>: коэффициенты ограничиваются только положительными значениями. Это полезно, когда отрицательные значения недопустимы (например, прогноз доходов).<br>
                            <strong>False</strong>: коэффициенты могут быть, как положительными, так и отрицательными <strong>(по умолчанию)</strong>.
                            </td>
                        </tr>
                        <!--*************************************************************** -->

                        <!--************************ N_jobs ************************* -->
                        <tr>
                        <tr>
                            <td class="text-center align-middle">
                                <strong>N_jobs</strong>
                            </td>
                            <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="N_jobs" class="form-check-label">Значение: 1</label>
                                    <input type="range" class="form-range" min="-1" max="8" step="1" value="1" id="N_jobs" name="N_jobs">
                                </div>
                            </td>
                            <td>
                            Количество используемых процессоров:<br>
                            Определяет, сколько процессоров будет задействовано при вычислениях.<br>
                            <strong>-1</strong> - использовать все доступные ядра.<br>
                            <strong>1</strong> - использовать 1 процессор <strong>(по умолчанию)</strong><br>
                            <strong>2-8</strong> - использовать указанное количество процессоров.
                            </td>
                        </tr>
                        <!--*************************************************************** -->

                    </table>
                </form>
            </div>
         `,
        'draw_status': false
    },
    // *************************************************************************************************************************


    // ********************************************SGDRegression***********************************************************
    'SGDRegression':{
        'html':`
            <div class="card-body">
              <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">SGD регрессия</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('SGDRegression')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="SGDRegression">
                    <input type="hidden" name="methods" value="Regression">
                    <input type="hidden" name="types" value="SGDRegression">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>


                <!--************************ loss ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>loss</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 30%">
                                <select class="form-select" name="loss" size="1">
                                            <option selected="" value="squared_error">squared_error</option>
                                            <option value="huber">huber</option>
                                            <option value="epsilon_insensitive">epsilon_insensitive</option>
                                            <option value="squared_epsilon_insensitive">squared_epsilon_insensitive</option>
                                </select>
                            </td>
                            <td>
                                Функция потерь, используемая для обучения модели:<br>
                                <strong>squared_error</strong> - стандартная квадратичная ошибка, чувствительная к выбросам (по умолчанию).<br>
                                <strong>huber</strong> - устойчива к выбросам, комбинирует квадратичную и абсолютную ошибку.<br>
                                <strong>epsilon_insensitive</strong> - игнорирует ошибки, меньшие заданного значения (для задач поддержки вектора).<br>
                                <strong>squared_epsilon_insensitive</strong> - игнорирует малые ошибки, но штрафует крупные квадратично.
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ penalty ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>penalty</strong>
                            </td>
                            <td class="d-flex justify-content-center align-items-center" style="padding-top: 18%">
                                <select class="form-select" name="penalty" size="1">
                                            <option selected="" value="l2">l2</option>
                                            <option value="l1">l1</option>
                                            <option value="elasticnet">elasticnet</option>
                                            <option value="None">None</option>
                                </select>
                            </td>
                            <td>
                                Тип регуляризации, используемый для предотвращения переобучения:<br>
                                <strong>l2</strong> - (гребневая регрессия) штрафует большие коэффициенты.<br>
                                <strong>l1</strong> - (Лассо) способствует разрежённости модели, обнуляя незначимые признаки.<br>
                                <strong>elasticnet</strong> - комбинация L1 и L2 для баланса.<br>
                                <strong>None</strong> - без регуляризации.
                            </td>
                <!--*************************************************************** -->

                <!--************************ alpha ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                               <strong>alpha</strong>
                            </td>
                            <td class="range d-flex align-middle text-center justify-content-center" style="padding-top: 10%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="alpha" class="form-check-label">Значение: 0.0001</label>
                                    <input type="range" class="form-range" min="0.0001" max="1" step="0.0001" value="0.0001" id="alpha" name="alpha">
                                </div>
                            </td>
                            </td>
                            <td>
                            Коэффициент регуляризации, определяет вес штрафа за сложность модели.<br>
                            Чем выше значение, тем сильнее регуляризации.<br>
                            <strong>Диапазон: [0.0001; 1].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ l1_ratio ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>l1_ratio</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 10%; padding-right: 15%"">
                                <div class="form-check form-switch">
                                    <label for="l1_ratio" class="form-check-label">Значение: 0.15</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.01" value="0.15" id="l1_ratio" name="l1_ratio">
                                </div>
                            </td>
                            <td>
                            Показатель баланса между L1 (Лассо) и L2 (Гребневая) регуляризацией.<br>
                            <strong>0</strong> - чистая L2-регуляризация.<br>
                            <strong>1</strong> - чистая L1-регуляризация.<br>
                            Значения между 0 и 1 комбинированная ElasticNet регуляризация.<br>
                            <strong>Диапазон: [0; 1].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ fit_intercept ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>fit_intercept</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 10%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="fit_intercept" id="fit_intercept" checked/>
                                    <label for="fit_intercept" class="form-check-label">True</label>
                                </div>
                            </td>
                            <td>
                            Добавлять ли свободный член (константу) в модель.<br>
                            <strong>True</strong> - добавляет смещение <strong>(по умолчанию).</strong><br>
                            <strong>False</strong> - модель проходит через начало координат (0,0).
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ max_iter ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>max_iter</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 5%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="max_iter" class="form-check-label">Значение: 1000</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="1000" id="max_iter" name="max_iter">
                                </div>
                            </td>
                            <td>
                            Максимальное количество итераций обучения модели.<br>
                            <strong>По умолчанию: 1000.</strong><br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ tol ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>tol</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 10%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="tol" class="form-check-label">Значение: 0.001</label>
                                    <input type="range" class="form-range" min="0" max="1000" step="0.001" value="0.001" id="tol" name="tol">
                                </div>
                            </td>
                            <td>
                            Допуск для сходимости:<br>
                            Если изменение ошибки на шаге меньше указанного значения, обучение прекращается.<br>
                            <strong>По умолчанию: 0.001.</strong><br>
                            <strong>Диапазон: [0, 1000].</strong>    
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ shuffle ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>shuffle</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 13%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="shuffle" id="shuffle" checked/>
                                    <label for="shuffle" class="form-check-label">True</label>
                                </div>
                            </td>
                            <td>
                            Перемешивание данных:<br>
                            <strong>True</strong> - данные перемешиваются для лучшей сходимости <strong>(По умолчанию)</strong><br>
                            <strong>False</strong> - данные используются в исходном порядке.
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ verbose ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>verbose</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 15%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="verbose" class="form-check-label">Значение: 0</label>
                                    <input type="range" class="form-range" min="0" max="10000" step="1" value="0" id="verbose" name="verbose">
                                </div>
                            </td>
                            <td>
                            Уровень детализации вывода во время обучения:<br>
                            <strong>0</strong> - без вывода <strong>(по умолчанию).</strong><br>
                            <strong>Выше 0</strong> - чем выше значение, тем больше информации о процессе обучения.<br>
                            <strong>Диапазон: [0, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ epsilon ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>epsilon</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 18%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="epsilon" class="form-check-label">Значение: 0.1</label>
                                    <input type="range" class="form-range" min="0" max="10000" step="1" value="0.1" id="epsilon" name="epsilon">
                                </div>
                            </td>
                            <td>
                            Порог чувствительности к ошибкам для функций потерь epsilon_insensitive и squared_epsilon_insensitive:<br>
                            Ошибки меньше этого значения игнорируются.<br>
                            Чем больше значение, тем менее чувствительна модель к малым ошибкам.<br>
                            <strong>По умолчанию: 0.1.</strong><br>
                            <strong>Диапазон: [0, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ random_state ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>random_state</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="random_state" class="form-check-label">Значение: 0</label>
                                    <input type="range" class="form-range" min="0" max="100" step="1" value="0" id="random_state" name="random_state">
                                </div>
                            </td>
                            <td>
                            Фиксирует случайность для воспроизводимости результатов:<br>
                            <strong>0</strong> - случайность не фиксируется <strong>(по умолчанию)</strong>.<br>
                            <strong>Больше 0</strong> - гарантирует одинаковый результат при каждом запуске.<br>
                            <strong>Диапазон: [0, 100].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ learning_rate ************************* -->
                    <tr>
                        <td class="text-center align-middle">
                            <strong>learning_rate</strong>
                        </td>
                        <td class="d-flex justify-content-center align-items-center" style="padding-top: 15%">
                            <select class="form-select" name="learning_rate" size="1">
                                        <option value="constant">constant</option>
                                        <option value="optimal">optimal</option>
                                        <option selected="" value="invscaling">invscaling</option>
                                        <option value="squared_epsilon_insensitive">adaptive</option>
                            </select>
                        </td>
                        <td>
                            Стратегия изменения шага обучения:<br>
                            <strong>constant</strong> - фиксированный шаг обучения.<br>
                            <strong>optimal</strong> - шаг рассчитывается автоматически.<br>
                            <strong>invscaling</strong> - шаг уменьшается с увеличением итераций <strong>(по умолчанию).</strong><br>
                            <strong>adaptive</strong> - шаг уменьшается при отсутствии улучшений.
                        </td>
                    </tr>
                <!--*************************************************************** -->

                <!--************************ eta0 ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>eta0</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 10%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="eta0" class="form-check-label">Значение: 0.01</label>
                                    <input type="range" class="form-range" min="0" max="10000" step="0.01" value="0.01" id="eta0" name="eta0">
                                </div>
                            </td>
                            <td>
                            Начальная скорость обучения:<br>
                            Используется, если выбран один из параметров constant, adaptive или invscaling.<br>
                            <strong>0.01</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [0, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ power_t ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>power_t</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 20%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 0.25</label>
                                    <input type="range" class="form-range" min="-10000" max="10000" step="0.01" value="0.25" id="power_t" name="power_t">
                                </div>
                            </td>
                            <td>
                            Степень убывания скорости обучения при выборе invscaling:<br>
                            <strong>Меньшие значения</strong> приводят к быстрому уменьшению скорости обучения.<br>
                            <strong>Большие значения</strong> большие значения сохраняют скорость обучения дольше.<br>
                            <strong>0.25</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [-10000, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ early_stopping ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>early_stopping</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 13%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="early_stopping" id="early_stopping"/>
                                    <label for="early_stopping" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Останавливает обучение, если валидационная ошибка не уменьшается в течении заданного количества итераций.<br>
                            <strong>True</strong> <br>
                            <strong>False</strong> <strong>(по умолчанию).</strong>.
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ validation_fraction ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>validation_fraction</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 5%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="validation_fraction" class="form-check-label">Значение: 0.1</label>
                                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.1" id="validation_fraction" name="validation_fraction">
                                </div>
                            </td>
                            <td>
                            Доля данных, использующих для валидации при early_stopping=True:<br>
                            <strong>0.1</strong> - <strong> по умолчанию </strong> - 10% от общего количества данных.<br>
                            <strong>Диапазон: [0.0, 1.0].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ n_iter_no_change ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ warm_start ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>warm_start</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 13%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="warm_start" id="warm_start"/>
                                    <label for="warm_start" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Продолжает обучение с предыдущих весов при повторном вызове fit().<br>
                            <strong>True</strong> - использует предыдущие веса.<br>
                            <strong>False</strong> - инициализирует новые веса при каждом запуске <strong>(по умолчанию).</strong>.
                            </td>
                        </tr>
                <!--*************************************************************** -->

                <!--************************ average ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>average</strong>
                            </td>
                            <td class="d-flex align-middle text-center justify-content-center" style="padding-top: 13%">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" name="average" id="average"/>
                                    <label for="average" class="form-check-label">False</label>
                                </div>
                            </td>
                            <td>
                            Усредняет результаты обучения за несколько проходов для повышения стабильности.<br>
                            <strong>True</strong> - использует средние веса за несколько итераций <br>
                            <strong>False</strong> - использует последние веса <strong>(по умолчанию).</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                </div>
                </form>`,
        'draw_status': false
    },

    'RandomForest':{
        'html':`
                <div class="card-body">
                              <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <h5 class="card-title text-center">RandomForest</h5>
                    </div>
                    <div class="col-lg-1 text-end">
                        <i class="bi bi-x-circle-fill text-dark fs-4" onclick="DeleteForm('SGDRegression')" style="cursor: pointer"></i>
                    </div>
                </div>
                <form id="RandomForest">
                <input type="hidden" name="methods" value="Regression">
                    <input type="hidden" name="types" value="RandomForest">
                    <table class="table table-bordered table-light shadow-sm bg-light">
                        <thead>
                            <tr class="text-center">
                                <th class="w-25 bg-dark" style="color: white;">Параметр</th>
                                <th class="w-25 bg-dark" style="color: white;">Значение</th>
                                <th class="w-50 bg-dark" style="color: white;">Описание</th>
                            </tr>
                        </thead>
                <!--************************ n_estimators ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_estimators</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="n_estimators" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_estimators" name="n_estimators">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ criterion ************************* -->
                <p>criterion
                    <select name="loss" size="1">
                                <option selected="" value="squared_error">squared_error</option>
                                <option value="absolute_error">absolute_error</option>
                                <option value="friedman_mse">friedman_mse</option>
                                <option value="poisson">poisson</option>
                    </select>
                </p>
                <!--*************************************************************** -->
                
                <!--************************ max_depth ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ min_samples_split ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ min_samples_leaf ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ min_weight_fraction_leaf ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ max_features ************************* -->
                <p>max_features
                    <select name="max_features" size="1">
                                <option selected="" value="sqrt">sqrt</option>
                                <option value="log2">log2</option>
                                <option value="None">None</option>
                                <input type="number" value="min_weight_fraction_leaf" name="missing_value"/>
                    </select>
                </p>
                <!--*************************************************************** -->
                
                <!--************************ max_leaf_nodes ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ min_impurity_decrease ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_iter_no_change</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="power_t" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_iter_no_change" name="n_iter_no_change">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ bootstrap ************************* -->     
                <p>bootstrap
                    <input type="checkbox" name="bootstrap"/>
                </p>
                <!--*************************************************************** -->
                
                <!--************************ oob_score ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>oob_score</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="oob_score" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="oob_score" name="oob_score">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ n_jobs ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>n_jobs</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="n_jobs" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="n_jobs" name="n_jobs">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ random_state ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>random_state</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="random_state" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="random_state" name="random_state">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ verbose ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>verbose</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="verbose" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="verbose" name="verbose">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ warm_start ************************* -->
                <p>warm_start
                    <input type="checkbox" name="warm_start"/>
                </p>
                <!--*************************************************************** -->
                
                <!--************************ ccp_alpha ************************* -->
                        <tr>
                            <td class="text-center align-middle">
                                <strong>ccp_alpha</strong>
                            </td>
                            <td class="range d-flex justify-content-center align-items-center" style="padding-top: 8%; padding-right: 15%">
                                <div class="form-check form-switch">
                                    <label for="ccp_alpha" class="form-check-label">Значение: 5</label>
                                    <input type="range" class="form-range" min="1" max="10000" step="1" value="5" id="ccp_alpha" name="ccp_alpha">
                                </div>
                            </td>
                            <td>
                            Число итераций без улучшения для остановки обучения при использованнии ранней остановке:<br>
                            <strong>5</strong> - <strong> по умолчанию</strong>.<br>
                            <strong>Диапазон: [1, 10000].</strong>
                            </td>
                        </tr>
                <!--*************************************************************** -->
                
                <!--************************ max_samples ************************* -->
                <p>max_samples
                    <input type="checkbox" name="max_samples"/>
                </p>
                <!--*************************************************************** -->
                
                <!--************************ monotonic_cst ************************* -->
                <p>monotonic_cst
                    <input type="checkbox" name="monotonic_cst"/>
                </p>
                <!--*************************************************************** -->
                
                </div>
                </form>
                </div>`,
         'draw_status': false
    },


    'k_means_clusterization':{
    'html':`
                <fieldset>
                    <legend>Метод кластеризации KMeans</legend>
                    <table id="k_means_clusterization">
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                            <th>Описание</th>
                        </tr>
                        <tr>
                            <td><b>n_clusters</b>, default = 8</td>
                            <td class="range">
                                <p>Значение: <b id="kmeans_n_clusters_label"></b></p>
                                <input type="range" class="form-range" id="kmeans_n_clusters_value" name="points" min="1" max="50" step="1" value="8">
                                </td>
                            <td>
                                Количество кластеров, которые нужно сформировать, а также количество центроидов, которые нужно сгенерировать.<br>
                            </td>
                        </tr>
                        <tr>
                            <td><b>init</b>, default - 'kmeans++'</td>
                            <td>
                                <select name="kmeans_init" size=1>
                                    <option selected value="k-means++">k-means++</option>
                                    <option value="random">random</option>
                                    <option value="pca">pca</option>
                                </select>
                            </td>
                            <td>
                                <p>Метод инициализации</p>
                                <ul>
                                    <li><b>'k-means++'</b>: выбирает начальные центроиды кластера, используя выборку, основанную на эмпирическом распределении вероятности вклада точек в общую инерцию. Этот метод ускоряет сходимость. Реализован алгоритм <b>”жадного k-среднего++"</b>. Он отличается от стандартного k-means++ тем, что на каждом шаге выборки выполняется несколько попыток и выбирается наилучший центроид из них.</li>
                                    <li><b>'random'</b>: выбирается <b>n_clusters</b> наблюдений (строк) случайным образом из данных для начальных центроидов.</li>
                                    <li><b>'pca'</b>: на вход передается массив, он должен иметь форму <b>(n_clusters, n_features)</b> и указывать начальные центры. Если передается вызываемый объект, он должен принимать аргументы <b>X, n_clusters</b> и случайное состояние и возвращать инициализацию
    .</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>n_init</b>, default - 'auto'</td>
                            <td>
                                <p>
                                    <input type="radio" value="auto" name="kmeans_clustering_n_init" checked>auto
                                </p>
                                <p>
                                    <input type="radio" value="n_init" name="kmeans_clustering_n_init">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_n_init">
                                    <div class="range">
                                        <p>n_init = <b id="rf_n_init_label"></b></p>
                                        <input type="range" class="form-range" id="rf_n_init_input" min="1" max="100" step="1" value="1">
                                    </div>
                                </div>
                            </td>
                            <td>
                                Количество раз, когда алгоритм k-means запускается с разными начальными значениями центроидов.<br>
                                Конечные результаты - это наилучший результат из <b>n_init</b> последовательных запусков с точки зрения инерции.<br>
                                Когда <b>n_init='auto'</b>, количество запусков зависит от значения параметра init:<br>
                                - 10, если используется параметр <b>init='random'</b>;<br>
                                - 1, если используется параметр <b>init='k-means++'</b> или <b>init='pca'</b><br>
                            </td>
                        </tr>
                        <tr>
                            <td><b>max_iter</b>, default - 1e-4</td>
                            <td class="range">
                                <p>Значение: <b id="kmeans_max_iter_label"></b></p>
                                <input type="range" class="form-range" id="kmeans_max_iter_value" name="points" min="0" max="1000" step="10" value="100">
                            </td>
                            <td>
                                Максимальное количество итераций алгоритма k-средних для одного запуска.
                            </td>
                        </tr>
                        <tr>
                            <td><b>tol</b>, default=0.0001</td>
                            <td class="range">
                                <p>Значение: <b id="kmeans_tol_label"></b></p>
                                <input type="range" class="form-range" id="kmeans_tol_value" name="points" min="0" max="1" step="0.0001" value="0.0001">
                            </td>
                            <td>
    <p>Параметр <b>tol</b> позволяет настроить относительный допуск по отношению к норме Фробениуса разницы в центрах кластеров двух последовательных итераций для объявления сходимости. <br></p>
                                <p>Если изменение инерции ниже уровня допуска, определенного параметром <b>tol</b>, модель машинного обучения K-Means сходится и останавливает свою работу, в противном случае итерации продолжаются для поиска более оптимальных значений инерции.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>random_state</b>, default - None</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="kmeans_clustering_random_state" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="random_state" name="kmeans_clustering_random_state">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_random_state">
                                    <div class="range">
                                        <p>random_state = <b id="rf_random_state_label"></b></p>
                                        <input type="range" class="form-range" id="rf_random_state_input" min="1" max="1000" step="1" value="1">
                                    </div>
                                </div>
                            </td>
                            <td>
                                Определяет генерацию случайных чисел для инициализации центроида.
                            </td>
                        </tr>
                        <tr>
                            <td><b>copy_x</b>, default - 'True'</td>
                            <td>
                                <select id="kmeans_copy_x">
                                    <option selected value=True>True</option>
                                    <option value=False>False</option>
                                </select>
                            </td>
                            <td>
                                <p>При предварительном вычислении расстояний с числовой точностью лучше сначала центрировать данные.</p>
                                <p>Если значение <b>copy_x</b> равно <b>True</b> (по умолчанию), исходные данные не изменяются.</p>
                                <p>Если значение равно <b>False</b>, исходные данные изменяются и помещаются обратно до возврата функции, но небольшие числовые различия могут быть получены путем вычитания и последующего сложения среднего значения данных.</p>
                                <p>Обратите внимание, что, если исходные данные не являются C-непрерывными, копия будет создана, даже если значение copy_x равно False. Если исходные данные разрежены, но не в формате CSR, копия будет сделана, даже если значение copy_x равно False.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>algorithm</b>, default - 'lloyd'</td>
                            <td>
                                <select id="kmeans_algorithm">
                                    <option selected value="lloyd">lloyd</option>
                                    <option value="elkan">elkan</option>
                                </select>
                            </td>
                            <td>
                                <p>Для использования алгоритма K-средних.</p>
                                <ul>
                                    <li><b>'lloyd'</b>- Классическим алгоритмом в стиле EM. Разбивает набор данных на заранее определенное количество кластеров k. Он работает итеративно, минимизируя внутрикластерные расстояния. Состоит из следующих шагов: <b>инициализация</b> (выбор k начальных центров) --> <b>присвоение кластеров</b> - расчет евклидового расстояния <b>sum(Xim-Cjm)*(1/2)</b>, где Xim - объект, Cjm - центроид кластера --> <b>обновление центроидов</b> --> <b>проверка сходимости</b>.</li>
                                    <li><b>'elkan'</b>- более эффективным для некоторых наборов данных с четко определенными кластерами, если использовать неравенство треугольника. Однако это требует больше памяти из-за выделения дополнительного массива <b>shape (n_samples, n_clusters).</b></li>
                                </ul>
                            </td>
                        </tr>
                    <table>
                </fieldset>
             `,
    'draw_status': false
    },
    'agglomerative_clusterization':{
    'html':`
                <fieldset>
                    <legend>Метод иерархической кластеризации (Agglomerative_clusterization)</legend>
                    <table id="agglomerative_clusterization">
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                            <th>Описание</th>
                        </tr>
                        <tr>
                            <td><b>n_clusters</b>, default = 2</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="agglomerative_clustering_n_clusters" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="n_clusters" name="agglomerative_clustering_n_clusters">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_n_clusters">
                                    <div class="range">
                                        <p>n_clusters = <b id="rf_n_clusters_label"></b></p>
                                        <input type="range" class="form-range" id="rf_n_clusters_input" min="1" max="100" step="1" value="2">
                                    </div>
                                </div>
                            </td>
                            <td>
                                Количество кластеров, которые нужно найти. Оно должно быть равно <b>None</b>, если значение <b>distance_threshold не равно None</b><br>
                            </td>
                        </tr>
                        <tr>
                            <td><b>metric</b>, default = 'euclidean'</td>
                            <td>
                                <select name="agglomerative_metric" size=1>
                                    <option selected value="euclidean">euclidean</option>
                                    <option value="l1">l1</option>
                                    <option value="l2">l2</option>
                                    <option value="manhattan">manhattan</option>
                                    <option value="cosine">cosine</option>
                                </select>
                            </td>
                            <td>
                                <p>Метрика, используемая для вычисления связи:</p>
                                <ul>
                                    <li><b>'euclidean'</b>-  используется для определения близости между объектами, вычисляется расстояние между всеми парами объектов и объединяет их в кластеры на основе минимального расстояния. Это позволяет эффективно группировать данные в зависимости от их пространственной близости
                                    <p><b>Формула - (sum((x-y)^2))^(1/2)</b></p>
                                    </li>
                                    <li><b>'l1'</b>- или манхэттенское расстояние представляют собой способ измерения расстояния между двумя точками в пространстве, основанный на сумме абсолютных разностей их координат.
                                    <p><b>Формула - |x1-x2|+|y1-y2|</b></p></li>
                                    <li><b>'l2'</b>- см. метрику euclidean</li>
                                    <li><b>'manhattan'</b>- см. метрику l1</li>
                                    <li><b>'cosine'</b>- вычисляется не длина, а угол между векторами и позволяет эффективно группировать объекты на основе их направленности в пространстве.
                                    <p><b>Формула - cosine similarity(A,B) = (A*B)/(|A|*|B|)</b></p>
                                    </li>
                                </ul>
                                <p>Если связь задана как <b>“ward”</b>, то принимается только <b>“euclidean”</b>.</p>
                                <p>Если <b>connectivity</b> отсутствует, <b>linkage</b> является <b>“single”</b>, а <b>affinity</b> не является <b>“precomputed”</b>, может быть присвоена любая допустимая метрика парного расстояния.</p>
                            </td>
                        </tr>
                        <!--tr>
                            <td><b>memory</b> {str or object with yhe joblib.Memory}</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="agglomerative_clustering_memory" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="memory" name="agglomerative_clustering_memory">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_memory">
                                    <div class="text">
                                        <p>memory = <b id="rf_memory_label"></b></p>
                                        <input type="text" id="rf_memory_input" value = "">
                                    </div>
                                </div>
                            </td>
                            <td>
                                Используется для кэширования выходных данных вычисления дерева.<br>
                                По умолчанию кэширование не выполняется.<br>
                                Если задана строка, то это <b>путь к каталогу кэширования</b>.
                            </td>
                        </tr-->
                        <tr>
                            <td><b>compute_full_tree</b>, default = 'auto'</td>
                            <td>
                                <select name="agglomerative_compute_full_tree" size=1>
                                    <option selected value="auto">auto</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                            </td>
                            <td>
                            <p>Заблаговременно остановите построение дерева при n_clusters. Это полезно для сокращения времени вычислений, если количество кластеров не так уж мало по сравнению с количеством выборок. Эта опция полезна только при указании матрицы связности.<br></p>
                             <p>Также обратите внимание, что при изменении количества кластеров и использовании кэширования может оказаться выгодным вычисление полного дерева.</p>
                             <p>Значение должно быть <b>True</b>, если <b>distance_threshold</b> не равно None.</p>
                             <p>По умолчанию значение <b>compute_full_tree</b> равно <b>“auto”</b>, что эквивалентно True, когда значение <b>distance_threshold</b> не равно <b>None</b> или значение <b>n_clusters</b> меньше максимального значения между 100 или 0,02 * n_samples.</p>
                             <p>В противном случае значение “auto” эквивалентно значению False</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>linkage</b>, default = 'ward'</td>
                            <td>
                                <select name="agglomerative_linkage" size=1>
                                    <option selected value="ward">ward</option>
                                    <option value="complete">complete</option>
                                    <option value="average">average</option>
                                    <option value="single">single</option>
                                </select>
                            </td>
                            <td>
                                <p>Какой критерий связи использовать.
                                   Критерий связи определяет, какое расстояние использовать между наборами наблюдений.
                                   Алгоритм объединит пары кластеров, которые минимизируют этот критерий.
                                </p>
                                <ul>
                                    <li><b>'ward'</b>: минимизирует дисперсию объединяемых кластеров</li>
                                    <li><b>'average'</b>: используется среднее значение расстояний для каждого наблюдения из двух наборов</li>
                                    <li><b>'complete'</b>: используются максимальные расстояния между всеми наблюдениями из двух наборов</li>
                                    <li><b>'single'</b>: используются минимальные расстояния между всеми наблюдениями из двух наборов</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>distance_threshold</b>, default = None</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="agglomerative_clustering_distance_threshold" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="distance_threshold" name="agglomerative_clustering_distance_threshold">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_distance_threshold">
                                    <div class="range">
                                        <p>distance_threshold = <b id="rf_distance_threshold_label"></b></p>
                                        <input type="range" class="form-range" id="rf_distance_threshold_input" min="1" max="100" step="0.5" value="1">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Пороговое значение расстояния связи, при котором кластеры не будут объединены.</p>
                                <p>Если не None, то значение <b>n_clusters</b> должно быть равно None, а значение <b>compute_full_tree - True</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>compute_distance</b>, default = False</td>
                            <td>
                                <select id="agglomerative_compute_distance">
                                    <option selected value=False>False</option>
                                    <option value=True>True</option>
                                </select>
                            </td>
                            <td>
                                <p>Вычисляет расстояния между кластерами, даже если параметр <b>distance_threshold</b> не используется. Это может быть использовано для визуализации дендрограммы, но требует больших вычислительных затрат и объема памяти.</p>
                            </td>
                        </tr>
                    <table>
                </fieldset>`,
    'draw_status': false
    },
    'dbscan_clusterization':{
    'html':`
                <fieldset>
                    <legend>Метод кластеризации DBSCAN</legend>
                    <table id="dbscan_clusterization">
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                            <th>Описание</th>
                        </tr>
                        <tr>
                            <td><b>eps</b>, default = 0.5</td>
                            <td class="range">
                                <p>Значение: <b id="dbscan_eps_label"></b></p>
                                <input type="range" class="form-range" id="dbscan_eps_value" name="points" min="0" max="1" step="0.1" value="0.5">
                            </td>
                            <td>
                                <p>Максимальное расстояние между двумя выборками, при котором одна выборка считается расположенной по соседству с другой. Это не максимальное ограничение расстояний между точками внутри кластера. Это наиболее важный параметр <b>DBSCAN</b>, который необходимо правильно выбрать для вашего набора данных и функции расстояния</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>min_samples</b>, default = 5</td>
                            <td class="range">
                                <p>Значение: <b id="dbscan_min_samples_label"></b></p>
                                <input type="range" class="form-range" id="dbscan_min_samples_value" name="points" min="0" max="100" step="1" value="5">
                            </td>
                            <td>
                                <p>Количество образцов (или общий вес) в окрестности точки, которую следует считать основной. Это включает в себя саму точку.</p>
                                <p>Если для параметра <b>min_samples</b> установлено большее значение, <b>DBSCAN</b> найдет плотные кластеры.</p>
                                <p>Тогда как если для него установлено меньшее значение, найденные кластеры будут более разреженными.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>metric</b>, default = 'euclidean'</td>
                            <td>
                                <select name="dbscan_metric" size=1>
                                    <option selected value="euclidean">euclidean</option>
                                    <option value="cosine">cosine</option>
                                    <option value="cityblock">cityblock</option>
                                    <option value="l1">l1</option>
                                    <option value="l2">l2</option>
                                    <option value="manhattan">manhattan</option>
                                    <option value="nan_euclidean">nan_euclidean</option>
                                    <option value="canberra">canberra</option>
                                    <option value="chebyshev">chebyshev</option>
                                    <option value="correlation">correlation</option>
                                    <option value="jaccard">jaccard</option>
                                    <option value="minkowski">minkowski</option>
                                    <option value="sqeuclidean">sqeuclidean</option>
                                </select>
                            </td>
                            <td>
                                <p>Метрика, используемая при вычислении расстояния между экземплярами в массиве объектов.</p>
                                <ul>
                                    <li><b>'euclidean'</b>-  используется для определения близости между объектами, вычисляется расстояние между всеми парами объектов и объединяет их в кластеры на основе минимального расстояния. Это позволяет эффективно группировать данные в зависимости от их пространственной близости
                                    <p><b>Формула - (sum((x-y)^2))^(1/2)</b></p>
                                    </li>
                                    <li><b>'l1'</b>- или манхэттенское расстояние представляют собой способ измерения расстояния между двумя точками в пространстве, основанный на сумме абсолютных разностей их координат.
                                    <p><b>Формула - |x1-x2|+|y1-y2|</b></p>
                                    </li>
                                    <li><b>'l2'</b>- см. метрику euclidean
                                    </li>
                                    <li><b>'manhattan'</b>- см. метрику l1
                                    </li>
                                    <li><b>'cosine'</b>- вычисляется не длина, а угол между векторами и позволяет эффективно группировать объекты на основе их направленности в пространстве.
                                    <p><b>Формула - cosine similarity(A,B) = (A*B)/(|A|*|B|)</b></p>
                                    </li>
                                    <li><b>'cityblock'</b>- см. метрику l1. Подходит для данных с прямолинейной структурой, высокоразмерными данными
                                    </li>
                                    <li><b>'nan_euclidean'</b>- Модификация евклидова расстояния, игнорирующая значения NaN.
                                    </li>
                                    <li><b>'canberra'</b>- Эффективна для данных с малым диапазоном значений, может быть чувствительна к 0.
                                    <p><b>Формула - sum(|X-Y|)/(|X|+|Y|)</b></p>
                                    </li>
                                    <li><b>'chebyshev'</b>- максимальная абсолютная разница между координатами.
                                    <p><b>Формула - max(|X-Y|)</b></p>
                                    </li>
                                    <li><b>'correlation'</b>- измеряет степень линейной зависимости между двумя векторами, подходит для любых числовых данных.
                                    </li>
                                    <li><b>'jaccard'</b>- подходит для бинарных и категориальных данных
                                    <p><b>Формула - d(A,B) = |A/\B|/(|A\/B|)</b></p>
                                    </li>
                                    <li><b>'minkowski'</b>- Обобщает евклидово и манхэттенское расстояние с параметром p. Универсальная метрика.
                                    <p><b>Формула - d(A,B) = (sum(|X-Y|)^p)^(1/p)</b></p>
                                    </li>
                                    <li><b>'sqeuclidean'</b>- Квадрат евклидова расстояния и используется для ускорения вычислений.
                                    </li>
                                </ul>
                                <p>Если метрика является строковой или вызываемой, это должен быть один из параметров, разрешенных в <b>sklearn.metrics.pairwise_distances</b> для параметра <b>metric</b>.</p>
                                <p>Метрики <b>'cityblock', 'cosine', 'euclidean', 'l1', 'l2', 'manhattan'</b> поддерживают разреженные матричные входные данные. <b>nan_euclidean</b> - но он пока не поддерживает разреженные матрицы.</p>
                                <p>Для метрик: <b>'canberra', 'chebyshev', 'correlation', 'jaccard', 'minkowski', 'sqeuclidean'</b> нужно смотреть документацию для <b>scipy.spatial.distance</b> для получения подробной информации об этих показателей. Эти показатели не поддерживают разреженные матричные входные данные.</p>
                            </td>
                        </tr>
                        <!--tr>
                            <td><b>metric_params</b> {dict}</td>
                            <td>
                                <p>
                                   <input type="text"  value="" />
                                </p>
                            </td>
                            <td>
                                Дополнительные аргументы ключевые слова для функции metric - подавать в виде dict - {text}.
                            </td>
                        </tr-->
                        <tr>
                            <td><b>algorithm</b>, default = 'auto'</td>
                            <td>
                                <select name="dbscan_algorithm" size=1>
                                    <option selected value="auto">auto</option>
                                    <option value="ball_tree">ball_tree</option>
                                    <option value="kd_tree">kd_tree</option>
                                    <option value="brute">brute</option>
                                </select>
                            </td>
                            <td>
                            <p>Алгоритм, который будет использоваться модулем <b>Nearest Neighbors</b> для вычисления точечных расстояний и поиска ближайших соседей. Подробности смотрите в документации по модулю <b>Nearest Neighbors.</b><br></p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>leaf_size</b>, default = 30</td>
                            <td class="range">
                                <p>Значение: <b id="dbscan_leaf_size_label"></b></p>
                                <input type="range" class="form-range" id="dbscan_leaf_size_value" name="points" min="0" max="100" step="1" value="30">
                            </td>
                            <td>
                                <p>Размер листа передается в <b>Ball Tree</b> или <b>cKDTree</b>. Это может повлиять на скорость построения и выполнения запроса, а также на объем памяти, необходимый для хранения дерева. Оптимальное значение зависит от характера проблемы.<br>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>p</b>, default = None</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="dbscan_p" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="p" name="dbscan_p">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_p">
                                    <div class="range">
                                        <p>p = <b id="rf_p_label"></b></p>
                                        <input type="range" class="form-range" id="rf_p_input" min="1" max="100" step="0.5" value="1">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Степень метрики Минковского, которая будет использоваться для вычисления расстояния между точками.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><b>n_jobs</b>, default = None</td>
                            <td>
                                <p>
                                    <input type="radio" value="None" name="dbscan_n_jobs" checked>None
                                </p>
                                <p>
                                    <input type="radio" value="n_jobs" name="dbscan_n_jobs">Задать значение
                                </p>
                                <div class="hiding_element" id="rf_n_jobs">
                                    <div class="range">
                                        <p>n_jobs = <b id="rf_n_jobs_label"></b></p>
                                        <input type="range" class="form-range" id="rf_n_jobs_input" min="-1" max="100" step="1" value="0">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Количество выполняемых параллельных заданий. None означает 1, если только в контексте joblib.parallel_backend.</p>
                                <p>-1 означает использование всех процессоров.</p>
                            </td>
                        </tr>
                    <table>
                </fieldset>`,
    'draw_status': false
    },


};
