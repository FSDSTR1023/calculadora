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

document.querySelector('button[data-action="clear"]').addEventListener('click', clearDisplay);
document.querySelector('button[data-action="delete"]').addEventListener('click', deleteLastCharacter);
document.querySelector('button[data-action="append"]').addEventListener('click', function() {
    var input = this.innerText;
    appendInput(input);
});
document.querySelector('button[data-action="calculate"]').addEventListener('click', calculateResult);

