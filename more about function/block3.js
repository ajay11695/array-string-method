//            scope

// What will be the output of the following code with reason (write the error message if any)
{
  let username = 'John';
}
console.log(username);// undefined//variable is block scope which we can not access outside
// What will be the output of the following code with reason (write the error message if any)
{
  var username = 'John';
}
console.log(username);//john//var is function scope
// What will be the output of the following code with reason (write the error message if any)
{
  const username = 'John';
}
console.log(username);//john
// What will be the output of the following code with reason (write the error message if any)
// {
//   let num = 21;
// }
// let secondNum = 200;
// function add() {
//   return num + num2;
// }
// console.log(add());// error num is not define num is in other block
// What will be the output of the following code with reason (write the error message if any)
// {
//   var num = 21;
// }
// let secondNum = 200;
// function add() {
//   return num + num2;
// }
// console.log(add());//error
// What will be the output of the following code with reason (write the error message if any)
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);//undefine 
// What will be the output of the following code with reason (write the error message if any)
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);//20
// What will be the output of the following code with reason (write the error message if any)
// for (const i = 0; i < 20; i++) {
//   //
  
// }
// console.log(i);//error const  takes constant value
// What will be the output of the following code with reason (write the error message if any)
if (true) {
  let user = 'John';
}
console.log(user);//undeined
// What will be the output of the following code with reason (write the error message if any)
if (true) {
  var user = 'John';
}
console.log(user);//john
// What will be the output of the following code with reason (write the error message if any)
if (true) {
  const user = 'John';
}
console.log(user);//john
// What will be the output of the following code with reason (write the error message if any)
// if (true) {
//   const number = 21;
//   console.log(number++);
// }
// error number is not define because it is const
// What will be the output of the following code with reason (write the error message if any)
// if (true) {
//   const number = 21;
//   console.log((number += 21));
// }
//  error number is not define because it is const
// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
}

console.log(first());//undefine
// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  second();
}

console.log(first());//undefined
// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
  }
  second();
  return one + two;
}

console.log(first());//undefined
// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  return second();
}

console.log(first());//3
// What will be the output of the following code with reason (write the error message if any)
function first() {
  let one = 1;
  function second() {
    let two = 2;
    let one = 100;
    return one + two;
  }
  return second();
}

console.log(first());//102
// What will be the output of the following code with reason (write the error message if any)
// let three = 300;
function first() {
  let one = 1;
  let three = 3;
  function second() {
    let two = 2;
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first());//105
// What will be the output of the following code with reason (write the error message if any)
let three = 300;
function first() {
  let one = 1;
  let two = 2;
  function second() {
    let one = 100;
    return one + two +three;
  }
  return second();
}

console.log(first());//