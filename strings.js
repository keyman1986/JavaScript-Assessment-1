 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';
console.log("Before: " + sentence);
sentence = sentence.split(" ");

for (var i = 0; i < sentence.length; i++){
    if (sentence[i] === "i"){
        sentence[i] = "I";
    }
}
sentence = sentence.join(" ");
console.log("After: " + sentence);
>>>>>>> 9baed56b9f1d7296d0cbf1d3dd53a41a63c877f3

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

<<<<<<< HEAD

//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';
=======
var counter1 = 0;

for (var i = 0; i < jsHistory.length; i++){
	if(jsHistory[i].toLowerCase() === 'a'){
		counter1++
	}
}
console.log("Total of " + counter1 + " A's");
//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';

// I relize this isn't the intented way...
// for (var i = 0; i < text.length; i++){
// 	text[i] = text.replace(/scream/g, "SCREAM");
// }
// console.log(text);


text = text.split(" ");

for (var i = 0; i < text.length; i ++){
	if(text[i] === "scream" || text[i] === "scream,"){
		text[i] = text[i].toUpperCase();
	}
;}
text = text.join(" ");
console.log(text);
