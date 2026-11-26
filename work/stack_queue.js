function stack(arr=[], element=false, getElem){
    if(getElem!=undefined){return arr.pop()}
    if(element != false){arr.push(element)}
    return arr;
}
let arrStack = [1,3,4]
console.log(stack(arrStack));
console.log(stack(arrStack, 5));
console.log(stack(undefined, 'строка в новом пустом стеке'));
console.log(stack(arr1, 'строка в существуещем стеке'));
console.log(arr1);
console.log(stack(arr1, undefined, true));
console.log(arr1);