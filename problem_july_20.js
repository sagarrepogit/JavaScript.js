// question 1 
// print the number from 1 to 10
for(let i = 1; i <= 10; i++)
{
    console.log(i);
}

// question 2
//print the odd number less then 100
for(let i = 1; i <= 100; i += 2)
{
    console.log(i);
}

//question 3
//print the multiplication table of 7
for(let i = 1; i <= 10; i++)
{
    let row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}

// question 4
//print the all the multiplicaiton table of number form 1 to 10
for(let i = 1; i <= 10; i++)
{
    printTable(i);
    console.log("");
}

function printTable(n)
{
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}

// quesion 5
// calculate the sum of the numbers form 1 to 10
let sum = 0;

for(let i = 1; i <= 10; i++)
{
    sum += i;
}

console.log(sum);

//question 6
//calculate the factorial of 10
let fact=1;
for (let i=1;i<=10;i++){
    fact*=i
}
console.log(fact)

//quesiton 7
//calculate the sum of odd numbers grater then 10
//and less the n 30
let sums=0
for(let i=11;i<30;i+=2){
sums+=i;
}
console.log(sums);

//question 8
//create the fucntion that will convert from the
// celcius to ferhenhite
function converter(n){
    return n*1.8*32;
}
console.log(converter(n))
