var inputunits = prompt("Enter your consumed units : ");
var units = Number(inputunits);
var bill;
if (units >= 1 && units <= 50) {
    bill = units * 0.50;
}
else if (units > 50 && units <= 150) {
    bill = 25 + ((units - 50) * 0.75);
}
else if (units > 150 && units <= 250) {
    bill = 25 + 75 + ((units - 150) * 1.20);
}
else if (units > 250) {
    bill = 25 + 75 + 120 + ((units - 250) * 1.50);
}
//adding 20% surcharge
bill += (bill / 100) * 20;
console.log("The Total bill is : ".concat(bill));
