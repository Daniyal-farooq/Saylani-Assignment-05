var a1 = prompt("Enter the first angle of triangle");
var angle1 = Number(a1);
var a2 = prompt("Enter the Second angle of triangle");
var angle2 = Number(a2);
var a3 = prompt("Enter the Third angle of triangle");
var angle3 = Number(a3);
if (angle1 + angle2 + angle3 == 180) {
    console.log("Triangle is valid.");
}
else {
    console.log("Triangle is not valid");
}
