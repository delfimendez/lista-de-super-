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
    console.log("for - listaDeSuper: " + listaDeSuper[i]);
}

// 2. Crear la función logItems
function logItems(arreglo) {
    arreglo.forEach(function(item) {
        console.log("function forEach: " + item);
    });
}

// 3. Invocar logItems dos veces
logItems(listaDeSuper);

let otraLista = ["shampoo", "jabón", "dentífrico"];

logItems(otraLista);
// SÚPER APP: MÓDULO INTERACTIVO

let comando = "";

while (comando !== "salir") {
    comando = prompt(
        'SÚPER APP\nEscribí un comando: nuevo, listar, borrar o salir'
    );

    if (comando === null) {
        comando = "salir";
    }

    if (comando === "nuevo") {
        let producto = prompt("¿Qué producto querés agregar?");

        if (producto !== null && producto.trim() !== "") {
            listaDeSuper.push(producto);
            console.log("Producto agregado: " + producto);
        } else {
            console.log("No se agregó ningún producto.");
        }

    } else if (comando === "listar") {
        console.log("LISTA DE SÚPER:");
        logItems(listaDeSuper);

    } else if (comando === "borrar") {
        logItems(listaDeSuper);

        let indice = prompt(
            "Ingresá el número del producto que querés borrar:"
        );

        if (indice !== null && indice.trim() !== "") {
            indice = Number(indice);

            if (
                Number.isInteger(indice) &&
                indice >= 1 &&
                indice <= listaDeSuper.length
            ) {
                let eliminado = listaDeSuper.splice(indice - 1, 1);
                console.log("Producto eliminado: " + eliminado[0]);
            } else {
                console.log("Número de producto inválido.");
            }
        }

    } else if (comando === "salir") {
        console.log("Saliste de la Súper App.");

    } else {
        console.log("Comando no válido. Intentá de nuevo.");
    }
}