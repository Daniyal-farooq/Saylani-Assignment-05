var phy = prompt("Enter marks in Physics");
var phy1 = Number(phy);
var chem = prompt("Enter marks in Chemistry");
var chem1 = Number(chem);
var bio = prompt("Enter marks in Biology");
var bio1 = Number(bio);
var math = prompt("Enter marks in Mathematics");
var math1 = Number(math);
var comp = prompt("Enter marks in Computer");
var comp1 = Number(comp);
var sum = (phy1 + chem1 + bio1 + math1 + comp1);
var perc = (sum / 500) * 100;
console.log("Percentage is ".concat(perc));
// displaying grade
if (perc >= 90) {
    console.log("Grade is A");
}
else if (perc >= 80) {
    console.log("Grade is B");
}
else if (perc >= 70) {
    console.log("Grade is C");
}
else if (perc >= 60) {
    console.log("Grade is D");
}
else if (perc >= 40) {
    console.log("Grade is E");
}
else if (perc < 40) {
    console.log("Grade is F!");
}
