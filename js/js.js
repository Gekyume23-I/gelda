let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Mostrar la siguiente imagen
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems; // Esto asegura que el índice se quede dentro de los límites
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configurar las frases
let fraseIndex = 0;
const frases = document.querySelectorAll('.frases p');

// Mostrar frases con animación
function showFrase() {
    frases[fraseIndex].style.display = 'block';
    frases[fraseIndex].style.animation = 'showFrases 5s ease-in-out';
    fraseIndex = (fraseIndex + 1) % frases.length;

    setTimeout(() => {
        frases[fraseIndex].style.display = 'none';
    }, 5000); // Mostrar frase por 5 segundos
}

// Cambiar de frase cada 7 segundos
setInterval(showFrase, 5000);
