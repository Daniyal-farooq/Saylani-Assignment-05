var a1:number = prompt("Enter the first angle of triangle")
var angle1:number = Number(a1)
var a2:number = prompt("Enter the Second angle of triangle")
var angle2:number = Number(a2)
var a3:number = prompt("Enter the Third angle of triangle")
var angle3:number = Number(a3)
if (angle1 + angle2 + angle3 == 180)
{
    console.log("Triangle is valid.");
    
}
else{
    console.log("Triangle is not valid");
    
}