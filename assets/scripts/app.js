const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
   return parseInt(usrInput.value);
}

// Generates and Writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from Vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult.enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
    console.log(logEntries[0]);
}

function subtract() {
    const enteredNumber = parseInt(usrInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult. enteredNumber);
}

function multiply() {const enteredNumber = parseInt(usrInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult. enteredNumber);
}

function divide() {const enteredNumber = parseInt(usrInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult. enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click' , subtract);
multiplyBtn.addEventListener('click' , multiply);
divideBtn.addEventListener('click', divide);