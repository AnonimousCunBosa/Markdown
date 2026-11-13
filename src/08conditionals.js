// EJERCICIO: Acceso a una sala
//
// Enunciado:
// Una sala permite el ingreso únicamente si la persona tiene una entrada válida.
// Las entradas válidas son "GENERAL" y "VIP". La entrada "VIP" permite entrar
// a la zona exclusiva; la entrada "GENERAL" permite entrar a la zona común.
// Si el tipo de entrada no coincide con ninguno de esos valores, se debe negar
// el acceso.
//
// Objetivos:
// 1. Usar if / else if / else para tomar decisiones.
// 2. Comparar valores con igualdad estricta (===).
// 3. Usar desigualdad estricta (!==) para detectar una entrada no válida.
//
// Prueba cambiando el valor de tipoEntrada por "GENERAL", "VIP" y "INVITADO".

const tipoEntrada = "VIP";

if (tipoEntrada === "VIP") {
    console.log("Acceso permitido. Puedes pasar a la zona VIP.");
} else if (tipoEntrada === "GENERAL") {
    console.log("Acceso permitido. Puedes pasar a la zona común.");
} else {
    console.log("Acceso denegado. La entrada no es válida.");
}

// Comprobación adicional con desigualdad estricta (!==):
const entradaNoEsVip = tipoEntrada !== "VIP";
console.log("¿La entrada no es VIP?", entradaNoEsVip);
