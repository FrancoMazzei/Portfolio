document.addEventListener("DOMContentLoaded", function() {
    const leerMas = document.querySelector(".leer-mas");
    const modal = document.getElementById("modal-biografia");
    const cerrarModal = document.querySelector(".cerrar-modal");

    leerMas.addEventListener("click", function() {
        modal.style.display = "block";
    });

    cerrarModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});