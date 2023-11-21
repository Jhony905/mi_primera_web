//alert("Hola este es mi Javascript");

//let nombre = "Jhon";

//var nombre1 = "Joel";

//const nombre2 = "Isaac";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//CONDICIONALES

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".Titulo");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
}

// FUNCIONES

let nombre = "Jhonnatan";
let ciudad = "Galapa-Colombia";
let profesion = "Ingeniero Mecatronico";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, profesion) {
    let contenido = `Me llamo ${nombre} Barros, vivo en ${ciudad}. Soy ${profesion} y 
    Me gusta todo lo relacionado con la tecnologia. Estoy aprendiendo a programar para 
    desarrollos y mejores oportunidades`;
    return contenido;
    
}

parrafo.innerText = cambiarTexto(nombre, ciudad, profesion);