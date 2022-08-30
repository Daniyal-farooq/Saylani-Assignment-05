// Reference to understand the solution to find the roots of a quadratic equation
//https://www.programiz.com/cpp-programming/examples/quadratic-roots
//First we have to find the discriminent 
// if determinant > 0 then another formula
// if determinant < 0 then another formula
// if diterminant == 0 then another formula

var A1:number = prompt("Enter the a of the Quadratic equation")
var B1:number = prompt("Enter the b of the Quadratic equation")
var C1:number = prompt("Enter the c of the Quadratic equation")
var a:number = Number(A1)
var b:number = Number(B1)
var c:number = Number(C1)
//Finding the determinanet to find the valid formula

var determinant:number = (b*b) - (4*a*c)
if ( determinant > 0)
{
    var root1:number = ( -b + ((b*b) - (4*a*c)) )/2*a
    var root2:number = ( -b - ((b*b) - (4*a*c)) )/2*a
    console.log('The roots are real and different');
    console.log(`The first root is ${root1}`)
    console.log(`The second root is ${root2}`)
}
else if ( determinant == 0)
{
    var root1:number , root2:number
    root1 = root2 = (-b)/2*a
    console.log('The roots are real and same');
    console.log(`The first root is ${root1}`)
    console.log(`The second root is ${root2}`)
}
else{
    console.log("The roots are complex ");
    
}