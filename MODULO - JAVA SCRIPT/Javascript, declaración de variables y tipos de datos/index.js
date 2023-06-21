console.log('Hola Mundo');

// Tipos de datos en JS
// ----------------
// String: Cadena de caracteres
// Boolean: true & false
// Null: Nulo
// Number: 123
// undefined: no ha sido definida
// Object: Objeto para crear estructuras
//
// ----------------------------------------------------------------
//
// Definicion de variables
// var
// let
// const
//


// var miPrimeraVariable = 'LAla'

let miPrimeraVariable = 'Mi Primera Variable'
//console.log(miPrimeraVariable);

// Mutabilidad de variables
miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

// Boolean
let miBoolean = true
let miOtroBoolean = false

// Numbers
let miNumero1 = 0
let miNumero2 = 12
let miNumero3 = -256

//console.log(miNumero1, miNumero2, miNumero3, miBoolean, miPrimeraVariable)

let undef
//console.log(undef);

let nulo = null
//console.log(nulo);

////////////////////////////////
//          Objetos             
////////////////////////////////

// Objeto vacio
const miPrimerObjeto = { }

// Objeto: es una agrupacion de datos que hace sentido entre si //////////////////////////////////
const MiObjeto = { 
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}

// console.log(MiObjeto);
// console.log(MiObjeto.unNumero);
// console.log(MiObjeto.unaCondicion);
// console.log(MiObjeto.unString);

////////////////////////////////
//          Arreglos
////////////////////////////////

const arrVacio = []
const arreglo = [1, 2, 'Hola', 'Mundo', MiObjeto]

// .Push(*) -> para agregar nuevo elemento al arreglo
arreglo.push(5);
arrVacio.push(5);
arrVacio.push(3);
arrVacio.push(1);
arrVacio.push('Hola');
arrVacio.push(arreglo);


console.log(arrVacio);