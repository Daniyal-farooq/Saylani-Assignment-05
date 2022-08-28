var phy:number = prompt("Enter marks in Physics") 
var phy1:number = Number(phy)
var chem:number|null = prompt("Enter marks in Chemistry") 
var chem1:number = Number(chem)  
var bio:number|null = prompt("Enter marks in Biology")
var bio1:number = Number(bio) 
var math:number|null = prompt("Enter marks in Mathematics")
var math1:number = Number(math)   
var comp:number|null = prompt("Enter marks in Computer")
var comp1:number = Number(comp)
var sum:number = ( phy1 + chem1 +bio1 + math1 + comp1 )
var perc:number = (sum/500) * 100
console.log(`Percentage is ${perc}`);
// displaying grade
if ( perc >= 90 )
{
    console.log("Grade is A");
}
else if ( perc >= 80 )
{
    console.log("Grade is B");
}
else if ( perc >= 70 )
{
    console.log("Grade is C");
}
else if ( perc >= 60 )
{
    console.log("Grade is D");
}
else if ( perc >= 40 )
{
    console.log("Grade is E");
}
else if ( perc <40 )
{
    console.log("Grade is F!");
}


