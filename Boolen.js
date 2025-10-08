/* there are several types of boolen value which have the 
returning value as truthy or falsy*/
  console.log(Boolean(""));
  console.log(Boolean(0));
  console.log(Boolean(-0));
  console.log("4"+Boolean(undefined));
  console.log("5"+Boolean(NaN));
  // now a good example where it returns the truthy 
  //value
  let result= false||"sagar"
  console.log(result)
  // why does it resturn the sagar because the
  // or || always return the truthy value
  console.log(Boolean(!false));
  console.log(Boolean(!!false));
  // comparing with false
  console.log(false==0);
  console.log(false===0);
  // common mistake for the boolean value we can say that 
  // we are comparing false with false it will always give true as a output
  let res = "";
  if (res==false){
    console.log("this is the false statement");
  }
  // this condition will give the output to be the true we need to avoid this kind
  // of mistake in the making 

  // the truthy values
  // everything after the falsy value is considered to be the truthy value 
  export let name= "sagar";
  if(name){
    console.log("name exits");
  }
  else{
    console.log("name do not exits");
  }
  
  // empty array is also considered as a 
  //truthy value in the javascript because
  //it is an object and all the object in the 
  //javascript are considered to be truthy

  let arr=[]
  if(arr){
    console.log("this is the truthy value");
  }
  // now all the objects are the truthy value in the javascript 
   let obj={};
   if(obj){
    console.log("this is the truthy value");
   }
   //string with a space is considered as a truthy value
   let str=" "
   if(str){
    console.log("string is true");
   }
   // even the custom made funciton return the value as the true value 
   function greet(){
    return "hello"
   }
   if(greet){
    console.log("this is a truthy fucniton ")
   }