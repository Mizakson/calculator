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
    if ((num2 = 0) && (operator = '/')) {
        return "CAN'T DIVIDE BY 0!";
    }
};

// // DOM ELEMENTS
const calc = document.querySelector('.calc-container');
const display = document.querySelector('.display-box');
const button = document.querySelector('.button');
const clear = document.getElementById('clear');
const equalSign = document.getElementById('equals');

// populate display on button click
let digits = document.querySelectorAll('.digit');
let operands = document.querySelectorAll('.operand');

let num1 = "";
let num2 = "";
let operator = "";



digits.forEach(digit => {
    digit.addEventListener('click', e => {
        if (operator === "") {
            num1 += e.target.innerHTML;
            console.log(num1);
        } else {
            num2 += e.target.innerHTML;
            console.log(num2);
        }
    });
});

operands.forEach(op => {
    op.addEventListener('click', e => {
        operator = e.target.innerHTML;
        console.log(operator);
    }) 
});

function showNum () {
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        digit.addEventListener('click', () => {
            document.getElementById('display-text').innerHTML += digit.innerHTML;
        })
    }; 
}
   
function showOperator () {
    for (let i = 0; i < operands.length; i++) {
        let operand = operands[i];
        operand.addEventListener('click', () => {
            document.getElementById('display-text').innerHTML += operand.innerHTML;
        })
    }
    equalSign.addEventListener('click', () => {
        document.getElementById('display-text').innerHTML += equalSign.innerHTML;
    })
}


showNum();
showOperator();    