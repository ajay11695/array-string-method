// Implement the methods given below:
// You can only use for or for..of loop
// First write down the steps of how the methods work
// After writing the steps convert it into code
// Example:
// map

// Steps
// Map accepts a callback function in our case we need two arguments array and callback
// The callback function gets access to three things (elm, index, arr)
// call the callback function with each values
// store the return value in a new array for each element
// return the new array
// Implementation
function map(array,callback){
    let final=[]
    for(let i=0;i<array.length;i++){
        let ele=array[i]
        final.push(callback(ele,i,array))
    }
    return final
}
  
  //forEach
  // forEach accept callback function in our case we need two arguments array and callback function
  // The call back function gets access to three things (elm,index,arr)
  //call the callback function with each value
  // does not store the value ,value is put in garbage collector
  // Does not return anything 
  // Implementation
 
  // Your code goes here
  function forEach(array,callback){
    for(let i=0;i<array.length;i++){
        let elm=array[i]
        callback(elm,i,array)
    }
  }

  //reduce
  // reduce accept callback function in our case we need two arguments array and callback function
  // The call back function gets access to three things (elm,index,arr)
  //call the callback function with each value ,each value is stored in current value then accumulator will store previous
  // and current value in it.
  // accumulator and current value is passed to callback fun. ,cuurent value is array value
  // returns the final value of accumulator
  // Implementation
 
  // Your code goes here
function reduce(array,callback,iv){
    let acc=iv;
    for(let i=0;i<array.length;i++){
        let cv=array[i]
        acc=callback(acc,cv,i,array)
    }
    return acc
}

  //find
  // Your code goes here
  // Steps
  // find accepts a callback function in our case we need two arguments array and callback
  // The callback function gets access to three things (elm, index, arr)
  // call the callback function with each values
  // store the return value in a variable(boolean).
  // return the variable
  // Implementation
 function find(array,callback){
    for(let i=0;i<array.length;i++){
        let elm=array[i]
        if(callback(elm,i,array)){
        return elm
        }
    }
 }
  
    //filter
  // Your code goes here
  // Steps
  // filter accepts a callback function in our case we need two arguments array and callback
  // The callback function gets access to three things (elm, index, arr)
  // call the callback function with each values
  // each value will be pushed in new array only if callback function returns true for that value
  // return the final array of filterd values
  // Implementation
 function filter(array,callback){
    let final=[]
    for(let i=0;i<array.length;i++){
        let elm=array[i]
        if(callback(elm,i ,array)){
            final.push(elm)
        }
    }
    return final
 }
// To Test You Functions
let array = [10, 20, 43, 56, 76, 89, 90];


forEach(array, (num, index, array) => {
  console.log(num, index, array);
});

console.log(map(array, (num, index, array) => {
  return num + index;
}));

console.log(filter(array, (num, index, array) => {
  return num % 2 === 0;
}));
console.log(reduce(array, (acc, num) => {
  return acc + num;
}, 0));

console.log(find(array, (num) => num === 20));
