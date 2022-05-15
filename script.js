/*personal information */
let employeeID = 720;
let photoURL = "img/720.png"
let firstName = "Charles"
let lastName = "Potter"
let position = "project manager"
let department = "development & production"
let timeEntry = 830; // getHours() 
let timeExit = 1645;
let building = "201";
let phoneExtension = "3765";

/* ACCOUNT DATA */
let userName = "chPotter";
let password = "sdfsd%4d21";
let userStatus = 'A';
let securityLevel = 3;
let changePass = true;
let passwordErrorsAllowed = 5;
let remoteAccess = false;

/* projects */
let projectsDeveloment = ["staff catalog", "staff catalog", "paysheet printing", "check printing"]
let cloudSpace = 1;
let workTeams = ["human resources", "backups"];
let gitRepository = "human-resources";
let dateCompletion = new Date("2022-11-30 00:00");



document.writeln(` 
    <h1>Personal information</h1>
    <img src=${photoURL} alt="someone">
    <p> Employee ID: ${employeeID} </p>
    <p> Name: ${firstName + "  " + lastName}</p>
    <p> Position: ${position}</p>
    <p> Department: ${department}</p>
    <p> work schedule: ${Math.trunc(timeEntry / 100)}:${timeEntry % 100} to ${Math.trunc(timeExit / 100)}:${timeExit % 100}  </p>
    <p> Building: ${building}</p>
    <p> Phone Extension ${phoneExtension}</p>
    <br>
`)


document.writeln(` 
    <h1>Account Data</h1>
    <p> User Name: ${userName}</p>
    <p> Password: ${password} </p>
    <p> User Status: ${(userStatus == 'A') ? "Activated" : "Deactivated"} </p>
    <p> Security Level: ${securityLevel} </p>
    <p> Can change password: ${(changePass) ? "Allowed" : "No allowed"} </p>
    <p> Access attempts permitted: ${passwordErrorsAllowed}</p>
    <p> Remote Access: ${(remoteAccess) ? "Allowed" : "No allowed"}</p>
    <br>
`)


var allWorkTeams = '<ul>';
for (let i = 0; i < workTeams.length; i++)
    allWorkTeams+=`<li>${workTeams[i]}</li>`;
allWorkTeams+="</ul>";

var allProjects = '<ul>';
for (let i = 0; i < projectsDeveloment.length; i++)
    allProjects+=`<li>${projectsDeveloment[i]}</li>`;

allProjects= allProjects+"</ul>";

document.writeln(` 
    <h1>Projects</h1>
    <p> Projects Develoment: ${allProjects}</p>
    <p> Cloud Space: ${cloudSpace} TGB</p>
    <p> Works Teams: ${allWorkTeams} </p>
    <p> Git-hub repository: ${gitRepository}</p>
    <p> Date Completion ${dateCompletion} </p>
    <br>
`)



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
/*
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

*/