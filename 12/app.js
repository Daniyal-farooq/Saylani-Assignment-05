var input = prompt("Enter number of the month to get it's day numbers");
var month = Number(input);
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("".concat(month, " has 31 days"));
}
else if (month == 4 || month == 6 || month == 9 || month == 1) {
    console.log("".concat(month, " has 30 days"));
}
else if (month == 2) {
    console.log("".concat(month, " has 27 or 28 days"));
}
