# Reto calculadora simple

Este es un ejercicio para crear una calculadora

## Instrucciones

1. Clona este repositorio en tu máquina local.
2. Crea una rama para crear tu calculadora (`git checkout -b miNombre`)
3. Haz commit de tus cambios (`git commit -am 'Agrego mi nueva funcionalidad'`).
4. Crea la maquetación necesaria para la calculadora
5. Escucha los clicks del usuario a los botones y haz que se muestre la operación en pantalla
6. Realiza el cálculo, limpiando la pantalla y mostrando el resultado
7. Haz push a la rama (`git push origin miNombre`).
8. Abre un pull request al finalizar.

## Esquema de la pantalla

| --- | --- | --- | --- |
| 7 | 8 | 9 | / |
| 4 | 5 | 6 | * |
| 1 | 2 | 3 | - |
| C | 0 | = | + |

## Funciones

### `add(a, b)`

Esta función toma dos números como argumentos y devuelve la suma de los mismos.

### `substract(a, b)`

Esta función toma dos números como argumentos y devuelve la resta del segundo número al primero.

### `product(a, b)`

Esta función toma dos números como argumentos y devuelve el producto de los mismos.

### `division(a, b)`

Esta función toma dos números como argumentos y devuelve el cociente de la división del primer número entre el segundo.

### `clear()`

Esta función limpia la pantalla

## A tener en cuenta

1. El diseño puede ser tan sencillo como hacer un grid con los botones, como tan complejo como trabajar el CSS para que se parezca a una calculadora Braun ET66
2. En JS existe una función [eval()](https://www.w3schools.com/jsref/jsref_eval.asp) que permite convertir un string en una operación y realizar el cálculo. 