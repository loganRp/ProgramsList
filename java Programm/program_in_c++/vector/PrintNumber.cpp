// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Write C++ code here
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(2);
    vec.push_back(1);
    cout<< vec.size() <<endl;
    cout<< vec.capacity() <<endl;
    for(int i =0 ;i< vec.size();i++){
        cout<<vec[i]<< " ";
    }
    return 0;
}