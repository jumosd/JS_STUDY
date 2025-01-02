const defaultResult = 0;
let currentResult = defaultResult
let logEntries = []

function getUserNumberInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function writeLog(
    operationSimbol,
    prevResult,
    inputNumber,
    calcResult
) {
    const logEntry = {
        operation: operationSimbol,
        prevResult: prevResult,
        number: inputNumber,
        result: calcResult,
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput("+", initalResult, enteredNumber)
    writeLog("ADD", initalResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput("-", initalResult, enteredNumber)
    writeLog("SUBTRACT", initalResult, enteredNumber, currentResult)
}
function multiply() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initalResult, enteredNumber)
    writeLog("MULTIPLY", initalResult, enteredNumber, currentResult)
}
function divide() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initalResult, enteredNumber)
    writeLog("DIVIDE", initalResult, enteredNumber, currentResult)
}



addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




// 입력값 더할값  결과값

