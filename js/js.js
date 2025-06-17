 // Intentar reproducir el audio cuando la página carga
        window.onload = function() {
            var audio = document.getElementById('sonido');
            
            // Intentar reproducir el audio automáticamente
            audio.play().catch(function(error) {
                console.log("No se pudo reproducir el audio automáticamente:", error);
                
                // Si el navegador bloquea la reproducción automática, pedimos al usuario que haga clic en la página
                alert("Haz clic en cualquier parte de la página para comenzar la música.");

                // Esperar el clic en cualquier parte de la página
                document.body.addEventListener('click', function() {
                    audio.play().then(function() {
                        console.log("Audio iniciado por el usuario.");
                    }).catch(function(err) {
                        console.log("Error al intentar reproducir el audio después del clic:", err);
                    });
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