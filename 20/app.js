var inputs = prompt("Enter your base salary : ");
var s;
s = Number(inputs);
if (s <= 10000) {
    s += (s / 100 * 20) + (s / 100 * 80);
}
else if (s <= 20000) {
    s += (s / 100 * 25) + (s / 100 * 90);
}
else if (s > 20000) {
    s += (s / 100 * 30) + (s / 100 * 95);
}
console.log("Gross salary is : ".concat(s));
