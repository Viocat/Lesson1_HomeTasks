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

let operand1 = +prompt("Enter first operand");
let operand2 = +prompt("Enter seccond operand");
let sumResult=sum(operand1,operand2);
let subResult=subtraction(operand1,operand2);
let multResult=multiplication(operand1,operand2);
let divResult=division(operand1,operand2);
console.log(operand1+"+"+operand2+"="+sumResult);
console.log(operand1+"-"+operand2+"="+subResult);
console.log(operand1+"*"+operand2+"="+multResult);
console.log(operand1+"/"+operand2+"="+divResult);

function sum(operand1,operand2){
    let result=operand1+operand2;
   return result;
}

function subtraction(operand1,operand2){
    let result=operand1-operand2;
    return result;
}

function multiplication(operand1,operand2){
    let result=operand1*operand2;
    return result;
}

function division(operand1,operand2){
    let result=operand1/operand2;
    return result;
}


