// const lista1 = [

// 100,
// 200,
// 300,
// 500
// ];

// let sumalista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//     sumalista1 = sumalista1 + lista1[i];


// }
// const promediolista1 = sumalista1 / lista1.length;


// function    calcularmediaaritmetica(lista){
//     let sumalista = 0;
// for (let i = 0; i < lista.length; i++) {
//     sumalista = sumalista + lista[i];
// }

// const promediolista = sumalista / lista.length;

// return promediolista;
// }




function    calcularmediaaritmetica(lista){
//     let sumalista = 0;
// for (let i = 0; i < lista.length; i++) {
//     sumalista = sumalista + lista[i];
// }
const sumalista = lista.reduce(
    function(valoracumulado = 0,nuevoelemento) {
    return valoracumulado + nuevoelemento;
    }
);

const promediolista = sumalista / lista.length;

return promediolista;
}

