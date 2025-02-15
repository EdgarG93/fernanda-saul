// Array de imágenes
const images = [
    "./images/melanie-rosillo-galvan--JNtWQZt_zQ-unsplash.jpg",
    "./images/melanie-rosillo-galvan-K32SzMSVPyM-unsplash.jpg",
    "./images/melanie-rosillo-galvan-kQuoKbcqIdc-unsplash.jpg",
    "./images/melanie-rosillo-galvan-pt9esQ8gklo-unsplash.jpg",
    "./images/melanie-rosillo-galvan-RSM3b6CIWqQ-unsplash.jpg",
    "./images/melanie-rosillo-galvan--JNtWQZt_zQ-unsplash.jpg",
    "./images/melanie-rosillo-galvan-K32SzMSVPyM-unsplash.jpg",
    "./images/melanie-rosillo-galvan-kQuoKbcqIdc-unsplash.jpg",
    "./images/melanie-rosillo-galvan-pt9esQ8gklo-unsplash.jpg",
    "./images/melanie-rosillo-galvan-RSM3b6CIWqQ-unsplash.jpg"

];

// Generar la galería
const galleryContainer = document.getElementById("gallery-container");

for (let i = 0; i < images.length; i += 5) {
    const group = document.createElement("div");
    group.className = "gallery-group";

    // Primera columna (1 imagen grande)
    if (images[i]) {
        const largeItem = document.createElement("a");
        largeItem.href = images[i];
        largeItem.className = "gallery-item large";
        largeItem.innerHTML = `<img src="${images[i]}" alt="Imagen de galería">`;
        group.appendChild(largeItem);
    }

    // Segunda columna (2 imágenes)
    for (let j = 1; j <= 2; j++) {
        if (images[i + j]) {
            const item = document.createElement("a");
            item.href = images[i + j];
            item.className = "gallery-item";
            item.innerHTML = `<img src="${images[i + j]}" alt="Imagen de galería">`;
            group.appendChild(item);
        }
    }

    // Tercera columna (2 imágenes)
    for (let j = 3; j <= 4; j++) {
        if (images[i + j]) {
            const item = document.createElement("a");
            item.href = images[i + j];
            item.className = "gallery-item";
            item.innerHTML = `<img src="${images[i + j]}" alt="Imagen de galería">`;
            group.appendChild(item);
        }
    }

    galleryContainer.appendChild(group);
}

// Activar Magnific Popup
$(document).ready(function () {
    $(".gallery-item").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
        },
    });
});

// Función para desplazar la galería
function scrollGallery(direction) {
    const container = document.getElementById("gallery-container");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}