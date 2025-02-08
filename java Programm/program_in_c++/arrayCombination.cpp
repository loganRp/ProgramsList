#include <iostream>
using namespace std;

// brute force method
void findSubArray(int arr[],int size){
    for(int i=0; i<size; i++){
        for(int j=i; j<size; j++){
            for(int f=i; f<=j; f++){
                cout<<arr[f];
            }
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    int arr[] = {2,4,5,9,7};
    int size= 5;
    findSubArray(arr,size);
}