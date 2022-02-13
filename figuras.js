// //codigo del cuadrado
// console.group("Cuadrados");

// const ladocuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

// const perimetrocuadrado = ladocuadrado * 5;
// console.log("El perimetro del cuadrado es : " + perimetrocuadrado + "cm/2");

// const areacuadrada = ladocuadrado * ladocuadrado;
// console.log("el area del cuadrado es: " + areacuadrada + "cm");
// console.groupEnd();
// //codigo del triangulo

// console.group("Triangulos");

// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 8;
// const alturatriangulo = 5.5;

// console.log("los lados del triangulo miden: " 
// + ladotriangulo1 + "cm, "
// + ladotriangulo2 + "cm, " 
// + basetriangulo + "cm "
// );

// console.log("la altura es de : " + alturatriangulo + "cm" );

// const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
// console.log("el perimetro del triangulo " + perimetroTriangulo + " cm");

// const areatriangulo = (basetriangulo * alturatriangulo) / 2;
// console.log("El area del triangulo es: " + areatriangulo + " cm^2");


// console.groupEnd();

// //codigo circul0

// console.group("circulos");

// //radio
// const radiocirculo = 4;
// console.log("El radio del circulo es " + radiocirculo + " cm");
// //diametro
// const diametrocirculo = radiocirculo * 2;
// console.log("El diametro del circulo es: " + diametrocirculo + "cm");
// //PI
// const PI = Math.PI;
// console.log("PI es igual a:" + PI)
// //circunferencia
// const perimetrocirculo = diametrocirculo * PI
// console.log("La circuferencia es: "+ perimetrocirculo + " cm");
// //area
// const areacirculo = (radiocirculo * radiocirculo) * PI;
// console.log("El area del circulo es: " +areacirculo + "cm^2");
// console.groupEnd();

/////////////////////
////////////////////////////////////////////////////////////////////////////////////
//funciones



//codigo del cuadrado
console.group("Cuadrados");

// const ladocuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado (lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es : " + perimetrocuadrado + "cm/2");

//const areacuadrada = ladocuadrado * ladocuadrado;
function areacuadrado (lado){
return lado * lado;
};


//console.log("el area del cuadrado es: " + areacuadrada + "cm");
console.groupEnd();



//codigo del triangulo

 console.group("Triangulos");

// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 8;
// const alturatriangulo = 5.5;

// console.log("los lados del triangulo miden: " 
// + ladotriangulo1 + "cm, "
// + ladotriangulo2 + "cm, " 
// + basetriangulo + "cm "
// );

//console.log("la altura es de : " + alturatriangulo + "cm" );

function perimetroTriangulo(lado1,lado2,base){
return lado1 + lado2 + base;
} 

//console.log("el perimetro del triangulo " + perimetroTriangulo + " cm");
// function areatriangulo(base,altura){
// return (base * altura) / 2;
// }

function areatriangulo (lado1,lado2,base){
    const sP = (lado1 + lado2 + base) / 2; 
    return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
} 


// function areatriangulo (lado1,lado2,base){
//     const sP = (lado1 + lado2 + base) / 2; 
//     return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
// } 
//const areatriangulo = (basetriangulo * alturatriangulo) / 2;
//console.log("El area del triangulo es: " + areatriangulo + " cm^2");


console.groupEnd();

//codigo circul0

console.group("circulos");

//radio
// const radiocirculo = 4;
// console.log("El radio del circulo es " + radiocirculo + " cm");



//diametro
//const diametrocirculo = radiocirculo * 2;
//console.log("El diametro del circulo es: " + diametrocirculo + "cm");
function diametrocirculo(radiocirculo){
    return radiocirculo * 2;
}
//PI
const PI = Math.PI;
console.log("PI es igual a:" + PI)

//circunferencia
//const perimetrocirculo = diametrocirculo * PI
//console.log("La circuferencia es: "+ perimetrocirculo + " cm");

function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}

//area
//const areacirculo = (radiocirculo * radiocirculo) * PI;
//console.log("El area del circulo es: " +areacirculo + "cm^2");

function areacirculo(radio){
return (radio * radio) * PI;
}

console.groupEnd();





//// Aqui interactuamos con el html con el cuadrado
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro =perimetrocuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area =areacuadrado(value);
    alert(area);
}
///////////////////////////////////////////////////////////////./
////////////////////////////////////////////////////////////////

//Aqui comienza el triangulo en html
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo-b");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTriangulo-c");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}
// Area del triangulo
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo-b");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTriangulo-c");
    const value3 = Number(base.value);
    const area = areatriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}
/////Altura de un Triangulo

function CalculaAlturaTriangulo(){

}

/// Aqui comienzo con el circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro =perimetrocirculo(value);
    alert(perimetro);
}

//calculo del area
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areacirculo(value);
    alert(area);
}


///funcion pendiente por terminar 

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

