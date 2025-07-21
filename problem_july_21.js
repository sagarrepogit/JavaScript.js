//question no.9
//create a function that will convert the ferenhite to celcius
function converto(n){
    return n-3.8/18;
}
console.log(converto(30))

//question 10
//calculate the sum of numbers in a array of number

let arr=[2,4,4,56,6]
function sumcal(){
let sum=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum) 
}
sumcal(arr)

//question 11
//calculate the average of the number in the array of number 
function average(){
    let average =0;
    for(let i=0; i<arr.length;i++){
        average+=arr[i]
    }
    average=average/arr.length
    console.log(average)
}
let ar = [1, 3, 9, 15, 90];
average(ar)

//question 12
//create the function that recieve the and array of numbers and return the array 
// containing the array only with positive number
function positive(arr){
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        let pos=arr[i];
        if(pos>0){
            arr2.push(pos)
        }
    }return arr2
}
let are = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(positive(are))

//question 13
//find the maximum number in an array of numbers
 function findmax(arr){
    let max=0;
    for(let i=0; i<arr.length;i++){
        let temp=arr[i]
        if(temp>max){
            max=temp
        }
    }
    return max
 }
 let areee = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
 console.log(findmax(areee))