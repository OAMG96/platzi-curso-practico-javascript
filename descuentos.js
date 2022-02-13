//const preciooriginal = 120;
//const descuento = 18;


function calcularpreciocondescuento(precio,descuento){
    const porcentajecondescuento = 100 -descuento;
const preciocondescuento = (precio * porcentajecondescuento) / 100;
return preciocondescuento;
   
}

function onclickprice(){
    const inputprice = document.getElementById("InputPrice");
    const pricevalue = inputprice.value;


    const inputdiscount = document.getElementById("InputDiscount");
    const discountvalue = inputdiscount.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, discountvalue);

    const resultadop = document.getElementById("resultadop");
    resultadop.innerText = "El precio con descuento son: $" + preciocondescuento;

}




// console.log({
// preciooriginal,
// descuento,
// porcentajecondescuento,
// preciocondescuento,


// });