var input = prompt("Enter the Cost price");
var cost = Number(input);
var input = prompt("Enter the Selling price");
var selling = Number(input);
if (cost == selling) {
    console.log("There is no Profit and no Loss");
}
else if (cost < selling) {
    var profit = selling - cost;
    console.log("Profit is ".concat(profit));
}
else {
    var loss = cost - selling;
    console.log("Loss is ".concat(loss));
}
