// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int  sumNum(int arr[], int n){
    int sum =n*(n+1)/2;
    // for(int i=0;i<n;i++){
    //     sum +=arr[i];
    // }
    return sum;
}

int  prod(int arr[], int n){
    int sum =1;
    for(int i=0;i<n;i++){
        sum *=arr[i];
    }
    return sum;
}

int main() {
    // Write C++ code here
    int n = 6;
    int arr[] = {2,5,3,6,8,3};
    cout<<"sum of number :"<<sumNum(arr,n)<<endl;
     cout<<"Product of number :"<<prod(arr,n)<<endl;
    return 0;
}