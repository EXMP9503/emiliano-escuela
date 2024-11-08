// Paso 1: Introducci�n al generador piramidal. 
// Vamos a ir construyendo el c�digo de este generador.

// Paso 2: Declaraci�n de una variable llamada car�cter
// let caracter; // Paso 2

// // Paso 3: Inicializaci�n de la variable 'caracter'
// let caracter = "Hola"; // Paso 3

// // Paso 4: Cambio a comillas simples
// let caracter = 'Hola'; // P


// // Paso 5: Imprimir el valor de la variable caracter en la consola
// console.log(caracter); // Paso 5


// // Paso 6: Uso de camel case para declarar una nueva variable llamada secondCharacter
// let secondCharacter; // Paso 6

// // Paso 7: Console.log para ver el valor de una variable no inicializada
// console.log(secondCharacter); // Paso 7

// // Paso 8: Asignar valor a secondCharacter
// secondCharacter = "Prueba"; // Paso 8
// console.log(secondCharacter); // Paso 8

// // Paso 9: Eliminar las declaraciones anteriores 
// console.log(caracter); // Comentado del Paso 5
// console.log(secondCharacter); // Comentado del Paso 7

// // Paso 10: Declarar una variable 'count' e inicializarla con 8
// let count = 8; // Paso 10

// // Paso 11: Declarar una variable 'rows' e inicializarla con una matriz vac�a
let rows = []; // Paso 11 //

// Paso 12: Cambiar la declaraci�n de 'rows' para contener valores
//rows = ['London', 'New York', 'Mumbai']; // Paso 12

// // Paso 13: Imprimir el primer valor en la matriz 'rows'
// console.log(rows[0]); // Paso 13

// // Paso 14: Actualizar el tercer elemento de la matriz
// rows[2] = 10; // Paso 14
// console.log(rows); // Paso 14

// // Paso 15: Acceder al �ltimo elemento de la matriz din�micamente
// console.log(rows[rows.length - 1]); // Paso 15

// // Paso 16: Eliminar el primer registro de consola 
// console.log(rows[0]); // Comentado del Paso 13

// // Paso 17: Usar el m�todo .push() para agregar un valor al final de 'rows'
// rows.push("Paris"); // Paso 17
// console.log(rows); // Paso 17

// // Paso 18: Usar el m�todo .pop() y almacenar el valor en la variable 'popped'
// let popped = rows.pop(); // Paso 18
// console.log(popped); // Paso 18

// // Paso 19: Reasignar 'rows' a una matriz vac�a y cambiar el valor de 'caracter' a comillas dobles
// rows = []; // Paso 19
// caracter = "Hola"; // Paso 19

// Paso 20: Cambiar las variables let a const (no se puede cambiar 'rows' a const si es mutable)
const caracter = "#"; // Paso 20 //
const count = 8; // Paso 20 //

// Paso 21: Cambiar el valor de 'caracter' a '#'
//caracter = "#"; // Paso 21

// // Paso 22: Crear un bucle for b�sico
// for (let iterator; condition; iteration) { // Paso 22
//     // L�gica
// }

// // Paso 23: Reemplazar la cadena "iterador" con una declaraci�n de let para 'i'
// for (let i = 0; condition; iteration) { // Paso 23
//     // L�gica
// }

// // Paso 24: Reemplazar la cadena "condici�n" con una que verifique si i es menor que count
// for (let i = 0; i < count; iteration) { // Paso 24
//     // L�gica
// }

// // Paso 25: Reemplazar la cadena "iteraci�n" con una declaraci�n que incremente i en uno
// for (let i = 0; i < count; i = i + 1) { // Paso 25
//     // L�gica
// }

// // Paso 26: Imprimir el valor de 'i' en cada iteraci�n
// for (let i = 0; i < count; i++) {
//     console.log(i); // Paso 26
// }

// // Paso 27: Reemplazar console.log para enviar 'i' a la matriz 'rows'
// for (let i = 0; i < count; i++) {
//     rows.push(i); // Paso 27
// }

// Paso 28: Declarar una variable 'result' y asignarle una cadena vac�a
//let result = ""; // Paso 28

// Paso 29: Imprimir el valor de la variable 'result'
//console.log(result); // Paso 29

// //Paso 30: Crear un bucle for...of para iterar a trav�s de 'rows'
// for (const row of rows) { // Paso 30
//     console.log(row); // Muestra cada fila en 'rows'
// }


// // Paso 31:
// for (const row of rows) {
//   result = result + row;
// }
// Paso 32: Agregar salto de l�nea para crear la pir�mide correctamente
// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

// Paso 33: Empujar caracteres en lugar de n�meros
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(caracter);
//   }
//   let result = ""

//   for (const row of rows) {
//     result = result + "\n" + row;
//   }
  
//   console.log(result);// Mostrar las filas de la pir�mide

// // Paso 34: Usar el m�todo .repeat() en la variable de caracteres
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(caracter.repeat(i))
//   }

//   let result = ""

//   for (const row of rows) {
//     result = result + "\n" + row;
//   }
  
//   console.log(result);

// Paso 35: Ajustar el error de "off-by-one" (desfase por uno) //
// for (let i = 0; i < count; i = i + 1) {
//   rows.push(caracter.repeat(i + 1))
// }

// let result = ""

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

