
// document.getElementById => Para buscar el elemento a partir de el ID

const parrafo = document.getElementById("text");

// .innerText || .innerHTML => extrae el text dentro del elemento html
console.log(parrafo.innerHTML);

// con .innerText tambien podemos modificar el text
parrafo.innerHTML = 'Texto actualizado';

const parrafo2 = document.getElementById("text2");

parrafo2.innerHTML = '<li>modificacion 1</li><li>modificacion 2</li>';



