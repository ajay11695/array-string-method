let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // Create an array peopleName and store value of name key from persons array
  let peopleName=persons.map(person=>person.name)
  console.log(peopleName)

  // Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map(person=>person.grade)
console.log(peopleGrade)

  // Create an array peopleSex and store the value of sex key from persons array
  let peopleSex=persons.map(person=>person.sex)
  console.log(peopleSex)

  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
    console.log(peopleName.filter(name=>name[0]=="J" || name[0]=="P"))
    
  
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
  let filArray=peopleName.filter(name=>name[0]=="A" || name[0]=="C")
  console.log(filArray)
   console.log(filArray.map(num=>num.length));

  //Log all the filtered male ('M') in persons array
  let filteredmale=persons.filter(male=>male.sex=="M")
console.log(filteredmale)

  // Log all the filtered female ('F') in persons array
  let filteredfemale=persons.filter(female=>female.sex=="F")
console.log(filteredfemale)

  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  let filterfemale=persons.filter(female=>female.sex=="F" && (female.name[0]=="C" || female.name[0]=="J"))
console.log(filterfemale)

  // Log all the even numbers from peopleGrade array
  console.log(peopleGrade.filter(grade=>grade%2==0))

  // Find the first name that starts with 'J' in persons array and log the object
  console.log(persons.find(person=>person.name[0]=="J"))

  // Find the first name that starts with 'P' in persons array and log the object
  console.log(persons.find(person=>person.name[0]=="P"))

  // Find the first name that starts with 'J', grade is greater than 10 and is a female
  console.log(persons.find(person=>person.name[0]=="J" && person.grade>10))

  // Filter all the female from persons array and store in femalePersons array
  let femalePersons=persons.filter(female=>female.sex=="F")
console.log(femalePersons)

  // Filter all the male from persons array and store in malePersons array
  let malePersons=persons.filter(male=>male.sex=="M")
  console.log(malePersons)

  // Find the sum of all grades and store in gradeTotal
  let gradeTotal=peopleGrade.reduce((acc,cv)=>acc=acc+cv,0)
console.log(gradeTotal)

  // Find the average grade
  console.log(gradeTotal/peopleGrade.length)

  // Find the average grade of male
  let malegrade=malePersons.map(n=>n.grade).reduce((acc,cv)=>acc=acc+cv,0)
let averagemalegradae=malegrade/malePersons.length
console.log(averagemalegradae)

  // Find the average grade of female
  let femalegrade=femalePersons.map(n=>n.grade).reduce((acc,cv)=>acc=acc+cv,0)
let averagefemalegradae=femalegrade/femalePersons.length
console.log(averagefemalegradae)

  // Find the highest grade
  let highestgrade=0
  for( let num of peopleGrade){
    if(highestgrade<num){
      highestgrade=num
    }
  }
  console.log(highestgrade)

  // Find the highest grade in male
  console.log(malePersons.map(n=>n.grade).sort((a,b)=>a-b).pop())

  // Find the highest grade in female
  console.log(femalePersons.map(n=>n.grade).sort((a,b)=>a-b).pop())

  // Find the highest grade for people whose name starts with 'J' or 'P'
let highest=persons.filter(n=>
  (n.name.startsWith("J") || n.name.startsWith("P"))).map(num=>num.grade).sort((a,b)=>a-b).pop()
    

console.log(highest)

  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a,b)=>a-b))
//Yes It is mutated.

  // Sort the peopleGrade in descending order
  console.log(peopleGrade.sort((a,b)=>b-a))

  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

 let grade =[...peopleGrade].sort((a,b)=>b-a)

  // Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort())

  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let namegrade=[...peopleName].sort()

  // Footer
  // © 2022 GitHub, Inc.
  // Footer navigation
  // Terms
  // Privacy
  // S