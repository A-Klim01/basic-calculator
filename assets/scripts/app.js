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

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
    ) {
      const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry);
        console.log(logEntries[0]);
    }

    function calculateResult(calculationType) {
        // if (
        //     calculationType !== 'ADD' &&
        //     calculationType !== 'SUBTRACT' &&
        //     calculationType !== 'Multiply' &&
        //     calculationType !== 'DIVIDE'
        // ) {
        //     return;
        // }

        if (
            calculationType === 'ADD' ||
            calculationType === 'SUBTRACT' ||
            calculationType === 'Multiply' ||
            calculationType === 'DIVIDE'
        )
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        let mathOperator;
        if (calculation === 'ADD') {
           currentResult += enteredNumber;
           mathOperator = '+'; 
        } else if (calculation === 'SUBTRACT') {
           currentResult -= enteredNumber;
           mathOperator = '-'; 
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculateType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }
        
            createAndWriteOutput( mathOperator, initialResult.enteredNumber);
        writeToLog( calculationType, initialResult, enteredNumber, currentResult); 
    }
       
    

function add() {
    calculateResult ('ADD');
}

function subtract() {
    calculateResult ('SUBTRACT');
}

function multiply() {
    calculateResult ('MULTIPLY');
}

function divide() {
    calculateResult ('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);