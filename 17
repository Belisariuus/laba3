// 17. Для данного вещественного числа x и натурального n вычислить:
// a) sin x + sin2x + ... + sinnx
#include <stdio.h>
#include <math.h>
int main()
{
  int a,b,c;
  c=1;
  scanf("%d",&a);
  float x,q,y,t; x = 5.0;t=0;
  for (b = 1; c<=a; b++)
    {
      q=sin(x);
      y = pow(q,c);
      c+=1;
      t+=y;
    }
printf("%f",t);
}
#include <stdio.h>
#include <math.h>
int main()
{


// b) sin x + sinx2 + ... + sinxn
  int a,b,c;
  c=1;
  scanf("%d",&a);
  float x,q,y,t; x = 5.0;t=0;
  for (b = 1; c<=a; b++)
    {
      q=pow(x,c);
      y = sin(q);
      c+=1;
      t+=q;
    }
printf("%f",t);
} 


c) sin x + sin(sin x ) + ... + sin ( sin (... sin(sin x) ... ))
#include <stdio.h>
#include <math.h>
int main()
{
  int i,n;
  scanf("%d",&n);
  float x,q,y,t; x = 5.0;t=0.0;
  for (i=1; i<n; i++)
    {
      y = sin(x);
      q=sin(y);
      t+=y;
      y = q;
    }
printf("%f",t);
}
