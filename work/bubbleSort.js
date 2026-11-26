function bubbleSort(arr){
    for(i=0; i<arr.length; i++){
        console.log(`количество итераций цикла i ${i}`);
        for(j=0; j< arr.length-i; j++){
            console.log(`кол-во итераций цикла J ${j}`)
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr1 = [78,4,1,97,4,2];
console.log(bubbleSort(arr1));