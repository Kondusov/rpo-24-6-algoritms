function summ(arr, i=0){
    if(i>arr.length-1){return 0}
    else{
        return arr[i] + summ(arr, ++i);
    }
}
let arr1 = [1,3,4,5]
console.log(summ(arr1));