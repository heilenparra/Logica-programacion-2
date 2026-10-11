const prompt=require("prompt-sync")();


console.log ("Bienvenido al conversor de temperatura")

const numero = parseFloat(prompt("Escribe la temperaura en grados celsius: "))

const Farenheit = (1.8*numero) + 32;
const Kelvin= numero+273.15;

console.log ("Grados Kelvin: ",Kelvin)
console.log ("Grados Fahrenheit: ",Farenheit)


