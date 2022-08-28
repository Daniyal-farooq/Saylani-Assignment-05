var input = prompt("Enter a character");
if (input >= 'A' && input <= 'Z') {
    console.log("".concat(input, " is an Uppercase alphabet"));
}
else if (input >= 'a' && input <= 'z') {
    console.log("".concat(input, " is an Lower alphabet"));
}
else {
    console.log("It is neither uppercase nor lowercase");
}
