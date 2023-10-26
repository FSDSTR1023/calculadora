let operacion = "0";
let resultado = "0";
let cadenaOperacionVacia=true;

let pantallaOperacion=document.getElementById("operacion");
let pantallaResultado=document.getElementById("resultado");

function clear() {
    operacion = "0";
    resultado = "0";
    cadenaOperacionVacia=true;
    actualizarPantalla();
}

function borrar() {
    if(!cadenaOperacionVacia) {
        operacion = operacion.substring(0, operacion.length-1);
        if(operacion.length==0) {
            operacion="0";
            cadenaOperacionVacia=true;
        }
    } else {
        operacion="0";
    }
    actualizarPantalla();
}

function addElement(element) {
    if(cadenaOperacionVacia) {
        if (isOperator(element)) {
            operacion=resultado+element;
            cadenaOperacionVacia=false;
        }
        else if(element!="0") {
            operacion=element;
            cadenaOperacionVacia=false;
        }
    }
    else {
        operacion+=element;
    }
    actualizarPantalla();
}

function resolver() {
    // resultado=eval(operacion);
    resultado=new Function('return ' + operacion)();
    cadenaOperacionVacia=true;
    actualizarPantalla();
}

function actualizarPantalla() {
    pantallaOperacion.textContent=operacion;
    pantallaResultado.textContent=resultado;
}

function isOperator(element) {
    return element=="/" || element=="*" 
        || element=="-" || element=="+"
        || element==".";
}


/* Añadir los Event Listener a los botones */
let bclear=document.getElementById("bc");
bc.addEventListener("click", ()=>clear());
let bborrar=document.getElementById("bborrar");
bborrar.addEventListener("click", ()=>borrar());
let bdiv=document.getElementById("bdiv");
bdiv.addEventListener("click", ()=>addElement(bdiv.value));
let b7=document.getElementById("b7");
b7.addEventListener("click", ()=>addElement(b7.value));
let b8=document.getElementById("b8");
b8.addEventListener("click", ()=>addElement(b8.value));
let b9=document.getElementById("b9");
b9.addEventListener("click", ()=>addElement(b9.value))
let bx=document.getElementById("bx");
bx.addEventListener("click", ()=>addElement(bx.value));
let b4=document.getElementById("b4");
b4.addEventListener("click", ()=>addElement(b4.value));
let b5=document.getElementById("b5");
b5.addEventListener("click", ()=>addElement(b5.value));
let b6=document.getElementById("b6");
b6.addEventListener("click", ()=>addElement(b6.value))
let bresta=document.getElementById("bresta");
bresta.addEventListener("click", ()=>addElement(bresta.value));
let b1=document.getElementById("b1");
b1.addEventListener("click", ()=>addElement(b1.value));
let b2=document.getElementById("b2");
b2.addEventListener("click", ()=>addElement(b2.value));
let b3=document.getElementById("b3");
b3.addEventListener("click", ()=>addElement(b3.value))
let bsuma=document.getElementById("bsuma");
bsuma.addEventListener("click", ()=>addElement(bsuma.value));
let b0=document.getElementById("b0");
b0.addEventListener("click", ()=>addElement(b0.value));
let bdot=document.getElementById("bdot");
bdot.addEventListener("click", ()=>addElement(bdot.value));
let bequals=document.getElementById("bequals");
bequals.addEventListener("click", ()=>resolver());