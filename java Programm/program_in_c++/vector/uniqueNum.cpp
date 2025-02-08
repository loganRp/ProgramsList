// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

int uniqueNum(const vector<int>& vec){                // where & = call by reference
    int num = 0;
     for(int i =0 ;i<vec.size();i++){
        num = num ^ vec[i];                              // ^ sign (XOR),   where same number gives return = 0;   eg:- 2^2 = 0
    } 
    return num;
}
int main() {
    // Write C++ code here
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(2);
    vec.push_back(1);
    // cout<< vec.size() <<endl;
    // cout<< vec.capacity() <<endl;
    // int num = 0;
    // for(int =0 ;i< vec.size();i++){
    //     num = num^vec[i];
    // }
    // cout<< num <<endl;
    // int vec[] = {1,2,4,3,2,1,3};
        cout<< uniqueNum(vec);
    return 0;
}