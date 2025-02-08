// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

void uniqueNumber(int arr[], int n){
   
    for(int i=0;i<n;i++){
        int match=0;
        for(int j=0;j<n;j++){
            if(arr[i]==arr[j]){
                match +=1;
            }
        }
        if(match==1){
            cout<<arr[i]<<" ";
        }
    }
}


int main() {
    // Write C++ code here
    int n;
    cout<<"Enter array length :";
    cin>>n;
    
    int arr[n];
    cout << "Enter " << n << " elements:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    uniqueNumber(arr,n);
    return 0;
}