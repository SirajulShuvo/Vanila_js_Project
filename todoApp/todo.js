// select Item
let textInput = document.getElementById('textInput');
let submitInput = document.getElementById('submitInput');
let incompleteTask = document.getElementById('inTask');
let completeTask = document.getElementById('comTask');

// itemCreate
let listItem = document.createElement('li');
// let btn = document.createElement('button');
let listItemDiv = document.createElement('div');


function addText(){
    let values = textInput.value;
    listItem.innerHTML = values;
    listItemDiv.appendChild(listItem);
    incompleteTask.appendChild(listItemDiv);
}

submitInput.addEventListener('click',(e) =>{
    addText();
})