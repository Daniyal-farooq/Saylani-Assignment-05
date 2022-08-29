var s1:number = prompt("Enter the First side")
var s2:number = prompt("Enter the Second side")
var s3:number = prompt("Enter the Third side")
var side1 = Number(s1)
var side2 = Number(s3)
var side3 = Number(s3)
 if(side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2)
 {
    console.log("The sides of the triangle prove that it is valid traiangle");
 }
 else{
        console.log("The sides of the triangle prove that it is not valid traiangle");
}