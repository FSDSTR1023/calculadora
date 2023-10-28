

// getElementsByClassName create a HTML Document which is similar to an array. The elements in a collection can be accessed by index (starts at 0).
// otra manera de escribirlo: 
// [...buttons].map(function(button) {
// button.addEventListener("click", function() { ...etc... })   
// })
const numberButton = Array.from(document.getElementsByClassName("numberButton"));
numberButton.forEach(number => {
    number.addEventListener('click', function setInputValue() {
        let input = document.getElementById("operation");
        input.value += number.value;
    })
})

const operatorButton = Array.from(document.getElementsByClassName("operatorButton"));
operatorButton.forEach(operator => {
    operator.addEventListener('click', function setInputValue() {
        let input = document.getElementById("operation");
        input.value += operator.value;
    })
})

const equalButton = document.getElementById("equalButton")
equalButton.addEventListener("click", function() {
    let result = document.getElementById("result");
    result.value = (eval(document.getElementById("operation").value))
    document.getElementById("operation").value = '';
})

const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", function(){
    document.getElementById("operation").value = '';
    document.getElementById("result").value = '';
})

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", function(){
    const currentOperation = document.getElementById("operation");
    currentOperation.value = currentOperation.value.slice(0,-1);
})
