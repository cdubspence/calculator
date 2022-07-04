let number1 = '';
let number2 = '';
let result = null;
let op = '';

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operation');
const clear = document.querySelector('.all-clear')


//get two numbers
digits.forEach(digit => digit.addEventListener('click', function() {
    if(op == '' && result == null) {
        number1 += parseInt(digit.value);
        display.textContent = number1;
    } else if (op != '' && result != null) {
        number1 += parseInt(digit.value);
        display.textContent = number1;
        operate(result, number1, op);
    } 
    else {
        number2 += parseInt(digit.value);
        display.textContent = number2;
        operate(number1, number2, op);
    }
}));

//get the operator
operator.forEach(button => button.addEventListener('click', function() {
    op = button.value;
}))

//perform operation on two numbers at a time
function operate(num1, num2, op) {
    switch(op) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            display.textContent = result;
            op = '';
            number1 = ''; 
            break;
        case '-':
            result = parseInt(num1) - parseInt(num2);
            display.textContent = result;
            op = '';
            number1 = '';
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2);
            display.textContent = result;
            op = '';
            number1 = '';
            break;
        case '/':
            if (num2 == 0) {
                display.style = 'font-size: 28px;';
                display.textContent = 'DONT DIVIDE BY 0 DUMMY'
            } else {
                result = parseInt(num1) / parseInt(num2);
                display.textContent = result;
                op = '';
                number1 = ''; 
            }
            break;
    }
}

clear.addEventListener('click', clearCalc);
function clearCalc() {
    display.style = 'text-align: right; font-size: 5rem;';
    display.textContent = '0';
    number1 = ''
    number2 = ''
    result = null
    op = ''
}





