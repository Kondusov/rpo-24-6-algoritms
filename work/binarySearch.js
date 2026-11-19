function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
        let midlle = Math.floor((left + right) / 2);
        if(arr[midlle] == value){ return midlle}
        else if(value < arr[midlle]){
            right = midlle-1;
        }else{
            left = midlle+1;
        }
    }
}

let arr1 = [1,3,5,6,7,8,9];
binarySearch(arr1, 3);