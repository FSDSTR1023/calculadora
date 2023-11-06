let display = document.getElementById('display');
let input = '';

// So, when you call addToDisplay('3'), it appends '3' to the current input and
// updates the display, effectively showing '3' on the calculator screen. 
// This function is used for adding numbers and operators to the input display 
// as you interact with the calculator buttons.
function addToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = '';
    display.value = '';
}

function deleteCharacter() {
    // Remove the last character from the input
    input = input.slice(0, -1);
    display.value = input;
}

function calculateResult() {
    input = eval(input);
    display.value = input;
}