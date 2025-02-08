#include <iostream>
using namespace std;

int reverseNum(int a)
{
    int rev = 0;
    while (a % 10 > 0)
    {
        int num = a % 10;
        rev = rev * 10 + num;
        a = a / 10;
    }
    return rev;
}
int main()
{
    int n;
    cout << "Enter a number : ";
    cin >> n;
    int reverse = reverseNum(n);
    cout << "Reverse number is : " << reverse << endl;
    return 0;
}


