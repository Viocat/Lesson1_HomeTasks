'use strict'

// //-------------  Lesson 1 HT 1  ----------------

// let userName=prompt("what's your name ?",'');
// alert('Hallo, '+userName+'! How are you?');

// //-------------  Lesson 1 HT 2  ----------------
// // task 1
// let admin;
// let name='Джон';
// admin=name;
// alert(admin);

// // task 2
// let ourPlanetName;
// let currentUserName;

// // task 3
// let variable='10'+10;
// console.log(variable, typeof variable);
// let variableTest=10+'10';
// console.log(variableTest, typeof variableTest);

//-------------  Lesson 1 HT 3  ----------------

// let operand1 = +prompt("Enter first operand");
// let operand2 = +prompt("Enter seccond operand");

// sum(operand1,operand2);
// subtraction(operand1,operand2);
// multiplication(operand1,operand2);
// division(operand1,operand2);

// function sum(operand1,operand2){
//     let result=operand1+operand2;
//     console.log(operand1+"+"+operand2+"="+result)
// }

// function subtraction(operand1,operand2){
//     let result=operand1-operand2;
//     console.log(operand1+"-"+operand2+"="+result)
// }

// function multiplication(operand1,operand2){
//     let result=operand1*operand2;
//     console.log(operand1+"*"+operand2+"="+result)
// }

// function division(operand1,operand2){
//     let result=operand1/operand2;
//     console.log(operand1+"/"+operand2+"="+result)
// }

//-------------  Lesson 1 HT 4  ----------------
let operand1;
let operand2;
let mathActionName = prompt("Enter the name of needed action: add, substract, multiply, divide");
let mathAction = mathActionName.toLowerCase();
if (mathAction === "add" || mathAction === "substract" || mathAction === "multiply" || mathAction === "divide") {

    operand1 = operandsInput("first");
    operand2 = operandsInput("seccond");

    switch (mathAction) {
        case "add":
            sum(operand1, operand2);
            break;
        case "substract":
            subtraction(operand1, operand2);
            break;
        case "multiply":
            multiplication(operand1, operand2);
            break;
        case "divide":
            division(operand1, operand2);
            break;

        default:
            break;
    }
} else {
    alert('Incorrect name of math action!');
}

function operandsInput(operandNumber) {
    let operand = +prompt("Enter " + operandNumber + " operand");
    return operand;
}

function sum(operand1, operand2) {
    let result = operand1 + operand2;
    console.log(operand1 + "+" + operand2 + "=" + result)
}

function subtraction(operand1, operand2) {
    let result = operand1 - operand2;
    console.log(operand1 + "-" + operand2 + "=" + result)
}

function multiplication(operand1, operand2) {
    let result = operand1 * operand2;
    console.log(operand1 + "*" + operand2 + "=" + result)
}

function division(operand1, operand2) {
    let result = operand1 / operand2;
    console.log(operand1 + "/" + operand2 + "=" + result)
}