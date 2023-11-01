//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

//audio de click
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
    play()
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
    play()
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
    play()
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
    play()
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
    play()
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
    play()
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
    play()
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
    play()
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
    play()
}
reset.onclick = function(e){
    clear();
    play()
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    clear();
    play()
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    clear();
    play()
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    clear();
    play()
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    clear();
    play()
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    play()
    switch(operacion){
        case "+":
            add (parseFloat(operandoa),parseFloat(operandob));
        break;
        case "-":
            substract (parseFloat(operandoa),parseFloat(operandob));
        break;
        case "*":
            product (parseFloat(operandoa),parseFloat(operandob));
        break;
        case "/":
            dividir (parseFloat(operandoa),parseFloat(operandob));
        break;
    }
}

function clear(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

//operaciones
function add(a,b){
    resetear();
    resultado.textContent = a + b;
}

function substract(a, b){
    resetear();
    resultado.textContent = a - b;
}

function product(a, b){
    resetear();
    resultado.textContent = a * b;
}

function dividir(a, b){
    resetear();
    resultado.textContent = a / b;
}