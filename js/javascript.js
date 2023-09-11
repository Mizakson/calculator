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
// const calc = document.querySelector('.calc-container');
// const display = document.querySelector('.display-box');
// const operand = document.querySelector('.operand-container');
// const digit = document.querySelector('.digits-container');

// // const one = document.querySelector('.digit[value="1"]');
// // const two = document.querySelector('.digit[value="2"]');
// // const three = document.querySelector('.digit[value="3"]');
// // const four = document.querySelector('.digit[value="4"]');
// // const five = document.querySelector('.digit[value="5"]');
// // const six = document.querySelector('.digit[value="6"]');
// // const seven = document.querySelector('.digit[value="7"]');
// // const eight = document.querySelector('.digit[value="8"]');
// // const nine = document.querySelector('.digit[value="9"]');

// const clear = document.querySelector('button[value="C"]');
// const equals = document.querySelector('button[value="="]');
// const displayText = document.querySelector('.result');

// let initialValue = '';
// const updateValue = (value) => {
//     initialValue = value;
// }

// digit.onclick = () => {
//     displayText.textContent = updateValue('Pressed');
// }

