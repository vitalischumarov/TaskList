'use strict'

const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const input = document.getElementById('textInput');
const allTaskDiv = document.getElementById('allTasks');

// within this array, I store all tasks and render them out of this array
let allTasksArray = [];

addBtn.addEventListener('click', function() {
    if (input.value == '') {
        alert('input is missing');
    } else {
        allTasksArray.push(createElement());
        displayElement();
    }
})

removeBtn.addEventListener('click', function() {
    removeAllTasks();
})

// it creates a task element
function createElement() {
    const div = document.createElement('div');
    div.setAttribute('class','taskDiv');
    div.addEventListener('click', function() {
        // select a task which was clicked
        
        selectTask(div);
    })
    const span = document.createElement('span');
    const textNode = document.createTextNode(input.value);
    span.appendChild(textNode);
    div.appendChild(span);
    return div;
}

// with this function I display each task on the display
function displayElement() {
    allTasksArray.forEach(function(e) {
        allTaskDiv.appendChild(e);
    })
}

function removeAllTasks() {
    let myTasks = document.querySelectorAll('.taskDiv');
    myTasks.forEach(function(element) {
        element.remove();
    })
    allTasksArray = [];
}

function selectTask(div) {
    div.remove();
}