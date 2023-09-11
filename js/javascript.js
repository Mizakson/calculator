// ADD DOM ELEMENTS HERE...
const calc = document.querySelector('.calc-container');
const display = document.querySelector('.display-box');
const operand = document.querySelector('.operand-container');
const digits = document.querySelector('digits-container');

const clear = document.querySelector('button[value="C"]');
const equals = document.querySelector('button[value="="]')



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