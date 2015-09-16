//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var total = 0;

// parse int?
var sum = num10 + Number(string8) + one;
console.log(sum);

// function addVars(a,b,c){
//     total = +a + +b + +c;
//     console.log("Your total is " + total);
// }
// addVars(num10,string8,one);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (var i = 100; i > 20; i--){
    if (i % 3 === 0){
        console.log(i + " is divisible by 3");
    }
}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
var scoreTotal = 0;

for (var i = 0; i < scores.length; i++){
    scoreTotal += scores[i];
}
var avgTotal = scoreTotal / scores.length;
console.log("Average of your string's items is " + avgTotal);