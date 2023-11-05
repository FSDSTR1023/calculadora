document.addEventListener('DOMContentLoaded', function() {
    const resultado = document.getElementById('resultado');
    const operandos = document.getElementById('operandos');
    const botones = document.querySelectorAll('.teclado button');
    let operacion = '';
    let numeroTemporal = '';

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const valorBoton = boton.textContent;

            if (valorBoton === '=') {
                try {
                    operacion += numeroTemporal; // Agregar el número temporal a la operación
                    resultado.textContent = eval(operacion);
                    operandos.textContent = operacion;
                    numeroTemporal = '';
                } catch (error) {
                    resultado.textContent = 'Error';
                }
            } else if (valorBoton === 'C') {
                resultado.textContent = '0';
                operandos.textContent = '0';
                operacion = '';
                numeroTemporal = '';
            } else {
                if (valorBoton.match(/[0-9]/)) {
                    numeroTemporal += valorBoton;
                    resultado.textContent = numeroTemporal;
                } else {
                    operacion += numeroTemporal; // Agregar el número temporal a la operación
                    operacion += valorBoton; // Agregar el operador
                    operandos.textContent = operacion;
                    numeroTemporal = '';
                }
            }
        });
    });
});