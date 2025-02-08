// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int maxNum(int arr[], int n){
    int max = arr[0];
    for(int i=0;i<n;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
int minNum(int arr[], int n){
    int min = arr[0];
    for(int i=0;i<n;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
void swapMaxMinNum(int arr[], int n, int max, int min){
    for(int i=0; i<n; i++){
        if(max==arr[i]){
            arr[i] = min;
        }else if(min == arr[i]){
            arr[i] = max;
        }
    }
}
int main() {
    // Write C++ code here
    int n = 6;
    int arr[] = {2,5,3,6,8,3};
    int max = maxNum(arr,n);
    int min = minNum(arr,n);
    cout<<"original array :"<<endl;
    for(int i=0; i<n ; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    cout<<"max num : " << max<<endl;
    cout<<"min num : "<< min<<endl;
    
    cout<<"After swaping min max"<<endl;
    swapMaxMinNum(arr,n,max,min);
    for(int i=0; i<n ; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}