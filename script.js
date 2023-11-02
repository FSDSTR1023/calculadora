var resultScreen = document.getElementById('result-screen');
var operationScreen = document.getElementById('operation-screen');

function clearDisplay() {
    resultScreen.innerText = '';
    operationScreen.innerText = '';
}

function deleteLastCharacter() {
    var resultText = resultScreen.innerText;
    resultScreen.innerText = resultText.slice(0, -1);
}

function appendInput(input) {
    var resultText = resultScreen.innerText;
    resultScreen.innerText = resultText + input;
}

function calculateResult() {
    var operationText = resultScreen.innerText;
    try {
        var result = eval(operationText);
        resultScreen.innerText = result;
        operationScreen.innerText = operationText;
    } catch (error) {
        resultScreen.innerText = 'Error';
        operationScreen.innerText = operationText;
    }
}