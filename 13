// 13. Распечатать первые n (n - задано) простых чисел (p - простое число, если p >= 2 и делится только на 1 и на себя).
#include <stdio.h>
int main()
{
    int i=2,n,k,m;
     printf("n = ");
    scanf("%d",&n);
    while(n > 0)
    {
        k = 0;
        m = i;
        while( m > 1)
        {
            if(i%m == 0)
                k++;
            if (k > 1)
                break;
            m--;
        }
        if (k == 1)
        {
            printf("%d\n",i);
                    n--;
        }
        i++;
    }
}
