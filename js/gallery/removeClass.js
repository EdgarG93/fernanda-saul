function removeClass() {
    if (window.innerWidth <= 600) {
        //Eliminar clase large
        document.querySelectorAll('.gallery-item.large').forEach(item => {
            item.classList.remove('large');
        });
        // Eliminar los contenedores 'gallery-group'
        document.querySelectorAll('.gallery-group').forEach(group => {
            while (group.firstChild) {
                // Mueve los elementos hijos del grupo a su contenedor padre
                group.parentNode.insertBefore(group.firstChild, group);
            }
            group.remove(); // Luego elimina el grupo vacío
        });
    }
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', removeClass);

// Ejecutar cuando la pantalla cambie de tamaño
window.addEventListener('resize', removeClass);