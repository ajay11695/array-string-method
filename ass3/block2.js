
  
  
  const fruitBasket = [
    'banana',
    'cherry',
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig',
  ];
  
  
  /* 
  Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
  that fruit has appeared in the array. Store it in new variable fruitsObj
  Output: 
  {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
  */
//  let obj={};
//   for(let i=0;fruitBasket.length>i;i++){
// obj[fruitBasket[i]]=(obj[fruitBasket[i]]||0)+1
//  console.log(obj)
//   }

let fruitsObj=fruitBasket.reduce((acc,cv)=>{
if(acc[cv]){
  acc[cv]=acc[cv]+1
}else{
  acc[cv]=1
}
return acc
},{})
console.log(fruitsObj)
 
  /* 
  Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
  that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()
  Output: 
  [['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
  */
  let fruitsarray=Object.keys(fruitsObj).reduce((acc,cv)=>{
    acc=acc.concat([[cv,fruitsObj[cv]]])
    return acc
  },[]) 
  console.log(fruitsarray);
 
  
  
  
  const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  
  // Using reduce flat data array
 let dataarr=data.reduce((acc,cv)=>{
    acc=acc.concat(cv)
    return acc
 },[])
 console.log(dataarr)
  
  const dataTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11], 12],
  ];
  
  // Using reduce flat dataTwo array
  let data2arr=dataTwo.reduce((acc,cv)=>{
    acc=acc.concat(cv.flat(Infinity))
    return acc
  },[])
  console.log(data2arr)
  
  // /*
  
  // Create these functions which accepts a number value and returns a number value:
  //   - `increment` adds one to the input value
  //   - `double` doubles the input value
  //   - `decrement` decrement 1 from the value 
  //   - `triple` triples the input 
  //   - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
  // */
  let num=0
  function increment(num){
    return num+1
  }
  function double(num){
    return num*2
  }
  function decrement(num){
    return num-1
  }
  function triple(num){
    return num*3
  }
  function half(num){
    return Math.round(num/2)
  }

  
  let pipeline = [
    increment,
    double,
    decrement,
    decrement,
    double,
    triple,
    half,
    increment,
  ];
  

  
  // // /*
  // // Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
  
  
  
  // // NOTE: Initial value will be passed to first function the output of that function will be the input to next function.
  
  // // EXAMPLE:
  // //   initialValue - 3
  // //   increment(3) - return 4
  // //   double(4) - return 8
  // //   decrement(8) - return 7
  
  // //   ...
  // // */

   let out=pipeline.reduce((acc,cv)=>{
    acc=cv(acc);
    return acc;
  },3);
  console.log(out);
  

  
  let pipeline2 = [
    increment,
    half,
    double,
    decrement,
    decrement,
    triple,
    double,
    triple,
    half,
    increment,
    triple
  ];
  
  // Find the output using pipeline2 the initial value if 8
  
  let out2=pipeline2.reduce((acc,cv)=>{
    acc=cv(acc);
    
    return acc;
  },8);
  console.log(out2);