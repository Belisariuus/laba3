6. Определить, является ли натуральное число n степенью числа 3.
#include <stdio.h>
int main(){
    float s;
    scanf("%f", &s);
    while(s>2){
        s=s/3;
        printf("%f\n",s);
    }
    printf("%f\n",s);
    if(s!=1)
        printf("Число не является степенью числа 3");
    else
        printf("Число является степенью числа 3");

}
