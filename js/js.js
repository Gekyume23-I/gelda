// Carrusel de imágenes
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Función para mostrar la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configurar el intervalo para cambiar la imagen cada 3 segundos
setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos

// Mostrar frases con animación
let fraseIndex = 0;
const frases = document.querySelectorAll('.frases p');

// Función para mostrar frases
function showFrase() {
    frases[fraseIndex].style.display = 'block';
    frases[fraseIndex].style.animation = 'showFrases 5s ease-in-out';
    fraseIndex = (fraseIndex + 1) % frases.length;

    setTimeout(() => {
        frases[fraseIndex].style.display = 'none';
    }, 5000); // Mostrar frase por 5 segundos
}

// Cambiar de frase cada 7 segundos
setInterval(showFrase, 7000);
