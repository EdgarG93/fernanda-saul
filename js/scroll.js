//Animaciones de scroll hacia abajo
AOS.init({
    duration: 1000,  // Duración de la animación
    once: true,      // La animación solo se ejecuta una vez al hacer scroll
});

//Scroll a inicio
document.querySelector('.go-top').addEventListener('click', function () {
    const duration = 1500; // Duración del desplazamiento en milisegundos (ajusta a tu gusto)
    const start = window.scrollY;
    const end = 0;
    const startTime = performance.now();

    function animateScroll() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    animateScroll();
});