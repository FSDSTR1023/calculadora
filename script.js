let numberBtn = document.querySelectorAll('.numberBtn, .operationBtn')
let operation = document.getElementById('operation')
let result = document.getElementById('result')
let equal = document.getElementById('equal')
let clear = document.getElementById('clear')

numberBtn.forEach(function(number) {
  number.addEventListener('click', function() {
    console.log(number.textContent);
    operation.textContent += number.textContent;
  });
});

equal.addEventListener('click', function() {
  result.textContent = eval(operation.textContent);
  operation.textContent = '';
})

clear.addEventListener('click', function() {
  result.textContent = '';
  operation.textContent = '';
})