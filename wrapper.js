let a ="hello"
let b = new String ("hello")
console.log(typeof a)
console.log(typeof b)

console.log(a==b)
console.log(a===b)
// why is that when i am applyin the strict equality in the code it basically 
// gives me the false because the value might be same but the type of both of 
//them is definetly diffirent but in the case of the lose equality what we do 
//we are having the same value that is hello in both of them 

//using symbol primitive value
let g=Symbol("id")
console.log(g)

const k1=Symbol("identifiyers")
const k2=Symbol("something")
myobj={}
myobj[k1]="sagar"
myobj[k2]="singh"
console.log//cloning
(myobj)
console.log(k1==k2)

// immutability from the primitive values
let t="sagar"
let lt=t.toUpperCase()
console.log(lt)
console.log(t)

// objects are mutable
let obj={x:1}
console.log(obj)
obj.x=2
console.log(obj)
obj.x=3
console.log(obj)

// arrays are muatable as well
let arr=[2,3,4,5]
arr[0]=10          // new value added there
console.log(arr)
arr.push(24)     // content of the array is also modified
console.log(arr)

//comparision between the object type of values
//over here when we are assigning the value to object in a variable then
//it basically is assigned as a reference to the memory not as the real object itself

let i ={x:2}
let q = {x:2}
console.log(i===q)

arr1=[1,2,3,4,5]
let arr3 = [...arr1];  // Now arr3 is a true copy (shallow)
arr3.push(100);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr3); // [1, 2, 3, 4, 100]

//refernce copy here
ar1=[1,2,3,4,4,6]
ar3=ar1
ar3.push(9)
console.log(ar3)
console.log(ar1)
// we can see that both the array are same when they are printing the same output 
// because we are basically making hte changes in the memory location where the 
//array was orginally created