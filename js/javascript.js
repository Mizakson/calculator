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
for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    digit.addEventListener('click', () => {
        document.getElementById('result').innerHTML += digit.innerHTML
    })
};





