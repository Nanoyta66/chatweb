const boton1 = document.querySelector('.sorpresa-1');
const boton2 = document.querySelector('.sorpresa-2');
const boton3 = document.querySelector('.sorpresa-3');
const imagen = document.querySelector('#imagen-sorpresa');

boton1.addEventListener('click', function() {
  imagen.src = 'descarga.jpg';
});

boton2.addEventListener('click', function() {
  imagen.src = 'descarga2.jpg';
});

boton3.addEventListener('click', function() {
  imagen.src = 'descarga3.jpg';
});
