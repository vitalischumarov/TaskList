'use strict'

const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const input = document.getElementById('textInput');

addBtn.addEventListener('click', function() {
    if (input.value == '') {
        alert('input is missing');
    }
})