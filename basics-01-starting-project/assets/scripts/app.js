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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput()

    if (calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" &&
        enteredNumber === 0
    ) {


        const initalResult = currentResult
        let mathOperate
        if (calculationType === "ADD") {
            currentResult += enteredNumber
            mathOperate = "+"
        } else if (calculationType == "SUBTRACT") {
            currentResult -= enteredNumber
            mathOperate = "-"
        } else if (calculationType == "MULTIPLY") {
            currentResult *= enteredNumber
            mathOperate = "*"
        } else if (calculationType == "DIVIDE") {
            currentResult /= enteredNumber
            mathOperate = "/"
        }
        createAndWriteOutput(mathOperate, initalResult, enteredNumber)
        writeLog(calculationType, initalResult, enteredNumber, currentResult)
    }
}

function add() {
    calculateResult("ADD")
}
function subtract() {
    calculateResult("SUBTRACT")
}
function multiply() {
    calculateResult("MULTIPLY")
}
function divide() {
    calculateResult("DIVIDE")
}



addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




// 입력값 더할값  결과값

