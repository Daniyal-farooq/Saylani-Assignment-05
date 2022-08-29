//Entering the sides
var s1:number = prompt("Enter the  1st side")
var s2:number = prompt("Enter the  2nd side")
var s3:number = prompt("Enter the  3rd side")
var side1:number = Number(s1)
var side2:number = Number(s2)
var side3:number = Number(s3)
//Entering the angles
var a1:number = prompt("Enter the  1st angle")
var a2:number = prompt("Enter the  2nd angle")
var a3:number = prompt("Enter the  3rd angle")
var angle1:number = Number(a1)
var angle2:number = Number(a2)
var angle3:number = Number(a3)
//finding the nature of the triangle
if (side1 == side2 && side1 == side3 && side3 == side2)
{
    console.log("Triangle is an Equilateral.");   
}
else if (side1 != side2 && side1 != side3 && side2 != side3)
{
    console.log("Triangle is an Scalene.");
}
else if((side1 == side2 || side1 == side3 || side2 == side3) && (angle1 == angle2 || angle1 == angle3 || angle2 == angle3)  ) 
{
    console.log("Triangle is an Ioseles.");
    
}
else{
    console.log("The Triangle is neither Equiliteral,Scalene nor Isoceles");
    
}