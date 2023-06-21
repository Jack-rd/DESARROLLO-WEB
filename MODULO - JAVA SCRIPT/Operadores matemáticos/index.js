////////////////////////////////
// operaciones matematicas
////////////////////////////////

const suma = 3 + 6
const resta = 10 - 1
const multiplicar = 3 * 3
const division = 81/9
const modulo = 20%11

//console.log(suma, resta, multiplicar, division, modulo);

let num = 5
//console.log(num);

// Incremento +1
num++
//console.log(num);

// Decremento -1
num--
//console.log(num);

// Operaciones en marcha (sobre la variable)

let numero = 6
//console.log('Primer Valor: ', numero);

numero += 3
//console.log('Segundo Valor: ', numero);

numero -= 8
//console.log('Tercer Valor: ', numero);

numero /= 2
//console.log('Cuarto Valor: ', numero);

numero *= 12
//console.log('Quinto Valor: ', numero);


///////////////////////////////
// Operadores de comparacion
///////////////////////////////

const resultado1 = 5 === 6
//console.log('La comparacion es: ',resultado1); //-> False


//////////////////////////////////////////
// Comparador de la doble igualdad (==) //
// strings pueden ser iguales a números //
// si el valor es el mismo.             //
//////////////////////////////////////////

const resultado2 = 5 == '5'
//console.log('La comparacion es: ',resultado2); //-> True

//////////////////////////////////////////
// Comparador de la Triple igualdad (===) //
//////////////////////////////////////////

const resultado3 = 5 === '5'
//console.log('La comparacion es: ',resultado3); //-> False


const resultado4 = 5 < 6;
//console.log(resultado4);

const resultado5 = 5 > 6;
//console.log(resultado5);

const resultado6 = 5 >= 5;
//console.log(resultado6);

const resultado7 = 5 !== '5';
//console.log(resultado7);

const resultado8 = 5 != '5';
//console.log(resultado8);

////////////////////////////////////////
// Comparadores Logicos
////////////////////////////////////////
// or ||, and &&, not !
////////////////////////////////////////

const resultadoOr = false || false || false || true;   // 1 or 0 or 0 -> 1 // 1 and 1 -> 1 // 0 and 0 -> 0
//console.log(resultadoOr);

const resultadoAnd = false && true && true; // 1 and 1 and 0 -> 0 // 1 and 1 -> 1 // 0 and 0 -> 0
//console.log(resultadoAnd);

const resultadoNot = !true;
//console.log(resultadoNot);


////////////////////////////////////////
//         Controles de flujo         //
////////////////////////////////////////

// if ----------------------------------------------------------------

if (true){
    //console.log('estoy dentro del if');
}

let edad = 1;

if (edad > 7 && edad < 15)
{
    //console.log('Eres un niño');
}else{
    //console.log('Usted no es un niño');
}

// while --------------------------------------------------------------

let x = 0, y =10;
//console.log('Conteo de ', x, ' hasta ', y);
while (x <= y) 
{
    //console.log('El valor es: ', x, 'de ', y);
    x++;
}
//console.log('Final del loop');


// Switch --------------------------------------------------------------


switch  (0) {
    
    case 1:{
        console.log('soy el 1er caso');
        break;
    }
    case 2:{
        console.log('soy el 2do caso');
        break;
    }
    case 3:{
        console.log('soy el 3er caso');
        break;
    }
    default:{
        console.log('soy el caso por defecto');
        break;
    }
}
    
    
for (let i = 0; i <= 9; i++)
{
    console.log(i);
}