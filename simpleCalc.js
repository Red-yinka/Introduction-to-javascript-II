//A simple calculator to be displayed on a dialog box.
const operations = prompt('Please Enter the operation you want to perform. + ==> Addition, - ==> Subtraction, * ==> Multiplication, / ==>Division.');
const value1 = parseFloat(prompt("Enter The First Value: "));
const value2 = parseFloat(prompt("Enter The Second Value: "));

let result;

if (operations === "+") {
     result = value1 + value2;

} else if (operations === "-") {
     result = value1 - value2;

} else if ( operations === "*"){
     result = value1 * value2;

} else if (operations === "/"){
     result = value1 / value2;

} else if (operations === "%"){
     result = value1 % value2;

}else {
     alert("You have selected and invalid operation earlier");
}

alert (result);
