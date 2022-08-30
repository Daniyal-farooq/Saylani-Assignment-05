// Reference to understand the solution to find the roots of a quadratic equation
//https://www.programiz.com/cpp-programming/examples/quadratic-roots
//First we have to find the discriminent 
// if determinant > 0 then another formula
// if determinant < 0 then another formula
// if diterminant == 0 then another formula
var A1 = prompt("Enter the a of the Quadratic equation");
var B1 = prompt("Enter the b of the Quadratic equation");
var C1 = prompt("Enter the c of the Quadratic equation");
var a = Number(A1);
var b = Number(B1);
var c = Number(C1);
//Finding the determinanet to find the valid formula
var determinant = (b * b) - (4 * a * c);
if (determinant > 0) {
    var root1 = (-b + ((b * b) - (4 * a * c))) / 2 * a;
    var root2 = (-b - ((b * b) - (4 * a * c))) / 2 * a;
    console.log('The roots are real and different');
    console.log("The first root is ".concat(root1));
    console.log("The second root is ".concat(root2));
}
else if (determinant == 0) {
    var root1, root2;
    root1 = root2 = (-b) / 2 * a;
    console.log('The roots are real and same');
    console.log("The first root is ".concat(root1));
    console.log("The second root is ".concat(root2));
}
else {
    console.log("The roots are complex ");
}
