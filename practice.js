// let x=2,y=4
// let o={x:x,
// y:y,
// }
// console.log(o)
// let b={x,y}
// console.log(b)
// let o= {x:2,y:4}
// let b={name: "sagar", age:23}
// let obj={...o,...b}
// console.log(obj)
// let a= new Array(5)
// console.log(a.length)
// console.log(a)
// let a=[]
// a[100]="hello"
// console.log(a.length)
// console.log(a)
// let a=[1,2,3]
// delete a[1]
// console.log(a)
// console.log(a.length)
// let a=[1,2,3,4,5,6,7,8,9]
// console.log(a.length)
// console.log(a+" this is the actual array")
// a.length=3
// console.log(a)
// a.length=0
// console.log(a)
// let a=["hello world"]
// let str=""
// for(let el of a){
//     str+=el
// }
// console.log(str)
// let st=[..."hello world"]
// for(let [index, letter]of st.entries()){
//     console.log(index, letter)
// }
// let ar= new Array(10)
// for(let i=0;i<ar.length;i++){
//     ar[i]=new Array(10)
// }
// for (let row=0;row<ar.length;row++){
//     for(let column=0;column<ar[row].length;column++){
//         ar[row][column]=row,column
//         console.log(ar[row][column])
//     }console.log()
// }
// let tgh= Date.now()
//  console.log(tgh)
// let t= new Date()
//  console.log(t)
// let ti= t.getTime();
// console.log(ti)
// console.log(String(t))
// console.log(4**1/2)
// console.log('hello')
// let s="hello,world"
// console.log(s.split(","))
// console.log(s[1]) 
// console.log(s.repeat(5))
// console.log(`hello`)
// let a=5;
// let b=10;
// console.log(`\
//     \u2718 we add ${a} 
//     and ${b} and result is ${a+b}`)
function recurtion(x){
    if (x<=1) return 1;
    console.log(x*(x-1))
    return x*recurtion(x-1)

}  recurtion(4)