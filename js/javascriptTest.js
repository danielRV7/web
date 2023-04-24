const boton = document.querySelector(".botonLike");
let likeIcon = document.querySelector("#icon")
let count = document.querySelector("#count")

let clicked = false;

boton.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent++;
    } else {
        clicked = false
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent--;
    }

});

let etiqueta = document.querySelector("#visitantes")

import rn from 'random-number';
var options = {
    min:  1000, max:  1700, integer: true
}

etiqueta.innerHTML = rn(options);







