//program that inputs amount and tells the notes in that
var input = prompt("Enter amount : ");
var amount = (input);
//declaring variables for each aount of the notes npossible in Pakistanvar amount:number = n=Number(input)
var fiveth;
var oneth;
var fivehn;
var onehn;
var fifty;
var twenty;
var ten;
var change;
//Performing the calculations for the notes
fiveth = parseInt(amount / 5000);
amount = parseInt(amount % 5000);
oneth = parseInt(amount / 1000);
amount = parseInt(amount % 1000);
fivehn = parseInt(amount / 500);
amount = parseInt(amount % 500);
onehn = parseInt(amount / 100);
amount = parseInt(amount % 100);
fifty = parseInt(amount / 50);
amount = parseInt(amount % 50);
twenty = parseInt(amount / 20);
amount = parseInt(amount % 20);
ten = parseInt(amount / 10);
change = parseInt(amount % 10);
//displaying the amount of the notes
console.log("".concat(fiveth, " notes of 5000"));
console.log("".concat(oneth, " notes of 1000"));
console.log("".concat(fivehn, " notes of 500"));
console.log("".concat(onehn, " notes of 100"));
console.log("".concat(fifty, " notes of 50"));
console.log("".concat(twenty, " notes of 20"));
console.log("".concat(ten, " notes of 10"));
console.log("".concat(change, " is the remaining change that cannot be valued in the notes."));
