







// const numberButton = document.querySelectorAll("numberButton");
// numberButton.forEach(number => {
//     number.addEventListener("click", function handleClick() {
//         console.log("test");
//     })
// })


// getElementsByClassName create a HTML Document which is similar to an array. The elements in a collection can be accessed by index (starts at 0).
// otra manera de escribirlo: 
// [...buttons].map(function(button) {
// button.addEventListener("click", function() { ...etc... })   
// })
const numberButton = Array.from(document.getElementsByClassName("numberButton"));
numberButton.forEach(number => {
    number.addEventListener('click', function setInputValue() {
        console.log("clicked");
        let input = document.getElementById("operation");
        input.value += number.value;
    })
})

const operatorButton = Array.from(document.getElementsByClassName("operatorButton"));
operatorButton.forEach(operator => {
    operator.addEventListener('click', function setInputValue() {
        console.log("clicked something");
        let input = document.getElementById("operation");
        input.value += operator.value;
    })
})


const equalButton = document.getElementById("equalButton")
equalButton.addEventListener("click", function() {
    console.log("trying")
    const compute = document.getElementById("operation").value;
    let input = document.getElementById("result");
    input.value = parseFloat(compute);
})


//gets the numbers in the display
// const compute = document.getElementById("operation").value;




    // document.getElementById("operation").value += numberButton.innerText
    

const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", function(){
    console.log("this works");
    document.getElementById("operation").value = '';
    document.getElementById("result").value = '';
})

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", function(){
    console.log("delete please")
    document.getElementById("operation").value -= document.getElementById("operation").value
})

// const operatorButton = document.getElementsByClassName("operator")
// operatorButton.addEventListener("click", function(){




// })inputs.forEach(input => {
    // input.value = '';  (possible for delete?)




// document.getElementById("operation").value += numberButton.innerText;