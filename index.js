/// Calculator
// US1 - Arithmetic Functions:
function add(num1, num2) {
    return num1+num2;
};

function subtract(num1, num2) {
    return num1-num2;
};

function multiply(num1, num2) {
    return num1*num2;
};

function divide(num1, num2) {
    return num1/num2;
};

// US2 - Operate Function
function operate (num1, num2, func) {
    switch (func){
        case add:
            return add(num1, num2);
            break;
        case subtract:
            return subtract(num1, num2);
            break;
        case multiply:
            return multiply(num1, num2);
            break;
        case divide:
            return divide (num1, num2);
            break;
    }
}

// US4 - popDisplay()
function popDisplay(char){
    if (char == '+' || char == '-' || char == '/' || char == '*') {
        display.textContent = display.textContent + ` ${char} `;
    } else {
        display.textContent = display.textContent + `${char}`;
    }
}

const display = document.querySelector('.display');
let numberOrder = [];
let operatorOrder = [];
let currentNumber='';

const operands = Array.from(document.querySelectorAll('.operand'));
for (let i = 0; i < operands.length; i++){
    operands[i].addEventListener('click', () =>{
        currentNumber = currentNumber + `${operands[i].textContent}`;
        display.textContent = display.textContent + `${operands[i].textContent}`;
    })
}
const operators = Array.from(document.querySelectorAll('.operator'));
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', () =>{
        if (numberOrder[0]) {
                numberOrder.push(currentNumber);
                display.textContent

            } else {
                // do nothing
            }
    })
}
