#include <iostream>
using namespace std;
// given array = [3,-4,5,4,-1,7,-8]


// method name moore's algorithm
int maxFrequency(int arr[],int size){
    int freq = 0,ans=0;
    for(int i=0; i<size; i++){
        if(freq == 0){
            ans = arr[i];
        }else if(ans == arr[i]){
            freq++;
        }else{
            freq--;
        }
    }
    return ans;
}

int main(){
    int arr[] = {3,4,5,4,7,8,8,10,14,6,7,8,4,4};
    int size= 14;
    cout<<"Max Frequency = "<<maxFrequency(arr,size);
}