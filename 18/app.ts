var input:number = prompt("Enter the Cost price")
var cost:number = Number(input)
var input:number = prompt("Enter the Selling price")
var selling:number = Number(input)
if(cost == selling){
    console.log("There is no Profit and no Loss");
    
}
else if (cost < selling)
{
    var profit:number = selling - cost
    console.log(`Profit is ${profit}`);
    
}
else
{
    var loss:number = cost - selling
    console.log(`Loss is ${loss}`);
    
}