// Reading the requirements:
// @name - name of the function
// @parameter - parameter name the function accepts
// @return - data type of return value
Questions:
// Write a function to check whether input value is a string or not.
/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
function isString(value){
//     if(value.includes(' ')){
//         return true
//     }else{
//         return false
//     }
  
return typeof value=="string"
}
// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;
// Write a function to check whether a string is blank or not.
/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
function isBlank(value){
// if(value==''){
//     return true
// }else{
//     return false
// }
return Boolean(value)

}
// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;
// Write a function to split a string and convert it into an array of words.
/* Requirements
  @name stringToArray
  @parameter (string) text
  @return Array
*/

// your code goes here
function stringToArray(text){
    return  text.split(" ")
}
// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];
// Write a function to return specified number of characters from a string.
/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
// your code goes here
function truncate(text,len){
    return text.slice(0,len)
}
// Test
console.log(truncate('John Snow', 4)); // "John";
// Write a function to convert a string name in abbreviated form
/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/

// your code goes here
function abbrevName(fullName){
    let arr=fullName.split(" ")
    return `${arr[0]} ${arr[1][0]}.`
}
// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."
// Write a function to hide email addresses to protect from unauthorized user.
/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/

// your code goes here
function protect(email){
    let arr=email.split("@")
    return `${arr[0].slice(0,4)}...@${arr[1]}`
}
// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@example.com"
// Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.
/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

// your code goes here
function protectAgain(email){
    let arr=email.split("@")
    let dot=arr[0].length
    let first=arr[0].slice(0,4).padEnd(dot,".")
    let last=`@${arr[1]}`
    return first+last
}
// Test
console.log(protectAgain('johnS@example.com')); // "john.@example.com"
console.log(protectAgain('arya_stark@example.com')); // "arya......@example.com"
// Write a function to parameterize a string.
/* Requirements
  @name parameterize
  @parameter (string) str
  @return String
*/

// your code goes here
function parameterize(str){
    return str.replace(/ /g,"-")
}
// Test
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"
// Write a function to capitalize the first letter of a string.
/* Requirements
@name capitalizeFirst
@parameter (string, number) text, len
@return String
*/

// your code goes here
function capitalizeFirst(text){
    function cap(word){
        let arr=word.split("")
        arr[0]=arr[0].toUpperCase()
        return arr.join("")
    }
    let arr1=text.split(" ")
    arr1[0]=cap(arr1[0])
    return arr1.join(" ")
}
// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"
// Write a function to capitalize the first letter of each word in a string.
/* Requirements
  @name capitalizeWords
  @parameter (string) text
  @return String
*/

// your code goes here
function capitalizeWords(text){
    function cap(word){
        let arr=word.split("")
        arr[0]=arr[0].toUpperCase()
        return arr.join("")
    }
    return text.split(" ").map(cap).join(" ")
}
// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"
// Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
/* Requirements
  @name swapcase
  @parameter (string) text
  @return String
*/

// your code goes here
function swapcase(text){
    let array=text.split("").map(letter=>{
        if(letter.toUpperCase()==letter){
            return letter.toLowerCase()
        }else{
            return letter.toUpperCase()
        }
        
 })
    return array.join('')
} 
// Tets
console.log(swapcase('AaBbc')); // "aAbBC"
console.log(swapcase('abcDef')); // "ABCdEF"
// Write a function to convert a string into camel case.
Example:

/* Requirements
  @name camelize
  @parameter (string) text
  @return String
*/
// your code goes here
function camelize(text){
    function cap(word){
        let arr=word.split("")
        arr[0]=arr[0].toUpperCase()
        return arr.join("")
    }
let arr1=text.split(" ")
arr1[1]=cap(arr1[1])
return arr1.join('')
}
// Test
console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"
// Write a function to uncamelize a string (output should be all in lowercase)
/* Requirements
  @name uncamelize
  @parameter (string, string) text, joinStr
  @return String
*/
// your code goes here
function uncamelize(text,joinstr){
    
    let arr=[]
    for(let i=0;i<text.length;i++){
      
      if(text[i]==text[i].toUpperCase()){
    
        arr.push(i)
      }
    }
let x= text.slice(0, arr[0]);
let y= text.slice(arr[0],text.length)
return `${x}${joinstr}${y}`
}

// Tets
console.log(uncamelize('helloWorld', '_')); // "hello_world"
console.log(uncamelize('learningJavascript', '_')); // "learning_javascript"
console.log(uncamelize('learningJavaScriptAgain', '_')); // "learning_java_script_again"
// Write a function to concatenates a given string n times (default is 1).
/* Requirements
  @name repeat
  @parameter (string, number) text, times
  @return String
*/

// your code goes here
function repeat(text,times){
    return text.repeat(times)
}
// Test
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
console.log(repeat('Ha!')); // "Ha"
// Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with ("…") (by default) or specified characters.

/* Requirements
  @name testTruncate
  @parameter (string, number, string) text, len, postfix
  @return String
*/
// your code goes here
function textTruncate(text,len,postfix){
    return text.slice(0,len)+postfix
}
// Test
console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); //"We are doing !!"
console.log(textTruncate('We are doing JS string exercises.', 15)); //"We are doing ..."
// Write a function to chop a string into chunks of a given length.
/* Requirements
  @name stringChop
  @parameter (string, number) text, size (default to 1)
  @return String
*/

// your code goes here
function stringChop(text,size=1){
    var result = [];
    // let arr = text.split('');
    let i = 0;
    while (text.length > i) {
      result.push(text.slice(i, size));
      i += size;
    }
    return result;
}
// Test
console.log(stringChop('hello world', 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
console.log(stringChop('hello')); // ["h", "e", "l", "l", "o"]
// Write a function to count the occurrence of a substring (case doesn't matter) in a string.
/* Requirements
  @name count
  @parameter (string, string) text, char
  @return Number
*/

// your code goes here

// Test
// console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
// console.log(count('hello again hello', 'hello')); // 2
// console.log(count('hello', 'one')); // 0
// Write a function to strip leading and trailing spaces from a string.
/* Requirements
  @name strip
  @parameter (string) text
  @return String
*/

// your code goes here
function strip(text){
    return text.trim()
}
// Test
console.log(strip('   Hello World ')); // "Hello World"
console.log(strip('Hello World      ')); // "Hello World"
// Write a function to truncate a string to a certain number of words.
/* Requirements
  @name chopWords
  @parameter (string, number) text, words (default to 1)
  @return String
*/

// your code goes here
function chopWords(text,words=1){
    return text.split(" ").slice(0,words).join(" ")
}
// Test
console.log(chopWords('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"
console.log(chopWords('I am learning JavaScript', 4)); // "I am learning JavaScript"
// Write a function to reverse an string
/* Requirements
  @name reverseString
  @parameter (string) text
  @return String
*/
function alphabetize(text){
    return text.split("").reverse().join('')
}


// Test
console.log(alphabetize('United States')); // 'setatS detinU'
console.log(alphabetize('Hello World')); // 'dlroW olleH'