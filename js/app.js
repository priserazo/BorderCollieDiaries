document.addEventListener("DOMContentLoaded", () => {

    /* HAMBURGER MENU */

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const menuIsOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(menuIsOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                menuIsOpen ? "Cerrar menú" : "Abrir menú"
            );

            menuToggle.textContent = menuIsOpen ? "✕" : "☰";
        });

        const navLinks = navMenu.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

                menuToggle.textContent = "☰";
            });
        });
    }


    /* CAROUSEL */

    const carrusel = document.getElementById("contDeImg");

    const carruselBotonIzquierda =
        document.getElementById("carruselBotonIzquierda");

    const carruselBotonDerecha =
        document.getElementById("carruselBotonDerecha");

    if (
        carrusel &&
        carruselBotonIzquierda &&
        carruselBotonDerecha
    ) {
        const totalImagenes =
            carrusel.querySelectorAll(".slide").length;

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
    }

});
