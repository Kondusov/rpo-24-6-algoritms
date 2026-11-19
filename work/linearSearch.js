function linearSearch(arr, value){
    for(i=0; i < arr.length; i++){
        console.log(i);
        if(arr[i] == value){
            return i;
        }
    }
    return -1;
}
let arr1 = [1,3,5,6,7,8,9];
console.log(linearSearch(arr1, 3));