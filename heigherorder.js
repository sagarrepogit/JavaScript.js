const arr=[5,1,3,2,6];
//using the map funcition in order to make the transformation
function isodd(x){
 return x%2;
}
const output = arr.filter(isodd);
console.log(output);