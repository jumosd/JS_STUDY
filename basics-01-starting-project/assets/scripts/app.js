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

function add() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput("+", initalResult, enteredNumber)
    const logEntry = {
        operation: 'ADD',
        prevResult: initalResult,
        number: enteredNumber,
        result: currentResult,
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput("-", initalResult, enteredNumber)
}
function multiply() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initalResult, enteredNumber)
}
function divide() {
    const enteredNumber = getUserNumberInput()
    const initalResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initalResult, enteredNumber)
}



addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




// 입력값 더할값  결과값

