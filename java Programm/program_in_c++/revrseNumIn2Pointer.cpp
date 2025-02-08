// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
void reverseArr(int arr[],int n){
    int start = 0;
    int end = n-1;
    while(start<end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
int main() {
    // Write C++ code here
    int n = 6;
    int arr[] = {2,5,3,6,8,3};
    reverseArr(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}