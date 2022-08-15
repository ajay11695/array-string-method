// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
console.log(numbers)

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "))
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))
// - Remove the first word in the array (strings)
strings.unshift()
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter(string=>string.includes("is")))
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter(string=>string.indexOf("is")==-1
))


// Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(number=>number%2===0))

// -  Sort Array from smallest to largest
console.log([...numbers].sort((a,b)=>a-b))
// - Remove the last word in strings
strings.pop()
console.log(strings)
// - Find largest number in numbers
let largestnumber=0
for(let num of numbers){
    if(largestnumber<num){
        largestnumber=num
    }
}
console.log(largestnumber)
// - Find longest string in strings
let largeststring=0
for(let num of strings){
    if(largeststring<num.length){
        largeststring=num.length
    }
}
console.log(largeststring)
// console.log(strings.sort((a,b)=>a.length-b.length).pop())
// - Find all the even numbers
let evennumber=[]
for(let num of numbers){
    if(num%2==0){
        evennumber.push(num)
    }
}
console.log(evennumber)
// - Find all the odd numbers
let oddnumber=[]
for(let num of numbers){
    if(num%2!==0){
    oddnumber.push(num)
    }
}
console.log(oddnumber)
// - Place a new word at the start of the array use (unshift)
strings.unshift("a")
//- Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7))
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3,5))
// - Replace 12 & 18 with 1221 and 1881
let nummap=numbers.map(num=>{
    if(num==12){
        return 1221
    }
    if(num==18){
        return 1881
    }
    return num
})
console.log(nummap)
// - Replace words in strings array with the length of the word
let stringlength=strings.map(string=>string.length)
console.log(stringlength)
// - Find the sum of the length of words using above question
let sum=stringlength.reduce((acc,cv)=>{
    acc=acc+cv
    return acc
},0)
console.log(sum)

// - Customers Array
 var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];


//- Find all customers whose firstname starts with 'J'
for(let num of customers){
    if(num.firstname.charAt(0)=="J"){
        console.log(num)
    }
}
// - Create new array with only first name
let arrayfirstname=[]
for(let num of customers){
    arrayfirstname.push(num.firstname)
    }
console.log(arrayfirstname)
// - Create new array with all the full names (ex: "Joe Blogs")
let arrayfullname=[]
for(let num of customers){
    arrayfullname.push(num.firstname+" "+num.lastname)
    }
console.log(arrayfullname)
// - Sort the array created above alphabetically
console.log(arrayfullname.sort())
// - Create a new array that contains only user who has at least one vowel in the firstname.

let newarray=customers.filter(customer=>{
   if( customer.firstname.includes("a")||
    customer.firstname.includes("e")||
    customer.firstname.includes("i")||
    customer.firstname.includes("o")||
    customer.firstname.includes("u")){
        return true

    }else{
        return false
    }
})
 
console.log(newarray)

    