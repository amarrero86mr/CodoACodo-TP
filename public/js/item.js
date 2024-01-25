const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

const quantity = document.querySelector('#quantity');

add.addEventListener('click', () => quantity.value = parseInt(quantity.value) + 1);

subtract.addEventListener('click', () =>{
    if (parseInt(quantity.value) > 0){
        quantity.value = parseInt(quantity.value) - 1
    }
});