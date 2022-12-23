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
        case 'add':
            return add(+num1, +num2);
            break;
        case 'subtract':
            return subtract(+num1, +num2);
            break;
        case 'multiply':
            return multiply(+num1, +num2);
            break;
        case 'divide':
            return divide (+num1, +num2);
            break;
    }
}

// US4 - popDisplay()
function popDisplay(char){
    switch (char){
        case '+':
            operatorOrder.push('add');
            break;
        case '-':
            operatorOrder.push('subtract');
            break;
        case '×':
            operatorOrder.push('multiply');
            break;
        case '÷':
            operatorOrder.push('divide');
            break;
        };
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
        if (currentNumber != '') {
                numberOrder.push(currentNumber);
                display.textContent = display.textContent + ` ${operators[i].textContent} `;
                popDisplay(operators[i].textContent);
                    currentNumber='';
            } else {
                // do nothing
            }
    })
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>{
    console.log(numberOrder);
    console.log(operatorOrder);
    display.textContent = '';
    numberOrder = [];
    operatorOrder = [];
    currentNumber='';
})

function evalFunction(){
    numberOrder.push(currentNumber);
    let newNum = numberOrder[0]
    for (let i = 0; i < operatorOrder.length; i++) {
        newNum = operate(newNum, numberOrder[i+1], operatorOrder[i]);
    }
    display.textContent = roundToHundreds(newNum);
}

function roundToHundreds(num){
    return (Math.floor(num*100)/100)
}

const evalButton = document.querySelector('.evaluate');
evalButton.addEventListener('click', () => evalFunction());

