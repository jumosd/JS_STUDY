const defaultResult = 0;
let currentResult = defaultResult


function getUserNumberInput() {
    return parseInt(userInput.value)
}

function add() {
    const enteredNumber = getUserNumberInput()
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber
    outputResult(currentResult, calcDescription)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    const calcDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber
    outputResult(currentResult, calcDescription)
}
function multiply() { }
function divide() { }



addBtn.addEventListener('click', add)




// 입력값 더할값  결과값

