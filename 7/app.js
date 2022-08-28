var test = "7";
if ((test >= "A" && test <= "Z") || (test >= "a" && test <= "z")) {
    console.log("".concat(test, " is an alphabet"));
}
else {
    console.log("".concat(test, " is not an alphabet"));
}
