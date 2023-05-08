function nameAge(){
const nombre = prompt("Introduce tu nombre:");
const edad = parseInt(prompt("Introduce tu edad:"));

const ageNextYear = edad + 1;

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${ageNextYear} años.`);
}

function geometria(){
const figura = prompt("¿Qué figura quieres calcular? (triangulo, rectangulo, circulo)");

if (figura === "triangulo") {
  const base = parseFloat(prompt("Introduce la base del triángulo:"));
  const altura = parseFloat(prompt("Introduce la altura del triángulo:"));
  
  const area = (base * altura) / 2;
  
  alert(`El área del triángulo es ${area}`);
} else if (figura === "rectangulo") {
  const base = parseFloat(prompt("Introduce la base del rectángulo:"));
  const altura = parseFloat(prompt("Introduce la altura del rectángulo:"));
  
  const area = base * altura;
  
  alert(`El área del rectángulo es ${area}`);
} else if (figura === "circulo") {
  const radio = parseFloat(prompt("Introduce el radio del círculo:"));
  
  const area = Math.PI * radio ** 2;

  alert(`El área del círculo es ${area}`);
} else {
  alert("Figura inválida");
}
}

function numeros(){
const numero = parseInt(prompt("Introduce un número:"));

for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - es par`);
  } else {
    console.log(`${i} - es impar`);
  }
}
}

function primo(){
const numero = parseInt(prompt("Introduce un número entero mayor que 1:"));

let esPrimo = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
    break;
  }
}

if (esPrimo) {
  console.log(`${numero} es un número primo`);
} else {
  console.log(`${numero} no es un número primo`);
}
}

function factorial(){
const numero = parseInt(prompt("Introduce un número entero mayor que cero:"));

let factorial = 1;
for (let i = 2; i <= numero; i++) {
  factorial *= i;
}

console.log(`El factorial de ${numero} es ${factorial}`);
}

function suma(){
let total = 0;
let contador = 0;

while (total < 50) {
  const numero = parseFloat(prompt("Introduce un número:"));
  total += numero;
  contador++;
}

console.log(`La suma total es ${total}`);
console.log(`Se han introducido ${contador} números`);
}

function array(){
const numeros = [2, 4, 6, 8, 10];

const pares = [];
const impares = [];

numeros.forEach(numero => {
  const aleatorio = Math.floor(Math.random() * 10) + 1;
  const resultado = numero * aleatorio;
  
  if (resultado % 2 === 0) {
    pares.push(resultado);
  } else {
    impares.push(resultado);
  }
  
  console.log(`${numero} x ${aleatorio} = ${resultado}`);
});

console.log("Arreglo de pares:", pares);
console.log("Arreglo de impares:", impares);
}

function dni(){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = parseInt(prompt("Introduce tu número de DNI"));

while (dni <= 0 || dni > 99999999) {
  dni = parseInt(prompt("Número de DNI no válido. Introduce un número positivo de máximo 8 dígitos"));
}

const posicionLetra = dni % 23;
const letra = letras[posicionLetra];

console.log(`Tu letra de DNI es ${letra}`);
}

function palabra(){
const palabra = prompt("Introduce una palabra");

let numVocales = 0;
let numConsonantes = 0;

for (let i = 0; i < palabra.length; i++) {
  const letra = palabra[i].toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    numVocales++;
  } else if (letra >= "a" && letra <= "z") {
    numConsonantes++;
  }
}

console.log(`La palabra "${palabra}" tiene ${numVocales} vocales y ${numConsonantes} consonantes. Su longitud es ${palabra.length}.`);
}

function color(){
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

const colorUsuario = prompt("Introduce un color");

if (colores.includes(colorUsuario)) {
  console.log(`El color ${colorUsuario} se encuentra en el array.`);
} else {
  console.log(`El color ${colorUsuario} no se encuentra en el array.`);
}
}