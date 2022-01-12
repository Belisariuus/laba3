5. Определить, верно ли, что куб суммы цифр натурального числа n равен n2.
#include <stdio.h>
int main(){
    int s,z,k=0;
    scanf("%d", &z);
    s=z*z;
    printf("%d\n",s);
    while(z>0){
        k=k+z%10;
        z=z/10;
        printf("%d %d ",k,z);
    }
    if(k*k*k==s)
        printf("Верно");
    else
        printf("Неверно");

}
