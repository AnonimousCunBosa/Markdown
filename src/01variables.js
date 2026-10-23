var nombre1 = "Joan";
let Apellido = "Romero";
const apellido2 = "Fernandez";

var nombre1 = "Sebastian";
Apellido = "Gomez";

console.log(nombre1);
console.log(Apellido);

const persona = {
  nombre: "Ana",
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia"
  }
};

console.log(`Hola, soy ${persona.nombre} y vivo en ${persona.direccion.ciudad}.`);

// Agregar elementos al inicio y al final de un arreglo
const frutas = ["manzana", "pera"];
frutas.unshift("naranja"); // Agrega al inicio (posición 0)
frutas.push("uva"); // Agrega al final
console.log(frutas);

// Eliminar elementos del inicio y del finalfrutas.shift(); // Elimina el elemento de la posición 0
frutas.pop(); // Elimina el último elemento
console.log(frutas);
