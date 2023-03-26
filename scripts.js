const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

/*seleccionamos todos los botones*/
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');

/*instancia de la clase Display*/
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => {
    /*Cada vez que pulsan un botón se agrega su contenido del html*/
    display.agregarNumero(boton.innerHTML);
  });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
    /*Cada vez que se pulsa un boton con un operador se pasa por parametro el value del botón*/
        display.computar(boton.value)
    })
})