// Вычислить значение å i! для i, изменяющихся от 1 до n. Воспользоваться соотношением å i! = 1 + 1*2 + 1*2*3 +...+ 1*2*3*...*n = 1+2*(1+3*(1+ +n*(1)...)).
#include <stdio.h>
int main()
{
int result, n;
result=1;
scanf("%d",&n);
while(n>1){
  result=result*n+1;
  n--;
}
printf("%d",result);
}
