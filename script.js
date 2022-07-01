let numbers = '';
let numbers2 = ''
let operator = '';
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => button.addEventListener('click', function() {
    if(!isNaN(button.value)) {
        numbers += parseInt(button.value)
        console.log(numbers)
        display.textContent = numbers;
    } 
    else if (button.value != '=' && button.value != 'clear') {
        numbers2 = numbers;
        operator = button.value;
        numbers = ''
    } 
    else if (button.value == '=') {
        switch(operator) {
            case '+':
                display.textContent = parseInt(numbers) + parseInt(numbers2);
                numbers = '';
                numbers2 = '';
                break;
            case '-':
                display.textContent = parseInt(numbers2) - parseInt(numbers);
                numbers = '';
                numbers2 = '';
                break;
            case '*':
                display.textContent = parseInt(numbers) * parseInt(numbers2);
                numbers = '';
                numbers2 = '';
                break;
            case '/':
                if (numbers == '0') {
                    display.style = 'font-size: 25px;'
                    display.textContent = "CAN'T DIVIDE BY 0 DUMMY";
                } else {
                    display.textContent = parseInt(numbers2) / parseInt(numbers);
                    numbers = '';
                    numbers2 = '';
                    break;
                }
                
        }
    } 
    else {
        display.textContent = '0';
        numbers = '';
        numbers2 = '';
    }
}));

function calculate(op, nums) {
    console.log(num1, num2, op)
}


