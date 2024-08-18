console.log("ADD TO CART");

let add_to_cart=document.querySelector('.btn');
let title=document.createElement('div');
title.className='hekoojda';

 let text = document.createTextNode('this is my eleemnt click to edit it');
 title.appendChild(text); 

let container = document.querySelector('.add_cart');
container.insertBefore(add_to_cart,title);



add_to_cart.addEventListener('click',function(){
    // title.innerHTML="hrllo"
    console.log("created");
})

console.log(title);