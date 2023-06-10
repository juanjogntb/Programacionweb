let total=0;
let producto = "";
let numprod = 0;
window.onload = function inicial(){
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('contacto').style.display = 'none';
    document.getElementById('carrito').style.display = 'none';
    let total = 0;
    let producto = "";
}

function mostrar1(){
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('contacto').style.display = 'none';
    document.getElementById('carrito').style.display = 'none';
}

function mostrar2(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('contacto').style.display = 'block';
    document.getElementById('carrito').style.display = 'none';
}

function mostrar3(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
    document.getElementById('carrito').style.display = 'block';
}



function agregar(var1,var2){
    total = var1+total;    
    producto = var2+" - "+producto;
    numprod= 1+numprod;
    var contenido = document.getElementById("contenido").innerText = "El valor total de tus productos es: "+total;
    var contenido2 = document.getElementById("contenido2").innerText = "Los productos actuales que llevas son: "+producto;
    var contenido = document.getElementById("contenido3").innerText = "El total de productos es: "+numprod;
}

function pagar() {
    var win = window.open('https://www.paypal.com/co/home');
    win.focus();
}



