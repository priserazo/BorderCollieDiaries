const carrusel = document.getElementById("contDeImg");
const carruselBotonIzquierda =
    document.getElementById("carruselBotonIzquierda");
const carruselBotonDerecha =
    document.getElementById("carruselBotonDerecha");

const totalImagenes = carrusel.querySelectorAll(".deslizar").length;

let posicion = 0;

function moverCarrusel() {
    carrusel.style.transform =
        `translateX(-${posicion * 100}%)`;
}

carruselBotonDerecha.addEventListener("click", () => {
    if (posicion < totalImagenes - 1) {
        posicion++;
    } else {
        posicion = 0;
    }

    moverCarrusel();
});

carruselBotonIzquierda.addEventListener("click", () => {
    if (posicion > 0) {
        posicion--;
    } else {
        posicion = totalImagenes - 1;
    }

    moverCarrusel();
});

setInterval(() => {
    if (posicion < totalImagenes - 1) {
        posicion++;
    } else {
        posicion = 0;
    }

    moverCarrusel();
}, 4000);
