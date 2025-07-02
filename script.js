let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


let valorSpan=document.querySelector(".valor-total");
valorSpan.innerHTML=precio;

 let cantidadInicial=document.querySelector('.cantidad');

function suma() {
    let cantidadFinal= Number(cantidadInicial.innerHTML)+1;
    cantidadInicial.innerHTML=cantidadFinal;
    valorSpan.innerHTML=precio*cantidadFinal;
}

function resta() {
    let cantidadFinal= Number(cantidadInicial.innerHTML)-1;
    if(cantidadFinal>=0){
    cantidadInicial.innerHTML=cantidadFinal;
    valorSpan.innerHTML=cantidadFinal*precio;
}
}
