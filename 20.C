// 20. Если p и q - простые числа и q = p+2, то они называются простыми сдвоенными числами или “близнецами” (twin primes). Например, 3 и 5 - такие простые числа. Распечатать все простые сдвоенные числа, меньшие N.
#include <stdio.h>
int gg(int n){
    if (n > 1) 
    {
        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return 0;
        return 1;
    } 
    else
        return 0;
}
int main ()
{
    int p=3, n;
    scanf("%d", &n);
    while (p+2<n)
    {
        if (gg(p) && gg(p+2))
            printf("(%d %d) ", p, p+2);
        p+=1;
    }
}
