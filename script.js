/* introduction */

//alert("hello word");
//Prompt("Enter your name: ")
//console.log("this is a simple message");
//console.warn("this is a warning message");
//console.error("this is a error mesaage");
// ` 96
//variables
/*var x;
x=10;
x=20;
console.log(x);
let salary="2000";
const taxes=11;
console.log((salary*taxes)/100);
document.writeln(salary);
document.writeln(taxes);
document.writeln("<p> taxes:" +(salary*taxes)/100+"</p>");
document.writeln(`taxes: (${salary}*${taxes})/100`);
document.writeln(`<p>taxes: ${salary*taxes/100}</p>`);
*/


/* exercise #1 */
/*
let jobTitle = "engineer";
let geoLocation = "Mexicali";
let partnerName = "Lourdes";
let numberChildren = 3;

document.writeln(`<p>My job title is ${jobTitle} in ${geoLocation}</p> <p>I married with ${partnerName} and we have ${numberChildren} children</p>`);
*/

/* exercise #2 */
let completeName = "Carlos Lopez";
let emailAddress = "carloslopez@gmail.com";
let age = 51;
let password = "qwerty12345";
let contry = "Mexico";
let monthSalary = 2500;

document.writeln(`
    <p> Name: <b>${completeName}</b></p>
    <p> email: <b>${emailAddress}</b> </p>
    <p>salary (annual): $ <b>${monthSalary * 12}</b></p> 
    
`);
document.write("Salario mensual: "+monthSalary.toLocaleString('en-IN', {style: 'currency',currency: 'INR', minimumFractionDigits: 2}));

