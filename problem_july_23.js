// question 18
// create a program that will print the first 100 prime numbers


// this is a good question where i have to basically 
//cheack two things and that are first that i have to cheack that that number is a prime number or not
// second thing that i have to cheak that is that is i got my 100 prime number

// now the funciton for cheacking if my number is a prime number or not
function isprime(number){
if(number<2){
    return false
} for(let i=2; i<=Math.sqrt(number);i++){
    if(number%i==0){
        return false
    }
}return true
}
// now lets print the prime and cheack wheather i have printed the 100 or not
function prime (nums){
    let count=0;
    let num=2
    while(count<nums){
        if(isprime(num)){
            count++
            console.log(num)
        }
        
        num++
    }
}
prime(100)

//question 19
//create a fucntion that will return in an array the first "nprimes" prime
//  numbres greater than a particular number startAt
// means that i need to create a function that will take two input 
//and return the desired ouput

// here in this code what i need to do is that i need to find the
//prime number after a certain point that is it

getprime(10,5)
function getprime(nprimes, start){
count =0
    while(count<nprimes){
        if(prime_hai(start)){
            console.log(start)
            count++
        }
        start++
    }
}
function prime_hai(start){
    if(start<2){return false
    }
    for(let i=2;i<=Math.sqrt(start);i++){
        if(start%i==0){
            return false
        }
    }return true
}

//question 20
//rotate the an array to the left one(1) position
 
// this kind of questions are very easy in the js as it can be easily be done with the help of the shift method in the js
function shift_karna(arr){
    let temp=arr.shift()
    arr.push(temp)
    return console.log(arr)
}
let arr=[1,2,3,4,5]
shift_karna(arr)


//question 21
// rotate an array to the right by 1 position

function right_kro(arr1){
    let temp=arr1.pop()
    arr1.unshift(temp)
    return console.log(arr1)
}
let arr1=[1,2,3,4]
right_kro(arr1)