// // Paso 36: Extraer la l�gica en una funci�n
// function padRow() {
//     // L�gica se extraer� aqu�
// }

// // Paso 37: Llamada a la funci�n
// padRow();

// // Paso 38: Declarar constante 'call' y asignar llamada a padRow 
// const call = padRow();


// //Paso 39: Agregar una instrucci�n log para ver el valor de la variable 'call' 
// console.log(call);

// // Paso 40: Retornar un valor en la funci�n padRow
// function padRow() {
//     return "�Hola!";
// }

// // Paso 41: Definir un par�metro en la funci�n padRow
// function padRow(name) {
//   return name;
// }


// Paso 42: Usar un argumento para la llamada de la funci�n
//console.log(padRow("Gabriel"));

// const call = padRow("Gabriel");
// console.log(call);

// // Paso 43: Crear funci�n addTwoNumbers
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// const sum = addTwoNumbers(5, 10);
// console.log(sum)

// // Paso 44: Eliminar funci�n addTwoNumbers y la variable 'sum'
// function padRow() {
//     // funci�n vac�a
// }

// // Paso 45: Declarar variable test en la funci�n y ver el error de referencia
// function padRow() {
//     const test = "Testing";
    
// }
// console.log(test); // Esta l�nea generar�a un error fuera del �mbito

// // Paso 46: Retornar el valor "Testing"
// function padRow() {
//     const test = "Testing";
//     return test;
// }
// console.log(padRow());

// // Paso 47: Mover el console.log por encima del return

// function padRow() {
//   const test = "Testing";
//   console.log("�Esto funciona!");
//   return test;
//   console.log("�Esto funciona!");
// }

// // Paso 48: Eliminar par�metros y log innecesarios de padRow
// function padRow() {
//   const test = "Testing";
//   return test;
// }
// const call = padRow();
// console.log(call);

// // Paso 49: Eliminar la declaraci�n test y el return de padRow
// function padRow() {
//     // Funci�n vac�a
// }
// const call = padRow();
// console.log(call);

// // Paso 50: Eliminar la variable call y console.log innecesarios
// // C�digo limpio
// function padRow() {

// }

// // Paso 51: Agregar par�metros rowNumber y rowCount a la funci�n
// function padRow(rowNumber, rowCount) {
//     // Par�metros agregados
// }

// // Paso 52: Retornar el valor de caracter repetido rowNumber veces
// function padRow(rowNumber, rowCount) {
//   return caracter.repeat(rowNumber);
// }

// // Paso 53: Reemplazar character.repeat(i + 1) con llamada a padRow
// for (let i = 0; i < count; i = i + 1) {
// rows.push(padRow())
// }

// // Paso 54: Pasar i + 1 y count como argumentos a padRow
// for (let i = 0; i < count; i = i + 1) {
// rows.push(padRow(i + 1, count));
// }

// //Paso 55: Concatenar espacio al principio y final de la cadena de caracteres

// function padRow(rowNumber, rowCount) {
// return " " + caracter.repeat(rowNumber) + " ";
// }

// // Paso 56: Actualizar repetici�n de espacios en blanco
// function padRow(rowNumber, rowCount) {
// return " ".repeat(rowCount - rowNumber) + caracter.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
// }

// // * Paso 57: Repetir el car�cter 2 * rowNumber - 1 veces
// function padRow(rowNumber, rowCount) {
// return " ".repeat(rowCount - rowNumber) + caracter.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

// // Paso 58: Usar asignaci�n con adici�n (+=)
// for (let i = 0; i < count; i = i + 1) {
// rows.push(padRow(i + 1, count));
// }
// let result = ""

// for (const row of rows) {
// result = result + "\n" + row;
// }

// console.log(result);


// // Paso 59: Usar operador de incremento ++
// for (let i = 0; i < count; i++) {
// rows.push(padRow(i + 1, count));
// }

// // Paso 60: Iniciar el bucle en 1
// for (let i = 1; i < count; i++) {
// rows.push(padRow(i + 1, count));
// }

// // Paso 61: Actualizar el primer argumento de padRow para que sea i
// for (let i = 1; i < count; i++) {
//   rows.push(padRow(i, count));
// }

// // Paso 62: Actualizar la condici�n del bucle para que sea <= count
// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// Paso 63: Agregar comentario de una sola l�nea
// use a different type of loop

// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// Paso 64: Comentario de m�ltiples l�neas
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/


// Paso 65: Crear una sentencia if
if (true) {
  console.log("Condition is true");
}

// Paso 66: Cambia la condici�n de tu sentencia if al valor booleano false
if (false) {
  console.log("Condition is true");
}

// Paso 67: cambia la condici�n a la cadena "false"
if ("false") {
  console.log("Condition is true");
}

//Paso 68: cambia la condici�n if a una cadena vac�a "", que es un valor falsy.
if ("") {
  console.log("Condition is true");
}

// Paso 69: agrega una sentencia else if 
if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
}

// Paso 70: Agrega un bloque else al bloque else if
if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}

// Paso 71: declarar una variable continueLoop y as�gnale el valor booleano false
let continueLoop = false;
let done = 0;

// Paso 72: declarar un bucle while con continueLoop 
while (continueLoop) {

}

// Paso 73: aumentar el valor de la variable done 
while (continueLoop) {
  done++;

} 
