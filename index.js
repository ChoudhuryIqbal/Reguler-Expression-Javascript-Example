/* let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

//literal Match
testStr = " Hello , my name is kevin";
testRegex = /kevin/;
console.log(testRegex.test(testStr));
//wrong regex
let wrongRegex = /Kevin/;
wrongRegex.test(testRegex);
console.log(wrongRegex.test(testRegex));

//Match a Literal String with Different Possibilities
// /Dog|cat|Fise/
//To Ignore case  /ignorecase /i


//How to extract Matches
"Hello, World!".match(/Hello/);
let outStr = "Reguler expressions";
let outRegex = /expressions/;
outStr.match(outRegex); */


/* //search pattern
let testStr="Repeat, Repeat, Repeat";
let outRegex=/Repeat/g;
console.log(testStr.match(outRegex)); */


//Match Anything with wildcard pattern
/* let humStr="I'll hum a song";
let hugStr="Bear hug";
let huRegex=/hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));
 */



//Match Single Character with Multiple Possibilities
/* let bigStr="big";
let bagStr="bag";
let bugStr="bug";
let bogStr="bog";
let bgRegex=/b[aiu]g/;
let text=bogStr.match(bgRegex);
console.log(text);
 */


//Example 
/* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);

 */


//Match Letters of the Alphabet
/* let catStr="cat";
let batStr="bat";
let matStr="mat";
let bgRegex=/[a-e]at/;
const first=catStr.match(bgRegex);
const second=batStr.match(bgRegex);
const third=matStr.match(bgRegex);
console.log(first,second,third);

 */
/* //Match numbers and letters to the alphabet
let jennyStr="Jenny8675309";
let myRegex=/[a-z0-9]/ig;
let text=jennyStr.match(myRegex);
console.log(text); */


/* //Negate a character
let quoteSample="3 blind mice";
let myRegex=/[^aeiou]/ig;
let result=quoteSample.match(myRegex);
console.log(result);
 */

/* //Match Chracters that occur one or more times
let difficultSpelling="Mississippi";
let myRegex=/s+/ig;
let result=difficultSpelling.match(myRegex);
console.log(result); */
/* 
/* //match Characters that occure o times
let soccerWord="goooooooal!";
let gPhrase="gut feeling";
let oPhrase="over the moon";*/
//let goRegex=/go*/;



//you can apply the regex
/* let text="<h1> Winter is coming</h1>";
let myRegex=/<.*?>/;
let result=text.match(myRegex);
console.log(result);

 */

/* let firstString="Ricky is first and can be found ";
let firstRegex=/^Ricky/;
firstRegex.test(firstString);
let notFirst="You can't find Ricky now.";
let result=firstRegex.test(notFirst);

console.log(result); */

/* 
//Match Ending String Pattern
let theEnding="This is never ending story";
let storyRegex=/story$/;
storyRegex.test(theEnding);
let noEnding="Sometimes a story will have to end";
storyRegex.test(noEnding); */


/* //Match all numbers and letters
let longHand=/[A-za-z0-9_]+/;
let shortHand=/\w+/;
let numbers="42";
let varNames="important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames); */

/* //Match Everything But Letters and Numbers
let shortHand=/\W/;
let numbers="42%";
let sentence="Coding!";
numbers.match(shortHand);
sentence.match(shortHand); */

//Match All Numbers
/* let movieName="2001: A Space Odyssey";
let numRegex= /\d/g; //change this line
let result=movieName.match(numRegex).length;
console.log("Result is "+result); */

/* 
//Restrict Possible Username
let username="JackOfAllTrades";
let userCheck=/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result=userCheck.test(username);
console.log(result); */
/* 
//Match Whitespace
let whiteSpace="Whitespace. Whitespace everywhere!";
let spaceRegex=/\s/g;
whiteSpace.match(spaceRegex);
 */



//Match non white space characters

/* let whiteSpace="Whitespace. Whitespace everywhere!";
let nonSpaceRegex=/\S/g;
let space=whiteSpace.match(nonSpaceRegex).length;
console.log(space); */


//Specify Upper and Lower Number of Matches
/* let A4="aaaah";
let A2="aah";
let multipleA=/a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2); */



//Specify only the Lower Number of Matches
/* let A4="haaaah";
let A2="haah";
let A100="h"+"a".repeat(100)+"h";
let multipleA=/ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
 */



//Specify Exact Number of Matches
/* let A4="haaaah";
let A3="haaah";
let A100="h"+"a".repeat(100)+"h";
let multipleHA=/ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
 */



//check for All or None
/* let Ammerican="color";
let british="colour";
let rainbrowRegex=/colou?r/;
rainbrowRegex.test(american);
rainbrowRegex.test(british); */

//positive and Negative Lookahead
/* let quit="qu";
let noquit="qt";
let quRegex=/q(?=u)/;
let qRegex=/q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex); */

//password checker
/* let password="abc123";
let checkPass= /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); */


// Use Lookahead in the pwREgex to match passwords that are greater than 5 chracters long, and have two consecutive digits.
/* let sampleword="astronaut";
let pwRegex=/(?=\w{6}) (?=\w*\d{2})/;
let result=pwRegex.test(sampleword); */


//check for missing group of chracters
/* let testStr="Pumpkin";
let testRegex="/P(engu|umpk)in/";
testRegex.test(testStr); */


//Reuse patterns using capture Groups
/* let repeatStr="row row row your boat";
let repeatRegex=/(\w+) \1 \1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex); */



//Use capture groups to search and Replace
/* let wrongText="The sky is silver";
let silverRegex=/silver/;
wrongText.replace(silverRegex,"blue");
"Code Camp".replace(/(\w+)\s((\w+)/,'$2 $1');
) */
/* 
let srt="one two three";
let fixRegex=/(\w+)\s(\w+)\s(\w+)/;
let replaceText="$3 $2 $1";
let result =str.replace(fixRegex,replaceText); */



//Remove whitespace from start and End
//String.prototype.trim();
/* 
let hello=" Hello, World! ";
let wsRegex=/^\s+|\s+$/g;
let result=hello.replace(wsRegex,"");

 */

