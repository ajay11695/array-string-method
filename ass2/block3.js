let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
    
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
  //  function findLongestWord(words){
  //   let longestWord=[...words].sort((a,b)=>a.length-b.length).pop()
  //   return longestWord
  //  }

  function findLongestWord(nums){
    let longestWord=''
    for(let num of nums){
      if(longestWord<num.length){
        longestWord=num
      }
    }
    return longestWord
  }

   console.log(findLongestWord(words))

  // - Convert the above array "words" into an array of length of word instead of word.

// function arraylength(nums){
//   let array=[]
//     for(let num of nums){
// array.push(num.length)

//     }
    
//   return array
// }
// console.log(arraylength(words))

 console.log(words.map(num=>num.length))

  // - Create a new array that only contains word with atleast one vowel.
  let array=words.filter(word=>
    
      word.includes("a")||
      word.includes("e")||
      word.includes("i")||
      word.includes("o")||
      word.includes("u")
  
  )

  console.log(array)

  // - Find the index of the word "rhythm"
 console.log(words.indexOf("rhythm"))

  // - Create a new array that contians words not starting with vowel.
 let notstartingvowel=words.filter(b=>{
  if(
    !b.startsWith("a") &&
    !b.startsWith("e") &&
    !b.startsWith("i") &&
    !b.startsWith("o") &&
    !b.startsWith("u") 
  ){
    return true
  }else{
    return false
  }
 })

  console.log(notstartingvowel)

  // - Create a new array that contianse words not ending with vowel
  let notendvowel=words.filter(b=>{
    if(
      !b.endsWith("a") &&
      !b.endsWith("e") &&
      !b.endsWith("i") &&
      !b.endsWith("o") &&
      !b.endsWith("u") 
    ){
      return true
    }else{
      return false
    }
  })
  
  console.log(notendvowel)
  
  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(number){
  let sum=0
  for(let num of number){
    sum+=num
  }
  return sum
}
console.log(sumArray(numbers))

  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
  console.log([...numbers].map(num=>num*3)) 

  // - Create a new array that contains only even numbers
  console.log(numbers.filter(a=>a%2==0))

  // - Create  a new array that contains only odd numbers.
  console.log(numbers.filter(a=>a%2!==0))

  // - Create a new array that should have true for even number and false for odd numbers.
  console.log(numbers.map(a=>a%2==0))

  // - Sort the above number in assending order.
  console.log(numbers.sort((a,b)=>a-b))

  // - Does sort mutate the original array?
// yes it is mutate the original array

  // - Find the sum of the numbers in the array.
console.log(numbers.reduce((acc,cv)=>acc=acc+cv,0))

  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
 function averageNumbers(number){
  let sum=0
  for(let num of number){
    sum+=num
  }
  let average=sum/number.length
  return average
 }
 console.log(averageNumbers(numbers))
  
  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  function averageWordLength(word2){
    let sum=0
    for(let num of word2){
      sum+=num.length
    }
    let average= sum/word2.length
    return average
  }

  console.log(averageWordLength(strings))
 