const calculator = {
    display: '0',
    operator: null,
    firstNumber: null,
    waitingSecondNumber: false
}

function viewDisplay({display}) {
    document.querySelector('#displayNumber').innerHTML = display;
}

function inputDigit(digit) {
    if(calculator.display === '0') {
        calculator.display = digit;
    } else {
        calculator.display += digit;
    }
}

function negativeNumber() {
    if(calculator.display === '0'){
        return;
    } else {
        calculator.display *= -1;
    }
}

function clearDisplay() {
    calculator.display ='0',
    calculator.operator= null,
    calculator.firstNumber = null,
    calculator.waitingSecondNumber = false
}

function inputOperator(operator) {
    if(!calculator.waitingSecondNumber) {
        calculator.operator = operator;
        calculator.waitingSecondNumber = true;
        calculator.firstNumber = calculator.display;
        // mengatur ulang display 
        calculator.display = '0';
    } else {
        alert('operator sudah ditetapkan');
    }
} 

function actionCounting() {
    let result = 0;
    if( calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.display);
    }
    if( calculator.operator === '-') {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.display);
    }
    if( calculator.operator === 'x') {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.display);
    }
    if( calculator.operator === '/') {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.display);
    }

    if( calculator.firstNumber === null || calculator.operator === null) {
        return alert('Anda belum menetapkan operator');
    }
    calculator.display = result;
}


const button = document.querySelectorAll('.button');
for (const btn of button) {
    btn.addEventListener('click', function() {
        const target = this.value;

        if(btn.classList.contains('negative')){
            negativeNumber();
            viewDisplay(calculator);
            return;
        }

        if(btn.classList.contains('clear')) {
            clearDisplay();
            viewDisplay(calculator);
            return;
        }

        if(btn.classList.contains('operator')) {
            inputOperator(target)
            viewDisplay(calculator);
            return;
        }

        if(btn.classList.contains('equal')) {
            actionCounting();
            viewDisplay(calculator);
            return;
        }

        inputDigit(target)
        viewDisplay(calculator);
    });
}

