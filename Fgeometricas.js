//codigo cuadrado
console.group("Cuadrados");
//const ladoCuadrado  = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm")


function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es:" + perimetroCuadrado +"cm")


//const areaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrada (lado){
    return lado * lado;
}
//console.log("El area cuadrada es " + areaCuadrada + "cm^2")
console.groupEnd();


// codigo triangulo//
console.group("triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triangulo miden: "
//      + ladoTriangulo1 + "cm,"
//     + ladoTriangulo2 + "cm,"
//     + baseTriangulo + "cm"
//     );

    //const alturaTriangulo = 5.5;
    //console.log("La altura del triangulo es:" + alturaTriangulo +"cm")

    //const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    //console.log("El perimetro del triangulo es " + perimetroTriangulo)
    function perimetroTriangulo (lado1,lado2,base){
        return lado1 + lado2 + base;
    }

    function areatriangulo (lado1,lado2,base){
        const sP = (lado1 + lado2 + base) / 2; 
        return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
    } 
    

    //const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
    //console.log("El area del triangulo es " + areaTriangulo)
// function areaTriangulo (base,altura){
//     return (base * altura) / 2 ;
// }
console.groupEnd();


///codigo circulo

console.group("circulo");

   // const radioCirculo = 4;
    //console.log("El radio del circulo es:" + radioCirculo +"cm")
    function radioCirculo(radio){
     return radio;
    }

    //const diametroCirculo = radioCirculo * 2;
    //console.log("El diametro del circulo es " + diametroCirculo)
    function diametroCirculo(radio){
        return radio * 2;
    }

    // const PI = Math.PI ;
    // console.log("PI es " + PI)

    //const perimetroCirculo = diametroCirculo * PI;
   // console.log("El diametro del circulo es " + perimetroCirculo)
   function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * 3.1416;
   }

    //const areaCirculo = (radioCirculo * radioCirculo) * PI;
    //console.log("El area del circulo es " + areaCirculo + "cm^2")
    function areaCirculo (radio){
     return (radio * radio) * 3.1416;
    }
    console.groupEnd();

//Aqui interactuo con HTML con cuadrado

    

    function  calcularperimetrocuadrado(){
        const input = document.getElementById("input-cuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }

    function calcularareacuadrada(){
        const input = document.getElementById("input-cuadrado");
        const value = input.value;

        const area = areaCuadrada(value);
        alert(area);
    };

    //Aqui comienza HTML con circulo

    function calcularareacirculo(){
        const input = document.getElementById("input-circulo");
        const value = input.value;
        const area = areaCirculo(value);
        alert(area);


    }

    function calcularperimetrocirculo(){
        const input = document.getElementById("input-circulo");
        const value = input.value;

        const perimetro = perimetroCirculo(value);
        alert(perimetro);

    }

    // function calcularperimetro(){
    //     const input = document.getElementById("input-trianguloA");
    //     const value = input.value;

    //     const perimetro = perimetroTriangulo(value);
    //     alert(perimetro);
    // }

    function calcularperimetro(){
        const input1 = document.getElementById("input-trianguloA");
        const value1 = Number(input1.value);
        const input2 = document.getElementById("input-trianguloB");
        const value2 = Number(input2.value);
        const base = document.getElementById("input-trianguloBase");
        const value3 = Number(base.value);
        const perimetro = perimetroTriangulo(value1,value2,value3);
        alert("El area del triangulo es: " + perimetro);
    }

  

    function calculararea(){
        const input1 = document.getElementById("input-trianguloA");
        const value1 = Number(input1.value);

        const input2 = document.getElementById("input-trianguloB");
        const value2 = Number(input2.value);

        const base = document.getElementById("input-trianguloBase");
        const value3 = Number(base.value);

        const area = areatriangulo(value1,value2,value3);
        alert("El area del triangulo es: " + area);
    }