// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

// with reverse loop
void reverse(const vector<int>& vec){
    for(int i=vec.size()-1; i>=0; i--){
        cout<<vec[i]<<" ";
    }
}

// two pointer
void reverse(vector<int>& vec){
    int start = 0;
    int end = vec.size()-1;

    while(start<end){
        int temp = vec[start];
        vec[start] =  vec[end];
        vec[end] = temp;
        start++;
        end--
    }
}


int main() {
    // Write C++ code here
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.push_back(5);
    // cout<< vec.size() <<endl;
    // cout<< vec.capacity() <<endl;
    // for(int i =0 ;i< vec.size();i++){
    //     cout<<vec[i]<< " ";
    // }
    
    cout<<"original array"<<endl;
    for(int i=0 ;i<vec.size(); i++){
        cout<<vec[i]<< " ";
    }
    reverse(vec);
    cout<<endl;
    cout<<"Reverse array"<<endl;
    for(int i=0 ;i<vec.size(); i++){
        cout<<vec[i]<< " ";
    }
    return 0;
}