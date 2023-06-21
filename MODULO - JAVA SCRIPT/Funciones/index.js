///////////////////////////////////////
// Introduccion a Funciones
// -------------------------------------

function iterar(arg1){
    for (let i = 0; i < arg1.length; i++)
    {
        console.log(arg1[i]);
    }
}

const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const numeros = [1,2,3,4,5,6,7,8,9,10]

//iterar(numeros);
//iterar(meses);

// ----------------------------------------------------------------
// Más funciones
///////////////////////////////////////////////////////////////////

//------------------------------- 
// return

function sumar(a, b){
    return a + b;  
}

const resultadoSuma1 = sumar(1,9);
const resultadoSuma2 = sumar(10,5);
const resultadoSuma3 = sumar(resultadoSuma1, resultadoSuma2);

//console.log('resultado ', resultadoSuma3);




////////////////////////////////////////////////////////////////
// Callback
////////////////////////////////////////////////////////////////

function sumando(a, b, cb){
    r = a + b
    cb(r)
}

function callback(r) {
    //console.log('resultado: ',r);
}
sumando(1,8,callback);





///////////////////////////////////////////////////////////////////
// Fat Arrow Functions
///////////////////////////////////////////////////////////////////

// resultado 1 (Implícito) => Para menos de una linea de codigo
const miFatArrowFunction = (a, b) => a + b
// Asignacion de la constante con la llamada del metodo, 
// con sus respectivos parametros. 
const r1 = miFatArrowFunction(1,9);

// resultado 2 (explícito) => para mas de una linea de codigo
const otraFAF = (a, b) => {
    return a + b;
}
const r2 = otraFAF(10,10);

// Impresión de r1
console.log(r1);

// Impresión de r2
console.log(r2);





///////////////////////////////////////////////////////////////////
// Funciones Anonymous
///////////////////////////////////////////////////////////////////

sumando(2, 3, function (r) {
    console.log('Soy una Funcion Anonima y mi resultado es', r);
})