document.addEventListener("DOMContentLoaded", function () {
    // Cuenta regresiva
    function countdown() {
        var eventDate = new Date("2025-12-15T00:00:00").getTime();
        var now = new Date().getTime();
        var distance = eventDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('clock').innerHTML = "<div class='col-2'>" + days + "</div><div class='col-2'>" + hours + "</div><div class='col-2'>" + minutes + "</div><div class='col-2'>" + seconds + "</div>";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('clock').innerText = "¡El evento ha comenzado!";
        }
    }

    var x = setInterval(countdown, 1000);
});