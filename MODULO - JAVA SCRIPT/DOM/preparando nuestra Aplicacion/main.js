// 7.Para tener acceso desde un espacio en memoria 
const todos = [];

window.onload = () => {
    // 1.tomamos el formulario a travez de su id
    const form = document.getElementById('todo-form');
    // 2.Remplazamos la funcion (onsubmit)
    form.onsubmit = (e) => {

        // 3.Llamamos la funcion preventDefault, para evitar que se refresque la pagina
        e.preventDefault();
        
        // 4.Vomos al campo todo y extraemos su valor
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        
        // 5.Limpiamos el campo
        todo.value = '';
        
        // 6.Imprimimos el valor extraido, en consola
        //console.log(todoText);
        
        // 7.mirar linea 1
        todos.push(todoText);

        // 8.buscamos todoList a partir de su id
        const todoList = document.getElementById('todo-list');

        // 9. eliminamos el innerhtml del todoList, para que no haya redundancia
        todoList.innerHTML= '';

        // 10.Llenamis el listado, con nuestro arreglo
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }
    }
}