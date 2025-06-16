const links = document.querySelectorAll('#menu a');
const foto = document.getElementById('foto');
const sonido = document.getElementById('sonido');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const nuevaFoto = link.getAttribute('data-foto');
    const nuevoSonido = link.getAttribute('data-sonido');

    // Cambiar imagen y hacer fade-in
    foto.classList.remove('visible'); // para reiniciar fade-in
    sonido.pause();
    sonido.currentTime = 0;

    setTimeout(() => {
      foto.src = nuevaFoto;
      foto.classList.add('visible');
    }, 100);

    // Reproducir sonido
    sonido.src = nuevoSonido;
    sonido.play();
  });
});
