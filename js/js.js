        // Esperamos que la página esté completamente cargada para reproducir el audio
        window.onload = function() {
            var audio = document.getElementById('sonido');
            
            // Intentamos reproducir el audio
            audio.play().catch(function(error) {
                console.log("No se pudo reproducir el audio automáticamente:", error);
                
                // Si no puede reproducirse automáticamente, pedimos al usuario que haga clic para activarlo
                document.body.addEventListener('click', function() {
                    audio.play();
                    console.log("Audio iniciado por el usuario.");
                });
            });
        };

        // Configuración del carrusel de imágenes
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        // Función para mostrar la siguiente imagen
        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + totalItems) % totalItems; // Esto asegura que el índice se quede dentro de los límites
            document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Configuración de las frases
        let fraseIndex = 0;
        const frases = document.querySelectorAll('.frases p');

        // Función para mostrar frases con animación
        function showFrase() {
            // Ocultar todas las frases
            frases.forEach(frase => {
                frase.style.display = 'none';
            });

            // Mostrar la siguiente frase con animación
            frases[fraseIndex].style.display = 'block';
            frases[fraseIndex].style.animation = 'showFrases 5s ease-in-out';
            
            // Incrementar el índice para la siguiente frase
            fraseIndex = (fraseIndex + 1) % frases.length;
        }

        // Cambiar de frase cada 7 segundos
        setInterval(showFrase, 7000);

        // Inicializar la primera frase
        showFrase();