'use strict'

var arr = ['jkjws', 'hjhkhk']

var btnInput = document.querySelector('#render-input');
    
var btnDellet = document.querySelector('#render-delete');

var container = document.querySelector('#post-lists');

var html = '';

for(var post of arr){
    html += `<li> post </li>`
};

container.innerHTML = html;
/*
function format(response) {
   return response.json()
}

function render1(arr) {
    var html = ''
    for(var post of arr){
        html += `<li>${post}</li>`
    }
return html; 
}



// arr.push = 'vasa';
//function posts_to_arr() {
//    var post = document.querySelector("render-input");
//        arr.push = post;
//}


console.log(arr)
*/