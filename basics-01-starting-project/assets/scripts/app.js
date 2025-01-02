const defaultResult = 0;
let currentResult = defaultResult



const add = () => {
    currentResult = currentResult + userInput.value
    outputResult(currentResult, '')
}


addBtn.addEventListener('click', add)




// 입력값 더할값  결과값

