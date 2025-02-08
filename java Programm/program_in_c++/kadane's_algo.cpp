#include <iostream>
using namespace std;
// given array = [3,-4,5,4,-1,7,-8]

int findSubArray(int arr[],int size){
    int maxSum = 0,sum=0;
    for(int i=0; i<size; i++){
       sum += arr[i];
       maxSum = max(sum,maxSum);
       if(sum<0){
           sum = 0;
       }
    }
    return maxSum;
}

int main(){
    int arr[] = {3,-4,5,4,-1,7,-8};
    int size= 7;
    cout<<"max sum = "<<findSubArray(arr,size);
}