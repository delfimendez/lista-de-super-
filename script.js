let listaDeSuper = ["Leche", "Pan", "Huevos", "Manzanas", "Arroz"];

function logItems(arreglo) {
    arreglo.forEach(function(item) {
        console.log(item);
    });
}

logItems(listaDeSuper);

let otraLista = ["Shampoo", "Jabón", "Pasta dental", "Toalla"];

logItems(otraLista);