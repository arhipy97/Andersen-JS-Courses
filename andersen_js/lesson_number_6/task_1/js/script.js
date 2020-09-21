const WRAPPER = createElem('div', 'wrapper');
const CALCULATOR = createElem('div', 'calculator');
const SCREEN = createElem('output', 'calculator_screen');
const symbolRows = {
    firstRow: ['AC', '*'],
    secondRow: ['7', '8', '9', '/'],
    thirdRow: ['4', '5', '6', '+'],
    fourthRow: ['1', '2', '3', '-'],
    fifthRow: ['0', '.', '='],
};
const ACTION_LOG = [];
let firstNumber;
let action;
let result;
let secondNumber;

function renderCalculator() {
    document.body.prepend(WRAPPER);
    WRAPPER.prepend(CALCULATOR);
    CALCULATOR.prepend(SCREEN);
    renderButtons();
    setActionOnBtn();
}

function createElem(tag, ...className) {
    const ELEM = document.createElement(tag);
    ELEM.classList.add(...className);
    return ELEM;
}

function renderButtons() {
    let counter = 1;
    Object.values(symbolRows).forEach((rowArray) =>{
        const ROW = createElem('div', 'calculator__row', `row${counter}`);
        CALCULATOR.append(ROW);
        rowArray.forEach((symbol) => {
            const BUTTON = createElem('div', 'calculator__btn');
            BUTTON.setAttribute('val', `${symbol}`);
            BUTTON.innerHTML = symbol;
            ROW.append(BUTTON);
        });
        counter++;
    })
}

function setActionOnBtn() {
    document.querySelectorAll('.calculator__btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
}

function isValueNumberHandler(value) {
    if (SCREEN.innerHTML.length < 9) SCREEN.innerHTML += value;
    if (SCREEN.innerHTML.indexOf('00') === 0) SCREEN.innerHTML = '0.';
}

function isValueACHandler() {
    SCREEN.innerHTML = '';
}

function isValuePointHandler(value) {
    if (SCREEN.innerHTML.indexOf('.') === -1 
    && SCREEN.innerHTML.length > 0 
    && SCREEN.innerHTML.length < 8) {
        SCREEN.innerHTML += value;
    }
}

function pushToActionLog(expression) {
    ACTION_LOG.push(expression);
}

function cutResultValueLengthToNineSymbols(resul) {
    const POINT_POSITION = resul.toString().indexOf('.');
    if (POINT_POSITION > 0 && POINT_POSITION < 8) {
        return parseFloat(resul.toFixed(8 - POINT_POSITION));
    } else if (resul.toString().length > 9) {
        return 'Err:length';
    }
    return parseFloat(resul);
}

function isValueEquallyHandler() {
    secondNumber = +SCREEN.innerHTML;
    result = defineResultValue(action, firstNumber, secondNumber);
    pushToActionLog(`${firstNumber} ${action} ${secondNumber} = ${result}`);
    SCREEN.innerHTML = result;
}

function mathActionHandler(value) {
    firstNumber = +SCREEN.innerHTML;
    action = value;
    SCREEN.innerHTML = '';
}

function defineResultValue(action, firstNumber, secondNumber) {
    let result;
    switch (action) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            break;
    }
    return cutResultValueLengthToNineSymbols(result);
}

function splitNumberAndAction (val) {
    if (Number(val) >= 0 ) {
        isValueNumberHandler(val);
    } else {  
        mathActionHandler(val);
    }
}

function onButtonClick(event) {
    const VALUE = event.target.getAttribute('val');
    switch (VALUE) {
        case 'AC':
            isValueACHandler();
            break;
        case '=':
            isValueEquallyHandler();
            break;
        case '.':
            isValuePointHandler(VALUE);
            break;
        default:
            splitNumberAndAction(VALUE)
        }
}


renderCalculator();
