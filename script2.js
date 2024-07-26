//creating the function*/
//display on the console the mult by 5
function multiplication ({//myNumber is local variable (scope of var)})
document.write("<p class='test'>" + myNumber*5 + "</p>");}

//multiplication (3);//run/execute the function

function taxesCalculation()

var product = prompt ("Enter the product's name:")
var price = Number(prompt("Enter the price"));
var qty = Number(prompt("Enter the qty:"))
const taxes=

var subtotal=price*qty;

console.log(product);
console.log(subtotal);


//document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");
document.write(`
    <p> Name: ${product} </p>
    <p> Subtotal: ${subtotal} </p>
    <p> Total: ${total} </p>
`);

document.getElementById("products").innerHTML+=`
        <p> Name: ${product} </p>
        <p> Subtotal: ${subtotal} </p>
        <p> Total: ${total} </p>
    `;