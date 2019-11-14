'use strict'

var arr = []

var inputWnd = document.querySelector('#vvod-pole');

var btnInput = document.querySelector('#vvod-knopka');

var btnDellet = document.querySelector('#vvod-delete');

btnInput.onclick = send;

function send(arr) {
    for (var data = {
            dannie: inputWnd.value,
        }
        arr.push(data)
    ) { console.log(arr); }
};