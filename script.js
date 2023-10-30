let numberBtn = document.querySelectorAll('.numberBtn')
let operationBtn = document.querySelectorAll('.operationBtn')
let operation = document.getElementById('operation')
let result = document.getElementById('result')
let equal = document.getElementById('equal')
let clear = document.getElementById('clear')
let backspace = document.getElementById('backspace');

numberBtn.forEach(function(number) {
  number.addEventListener('click', function() {
    operation.textContent += number.textContent;
  });
});

operationBtn.forEach(function(operationSign) {
  operationSign.addEventListener('click', function() {
    if (result.textContent === '' || operation.textContent !== '') {
      operation.textContent += operationSign.textContent;
    } else {
    console.log(operation.textContent);
    operation.textContent +=  result.textContent + operationSign.textContent;
    }
  });
});


equal.addEventListener('click', function() {
  if (result.textContent === '' || operation.textContent !== '') {
    result.textContent = eval(operation.textContent);
    operation.textContent = '';
  }
})

clear.addEventListener('click', function() {
  result.textContent = '';
  operation.textContent = '';
})

backspace.addEventListener('click', function() {
    if(operation.textContent.length === 1 || operation.textContent === "ERROR!"){
      operation.textContent = "";
    }else{  
      operation.textContent = operation.textContent.slice(0, -1);
    }                
    return;
})