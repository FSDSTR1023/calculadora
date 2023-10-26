const result = document.getElementById('result');
const operation = document.getElementById('operation');

function handleClick(param) {
  operation.innerText = operation.innerText + param;
  result.value = eval(operation.innerText);
  result.innerText = result.value;
}

function cleanAll() {
  operation.innerText = '';
  result.innerText = '0';
}

function cleanOne() {
  operation.innerText = operation.innerText.slice(0, -1);
}

function calculate() {
  operation.innerText = result.value;
  result.innerText = result.value;
}
