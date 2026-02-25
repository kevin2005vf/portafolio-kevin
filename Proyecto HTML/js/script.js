const imagenes = document.querySelectorAll(".carrusel img");
const dots = document.querySelectorAll(".dots span");
let index = 0;

function actualizarCarrusel() {
    imagenes.forEach(img => img.classList.remove("activo"));
    dots.forEach(dot => dot.classList.remove("activo"));

    imagenes[index].classList.add("activo");
    dots[index].classList.add("activo");
}

function siguiente() {
    index = (index + 1) % imagenes.length;
    actualizarCarrusel();
}

function anterior() {
    index = (index - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
}

function mostrar(i) {
    index = i;
    actualizarCarrusel();
}

actualizarCarrusel();