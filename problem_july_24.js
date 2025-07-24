// question 22
//reverse a array
let arr=[1,2,3,4,5]
console.log("this is the initial array"+arr)
let first=0
let last =arr.length-1
while(first<last){
    let temp=arr[first]
    arr[first]=arr[last]
    arr[last]=temp
    first++
    last--
}
console.log("this is the updated array"+arr)

//question 23
//reverse a string
// reversing a string in the javascript is not as easy as reversing the array in the javascript
//because the string is immutable in nature that means that we cannot reverse the string directly by converting that
//string into the array  and then after you join it that is how the javascript is reversing the string

//1st method (by using methods)
let sidha = "JavaScript";
let ulta = sidha.split("").reverse().join()
console.log(ulta)

//2nd method(manual one)
let karnahai=""
for(let i=sidha.length-1;i>=0;i--){
    karnahai+=sidha[i]+","

}
console.log(karnahai)

//question 24
// a function that will merge two arrays and return the result as a new array
// in order to this question there are basically three ways in which i will solve the
//problem
let arr1=[1,2,3]
let arr2=[4,5,6]
//1st method with the use of spread operator very easy
let res=[...arr1,...arr2]
console.log(res)
//second by using the concat method
let jodo= arr1.concat(arr2)
console.log(jodo)
//manual method
function jodna_hai(arr1, arr2){
let dono=[]
for(let element of arr1){
    dono.push(element)
}
for(let element of arr2){
    dono.push(element)
}
return dono
}
let milgya=jodna_hai(arr1,arr2)
console.log(milgya)

//question 25
// Create a function that will receive two arrays and will
//  return an array with elements that are in the first array but not in the second
// this will use the .inlude() method
function ekarray(arr1,arr2){
    let result=[]
    for(let el of arr1){
        if(!arr2.includes(el)){
            result.push(el)
        }
    }return result
}
console.log(ekarray(arr1,arr2))

