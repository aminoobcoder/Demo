
let addTodoButton = document.getElementById('addText');
let toDoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

function myFunction(){

    var paragraph = document.createElement('p');

    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);

    inputField.value = null;


}