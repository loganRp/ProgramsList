function isValid(arr,mid,student){
    let page = 0, stu = 1
    for (let i = 0; i < arr.length; i++) {
        if((arr[i] + page) <= mid){
            page += arr[i];
        }else{
            stu++;
            page = arr[i]
        }
    }
    return stu<=student ? true : false

}

function allocation(arr,stu){
    let s = 0, e = arr.reduce((sum,ite)=> sum+=ite);
    let ans = -1;
    while(s<=e){
        let mid = Math.floor(s+(e-s)/2);
        if(isValid(arr,mid,stu)){
            ans = mid;
            e = mid-1;
        }else{
            s = mid+1
        }
    }
    return ans;
}

function main(){
    let arr = [15,17,20,10];
    let b = 6,  m = 2;
    return allocation(arr,m);
}

console.log(main());
