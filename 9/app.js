var input = prompt("Enter any character to find it's nature : ");
var char = input;
if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    console.log("".concat(char, " is an Alphabet"));
}
else if (char >= '0' && char <= '9') {
    console.log("".concat(char, " is a Digit"));
}
else {
    console.log("".concat(char, " is a special character"));
}
