const ojo = document.getElementById("ojo");
const sobreMi = document.getElementById("sobreMi");
const contenedor2 = document.querySelector(".contenedor2");

// pa cuando pasa la rata 
ojo.addEventListener("mouseover", function() {
    this.style.opacity = "0";
    sobreMi.classList.remove("hidden");
});

// pa salir
contenedor2.addEventListener("mouseleave", function() {
    ojo.style.opacity = "1";
    sobreMi.classList.add("hidden");
});



