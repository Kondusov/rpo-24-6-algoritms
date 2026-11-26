class Stack{
    constructor(arr=[]){
        this.arr= arr;
    }
    setItem(element){
        return this.arr.push(element)
    }
    getItem(){
        return this.arr.pop()
    }
    show(){
        return console.log(this.arr);
    }
}
let arr1 = [1,3,4,5]
let my_stack = new Stack();
my_stack.setItem(1);
my_stack.show();
let my_stack2 = new Stack(arr1);
my_stack2.setItem(6);
my_stack2.show();
my_stack2.getItem();
my_stack2.show();

class Queue{
    constructor(arr=[]){
        this.arr= arr;
    }
    setItem(element){
        return this.arr.push(element)
    }
    getItem(){
        return this.arr.shift()
    }
    show(){
        return console.log(this.arr);
    }
}