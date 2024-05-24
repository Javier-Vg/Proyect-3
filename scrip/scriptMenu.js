document.addEventListener("DOMContentLoaded", function() {
    let Sonido = document.getElementById('botonSonido');
    let Audio = document.getElementById('Audio');
    
    Sonido.addEventListener('click', function() {
        if (Audio.paused) {
            Audio.play();
            Sonido.textContent = 'Desactivar Musica';
        } else {
            Audio.pause();
            Sonido.textContent = 'Activar Musica';
        }
    });
});


