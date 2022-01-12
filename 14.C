//Распечатать первые n (n - задано) чисел Фибоначчи:
#include <stdio.h>
int main() 
{
    int n, k, f1 = 1, f2 = 1, f;
    scanf("%d", &n);
    printf("1 1 ");
    for (k = 2; k < n; ++k) 
    {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        printf("%d ", f2);
    }
}
