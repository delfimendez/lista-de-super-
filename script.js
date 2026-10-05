
let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "pan";
listaDeSuper[2] = "leche";
listaDeSuper[3] = "arroz";
listaDeSuper[4] = "huevos";

// 1. Agregar dos productos al final
listaDeSuper.push("azúcar");
listaDeSuper.push("fideos");

// 2. Agregar dos productos al principio
listaDeSuper.unshift("aceite");
listaDeSuper.unshift("queso");

// 3. Determinar cuánto mide el arreglo
let largo = listaDeSuper.length;
console.log(largo);

// 4. Sacar un producto del final
let noHabia = listaDeSuper.pop();
console.log(noHabia);

// 5. Sacar un producto del principio
let comprado = listaDeSuper.shift();
console.log(comprado);

console.log(listaDeSuper);