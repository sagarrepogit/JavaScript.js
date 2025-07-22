// question 14
// print the first 10 fibonacii numbe rwithout using the 
// recurison
function fibonacii(){
    let first=0;
    let second=1;
    console.log(first)
    console.log(second)
    let i =2;
    do{
        let feb= first+ second;
        console.log(feb)
        first= second
        second= feb
        i++
    }
    while(i <=10)}
    fibonacii()

// question 15
//create a function that will create the nth fibonacii number using the recurstion
function nth(n){
if (n==0){
    return 0
}
if(n==1){
    return 1
}
return nth(n-1)+nth(n-2)
}
console.log(nth(2))

//question 16
//create a funciotn that will return a boolean specifiying that the number is not 
//prime

function isprime(n){
    if(n<2){
        return false
    }
    if(n==2){
        return true
    }
    if(n>=2){
        for (let i=2;i<=Math.sqrt(n);i++){
            if (n%i==0){
                return false
            }
        }
        return true
    }
    
}
console.log(isprime(11))

//question 17
//calculate the sum of the digits of the positive integer number
function sumdigit(t){
if(t<0){
    return console.log("this is a negative digit")
}

let sum =0
for (let i=t;i>0;i=Math.floor(i/10)){
    sum+=i%10
}return sum
}
console.log(sumdigit(1234))

//question 18
//print the first 100 prime numbers
function prime(n){
let numeber=100
for(let i=2;number>0;i++){
    if(i==2){
        console.log(2)
        number--
    }
    for(let j=)
}
}