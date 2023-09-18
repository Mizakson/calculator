// 4 operand functions and operate function

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

// // DOM ELEMENTS
const calc = document.querySelector('.calc-container');
const display = document.querySelector('.display-box');
const button = document.querySelector('.button');

// populate display on button click
let digits = document.querySelectorAll('.digit');
let operands = document.querySelectorAll('.operand');
let firstNum = 0;
let secondNum = 0;
let clickedOperand = "";

function displayNum () {
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        digit.addEventListener('click', () => {
            const clicks = document.getElementById('result').innerHTML += digit.innerHTML;
            console.log(clicks);
            return clicks;
        })
    };    
};

function displayOperand () {
    for (let i = 0; i < operands.length; i++) {
        let operand = operands[i];
        operand.addEventListener('click', () => {
            const clicks = document.getElementById('result').innerHTML += operand.innerHTML;
            console.log(clicks);
            return clicks;
        })
    }
}


displayNum();
displayOperand();





