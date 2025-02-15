function adjustGalleryLayout() {
    const galleryContainer = document.getElementById('gallery-container');

    if (window.innerWidth <= 600) {
        galleryContainer.classList.add('masonry-layout');

        // Ajustar la altura de los elementos en el layout masonry
        const galleryItems = galleryContainer.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            img.addEventListener('load', function () {
                const rowHeight = 5;
                const rowSpan = Math.ceil((img.naturalHeight / img.naturalWidth) * (item.offsetWidth / rowHeight));
                item.style.gridRowEnd = 'span ' + rowSpan;
            });
        });
    } else {
        galleryContainer.classList.remove('masonry-layout');
        // Restablecer estilos para pantallas grandes
        galleryContainer.querySelectorAll('.gallery-item').forEach(item => {
            item.style.gridRowEnd = '';
        });
    }
}

window.addEventListener('load', adjustGalleryLayout);
window.addEventListener('resize', adjustGalleryLayout);