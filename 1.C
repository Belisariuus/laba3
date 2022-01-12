1. Подсчитать количество натуральных чисел n ( 111 £ n £ 999 ), в записи которых есть
а) две одинаковые цифры;
#include <stdio.h>
int main(){
    int a,b,c,n=0;
    for(int i=111; i<=999; i++){
        a=i/100;
        b=i/10%10;
        c=i%10;
        if(a==b || b==c || a==c || a==b==c)
            n+=1;
    }
    printf("%d", n);
} 
b) только две одинаковые цифры
#include <stdio.h>
int main(){
    int a,b,c,n=0;
    for(int i=111; i<=999; i++){
        a=i/100;
        b=i/10%10;
        c=i%10;
        if((a==b && b!=c) || (b==c && c!=a) || (a==c && c!=b))
            n+=1;
    }
    printf("%d", n);
} 
