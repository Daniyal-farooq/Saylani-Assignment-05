var input:number = prompt("Enter a character")
if (input >='A'&&input <='Z')
{
    console.log(`${input} is an Uppercase alphabet`);
}
else if (input >='a'&&input <='z')
{
    console.log(`${input} is an Lower alphabet`);
}
else{
    console.log("It is neither uppercase nor lowercase");
    
}