const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
    } else if (operator === 'mod') {
        result = parseFloat(n1) % parseFloat(n2);
    }
    return result;
}
keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return;
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'equal') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
        if (document.querySelector('.is-pressed')) {
            document.querySelector('.is-pressed').classList.remove('is-pressed')
        }
        calculator.dataset.previousKeyType = 'number';
    }
    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'mod') {
        // const operatorContent = key.textContent;
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const previousKeyType = calculator.dataset.previousKeyType;
        const secondValue = displayedNum;
        if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'equal') {
            const calculatedVal = calculate(firstValue, operator, secondValue);
            display.textContent = calculatedVal
            calculator.dataset.firstValue = calculatedVal;
        } else {
            calculator.dataset.firstValue = displayedNum
        }

        key.classList.add('is-pressed')
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.operator = action;
    }
    if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = 'decimal';
    }
    if (action === 'clear') {
        display.textContent = 0;
        calculator.dataset.previousKeyType = 'clear';
        calculator.dataset.operator = '';
        calculator.dataset.firstValue = '';
        if (document.querySelector('.is-pressed')) {
            document.querySelector('.is-pressed').classList.remove('is-pressed')
        }
    }
    if (action === 'negatpos') {
        display.textContent = displayedNum * -1;
    }
    if (action === 'equal') {
        let firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        let secondValue = displayedNum

        if (firstValue) {
            if (previousKeyType === 'equal') {
                firstValue = displayedNum
                secondValue = calculator.dataset.modValue

            }

            display.textContent = calculate(firstValue, operator, secondValue)
        }


        calculator.dataset.modValue = secondValue
        calculator.dataset.previousKeyType = 'equal'
    }
})
