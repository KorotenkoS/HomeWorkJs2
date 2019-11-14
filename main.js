'use strict'

var arr = []

var inputWnd = document.querySelector('#vvod-pole');

var btnInput = document.querySelector('#vvod-knopka');

var btnDellet = document.querySelector('#vvod-delete');

var posting = document.querySelector('#posts-list')

btnInput.onclick = send;

btnDellet.onclick = delAll

inputWnd.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        // можете делать все что угодно со значением текстового поля
        send();
    }
});

function send() {
    if (inputWnd.value) {
        arr.push(inputWnd.value)
        inputWnd.value = ""
        console.log(arr);
        render();
    } else(
        alert("Напиши чего-нибудь, а потом жми!")
    )
};

function delAll() {
    arr = [];
    console.log(arr);
    render();
};

function render() {
    var html = '';
    for (var value of arr) {
        html += `<li>${value}</li>`
    };
    posting.innerHTML = html;
};