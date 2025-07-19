const redius =[3,1,2,4];
/*this is the code for the calculating the area
of the circle now logic is */
const calculateArea= function(redius){
    const output=[];
    for(let i=0;i<redius.length;i++){
        output.push(Math.PI*redius[i]*redius[i]);
    }
    return output;
};
console.log(calculateArea(redius));
/* now if we want to calculate the perimeter
of the circle then we will have to do another 
same kind of the logic */
const calculateperimeter=function(redius){
    const output=[];
    for(let i=0;i<redius.length;i++){
        output.push(Math.PI*2*redius[i]);
    }
    return output;
}
console.log(calculateperimeter(redius));
// /* there is one thing that we might have
// noticed and that is that we are repeating 
// the code again and again due to that this is
// not an efficient way of running the code
// and wiht the help of the higher order function
// we can basically reduce the code lenght drastically
// by passing the logic and the fucntion 
// in the code*/

// // repeating code now
const repeat=function(redius,logic){
    const output=[];
    for(let i=0;i<redius.length;i++){
        output.push(logic(redius[i]));
    } return output;
}
//logic for the area 
const area=function(red){
    return Math.PI*red*red;

};
console.log(repeat(redius,area));
/* now this is the way to do the higher
order function and by doing that we are able to 
minimize the code that is written and 
we are making a fucntion get accept a funciton 
and we are able to pass a funcion in a funciotn
this is what a higher order fucniton is like*/