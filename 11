// 11. Дано натуральное число n. Получить все такие натуральные q, что n делится на q2 и не делится на q3.
#include <stdio.h>
int main(){
    int q=1, n;
    scanf("%d",&n);
    while(q<n){
        if ((n%(q*q) == 0) && (n % (q*q*q)!=0)){
            printf("%d\n", q);
        }
        q++;
    }
    return 0;
}
