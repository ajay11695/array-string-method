Watch this video to understand what to do in this exercise block link

Getting To Know String Methods
Go to this link and look for the name of method to learn about it.

Write in your own way of understanding (don't copy paste)

Only if you are done with step 1 you should go ahead.

Practice it by yourself in console (4-5 times to understand)
Data types of parameters
Return value type
Write three examples
In your own words and one sentence explain what this method does.
Example:

                           charAt

Parameter: (index) defaults to 0 - (number data type)
Return: character at specific index in the string (string data type)
Example:
let name = 'Arya Stark';
name.charAt(2); //"y"
let sentance = 'A quick brown fox jumped over a lazy dog';
sentance(4); // "i"
let houseName = 'Starks';
houseName.charAt(0); // "S"
charAt accepts a index (number data type) and return the character on that index in the string.

                      toUpperCase

Parameter: it does not take any parameters
Return: It returns the whole string in Uppercase.
Example:
let tag='AltCampus is campus which can change the life of a student'
tag.toUppercase();
// 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
'asvindra'.toUppercase();
// 'ASVINDRA'//
toUppercase does not accept any parameters and returns the string in uppercase.
                toLowerCase

Parameter: it does not take any parameters
Return: It returns the whole string in Lowercase.
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'A
tag.toLowerCase();
// 'ltCampus is campus which can change the life of a student'
'ASVINDRA'.toLowerCase();
// 'asvindra'
toLowerCase does not accept any parameters and returns the string in lowercase.

                    trim

Parameter: it does not take any parameters
Return: It returns the whole string without the white spaces from start and end.
Example:
let tag=' ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT  'A
tag.trim();
// 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
'ASVINDRA '.trim();
// 'ASVINDRA'
trim does not accept any parameters and returns the string without white spaces.

                     trimEnd

Parameter: it does not take any parameters
Return: It returns the whole string without the white spaces from end.
Example:
let tag=' ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT  '
tag.trimEnd();
// ' ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
'ASVINDRA '.trimEnd();
// 'ASVINDRA'
trimEnd does not accept any parameters and returns the string which does not have white spaces from end.

                     trimStart

Parameter: it does not take any parameters
Return: It returns the whole string without the white spaces from start.
Example:
let tag=' ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT '
tag.trimStart();
// 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT '
' ASVINDRA'.trimStart();
// 'ASVINDRA'
trimEnd does not accept any parameters and returns the string which does not have white spaces from start.

                         concat

Parameter: any string
Return: It returns the new string with concatinated string.
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
tag.concat('and can reshape the carrier');
// 'ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENTand can reshape the carrier'
'ASVINDRA'.concat();
// 'ASVINDRA'
'asvindra'.concat('') //'asvindra'
'asvindra'.concat(' ')//'asvindra '
concat it takes string as input returns the new string which is concatinated at the end of first string. and if parameter is empty then same string will be returned or if we simply pass '' the string will be returned.

                        endsWith

Parameter: any string and length-optional
Return: It returns true or false
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
tag.endsWith('and can reshape the carrier');
// false
'ASVINDRA'.endsWith('A'); //true

'asvindra'.endsWith('a',7) //false
'asvindra'.endsWith('a',1)//true
endsWith it takes string or character to be searched and string length in which part it has to be searched that is number and after searching if it matches it give true otherwise false.

                          includes

Parameter: any string and position-optional(default-0)
Return: It returns true or false
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
tag.includes('and can reshape the carrier');
// false
'ASVINDRA'.includes('A'); //true

'asvindra'.includes('a',7) //true
'asvindra'.includes('s',3)//false
includes it takes string or character to be searched and position from where it will start searching and after searching if it matches it give true otherwise false.

                        indexOf

Parameter: any string and index-optional(default-0) from where search to be started
Return: It returns index of searched value.
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
tag.indexOf('and can reshape the carrier');
// -1
'ASVINDRA'.indexOf('A'); //0

'asvindra'.indexOf('a',7) // 7
'asvindra'.indexOf('s',3)//false
indexOf it takes string or character to be searched and index from where it will start searching and after searching if it matches it gives the index number of the searched string or character. if string not found then it returns -1.

                       lastIndexOf

Parameter: any string and index-optional(default-0) from where search to be started
Return: It returns last index of searched value.
Example:
let tag='ALTCAMPUS IS CAMPUS WHICH CAN CHANGE THE LIFE OF A STUDENT'
tag.lastIndexOf('and can reshape the carrier');
// -1
'ASVINDRA'.lastIndexOf('A'); //0

'asvindra'.lastIndexOf('a',7) // 7
'asvindra'.lastIndexOf('s',3)// 1
'asvindra'.lastIndexOf('s',0)// -1
lastIndexOf it takes string or character to be searched and index from where it will start searching and after searching if it matches and if it is a last character or string in given string then it gives the index number of the searched string or character. if string not found then it returns -1.

                           padEnd

Parameter: it takes length how much padding we want from end of string and also padString is optional which takes string which needs to be padded.
Return: It returns the padded string
Example:
let tag='rajpoot'
tag.padEnd(1,'.');
// 'rajpoot.'
'ASVINDRA'.padEnd('*'); //'ASVINDRA*'

'asvindra'.padEnd(1,'8') // 'asvindra8'
'asvindra'.padEnd('')//'asvindra'
padEnd it gives padded string which is padded from the end.

                   padStart

Parameter: it takes length how much padding we want from start of string and also padString is optional which takes string which needs to be padded.
Return: It returns the padded string
Example:
let tag='rajpoot'
tag.padStart(1,'.');
// '.rajpoot'
'ASVINDRA'.padStart('*'); //'*ASVINDRA'

'asvindra'.padStart(1,'8') // '8asvindra'
'asvindra'.padStart('')//'asvindra'
padStart it gives padded string which is padded from the start.

                    repeat

Parameter: it takes number from o to +infinity ,means how many times we want to repeat the string. default-0
Return: It returns string that times which is given in parameter
Example:
let tag='rajpoot'
tag.repeat(1);
// 'rajpoot'
'ASVINDRA'.repeat(1); //'ASVINDRA'

'asvindra'.repeat(2) // 'asvindraasvindra'
'asvindra'.repeat()//''
repeat it gives the repeated string.

                       replace

Parameter: it takes string which needs to be replaced,another parameter is string which should be put after replacing the first string.
Return: It returns new string which is made by replacement
Example:
let tag='rajpoot'
tag.replace('raj','RAJ');
// 'RAJpoot'
'ASVINDRA'.replace('',RAJ); //'RAJASVINDRA'

'asvindra'.replace('s','') // 'avindra'
'asvindra'.replace('s',' ')//'a vindra'
replace it gives the replaced string

                 slice

Parameter: it takes begin index and second one is end index from where slicing will start
Return: It returns new string after slcing
Example:
let tag='rajpoot'
tag.slice(0,3);
// 'raj'
'ASVINDRA'.slice(0); //'ASVINDRA'

'asvindra'.slice(2,1) // ''
'asvindra'.slice()//'asvindra'
slice it gives sliced string.

                    split

Parameter: it takes two parameter both are optional,first one is seprator by which string has to be separated,second one is limit means array
Return: It returns array of string
Example:
let tag='rajpoot'
tag.split(0,3);
// 'raj'
'ASVINDRA'.split(0); //['ASVINDRA']

'asvindra'.split('') // ['a', 's', 'v', 'i', 'n', 'd', 'r', 'a']
'asvindra'.split()//['asvindra']
'asvindra'.split('asv',3);// ['', 'indra']
'asvindra'.split('asv',1);// ['']
'asvindra'.split('asv',0);// []
split it gives splitted array of strings. it split the strings at each seprator given

                substring
                
Parameter: it takes two parameter first one is indexstart, and second one is indexEnd
Return: It returns new string after creating substring
Example:
let tag='rajpoot'
tag.substring(0,3);
// 'raj'
'ASVINDRA'.substring(0,2); //'as'

'asvindra'.substring(6,0) // 'asvind'
'asvindra'.substring()//'asvindra'
'asvindra'.substring(2,0);// 'as'
substring it gives the new string made of the indexes provided.