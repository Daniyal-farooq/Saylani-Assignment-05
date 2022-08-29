//program that inputs amount and tells the notes in that
var input:number = prompt("Enter amount : ")
var amount:number = (input)
//declaring variables for each aount of the notes npossible in Pakistanvar amount:number = n=Number(input)
var fiveth:number
var oneth:number
var fivehn:number
var onehn:number
var fifty:number
var twenty:number
var ten:number
var change:number
//Performing the calculations for the notes
fiveth = parseInt(amount / 5000)
amount = parseInt(amount % 5000)
oneth  = parseInt(amount / 1000)
amount = parseInt(amount % 1000)
fivehn = parseInt(amount / 500)
amount = parseInt(amount % 500)
onehn  = parseInt(amount / 100)
amount = parseInt(amount % 100)
fifty  = parseInt(amount / 50)
amount = parseInt(amount % 50)
twenty = parseInt(amount / 20)
amount = parseInt(amount % 20)
ten    = parseInt(amount / 10)
change = parseInt(amount % 10)
//displaying the amount of the notes

console.log(`${fiveth} notes of 5000`);
console.log(`${oneth} notes of 1000`);
console.log(`${fivehn} notes of 500`);
console.log(`${onehn} notes of 100`);
console.log(`${fifty} notes of 50`);
console.log(`${twenty} notes of 20`);
console.log(`${ten} notes of 10`);
console.log(`${change} is the remaining change that cannot be valued in the notes.`);
