let listaDeSuper = [];

// PARTE I

listaDeSuper[0] = "sal";
listaDeSuper[1] = "pan";
listaDeSuper[2] = "leche";
listaDeSuper[3] = "arroz";
listaDeSuper[4] = "huevos";

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;
console.log(listaDeSuper[ultimoElemento]);

// PARTE II

listaDeSuper.push("azúcar");
listaDeSuper.push("fideos");

listaDeSuper.unshift("aceite");
listaDeSuper.unshift("queso");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();
console.log(noHabia);

let comprado = listaDeSuper.shift();
console.log(comprado);

console.log(listaDeSuper.length);

// PARTE III

// 1. Mostrar cada ítem usando un for loop
for (let i = 0; i < listaDeSuper.length; i++) {
    console.log(listaDeSuper[i]);
}

// 2. Crear la función logItems
function logItems(arreglo) {
    arreglo.forEach(function(item) {
        console.log(item);
    });
}

// 3. Invocar logItems dos veces
logItems(listaDeSuper);

let otraLista = ["shampoo", "jabón", "dentífrico"];

logItems(otraLista);
