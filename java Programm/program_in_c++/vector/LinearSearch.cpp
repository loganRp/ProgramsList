// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

int findNum(const vector<int>& vec, int num){
     for(int i=0; i<vec.size(); i++){
        if(num  == vec[i]){
            return i;
        }
    }
   return -1;
}
int main() {
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(2);
    vec.push_back(1);
    int number = 8;
     int index = findNum(vec,number);
     if(index>0){
        cout<<"Number "<<number<<" found at index : "<<index<<endl;
     }else{
         cout<<"Number not found."<<endl;
     }
    
    return 0;
}