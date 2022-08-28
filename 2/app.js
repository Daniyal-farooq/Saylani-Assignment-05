var n1 = prompt("Enter your data");
var n2 = prompt("Enter your data");
var n3 = prompt("Enter your data");
var max = n1;
if (n2 > n1 && n2 > n3) {
    max = n2;
}
else if (n3 > n1 && n3 > n2) {
    max = n3;
}
else {
    max = n1;
}
console.log("Max number is : ", max);
