
(function () {
    "use strict";

    const ZONA_ARGENTINA = "America/Argentina/Buenos_Aires";

    function obtenerHoraArgentina() {
        return new Intl.DateTimeFormat("es-AR", {
            timeZone: ZONA_ARGENTINA,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).format(new Date());
    }

    function obtenerFechaArgentina() {
        return new Intl.DateTimeFormat("es-AR", {
            timeZone: ZONA_ARGENTINA,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(new Date());
    }

    function iniciarHoraArgentina(elementoId = "hora-argentina") {
        const elemento = document.getElementById(elementoId);

        if (!elemento) {
            console.error(`No existe un elemento con id="${elementoId}"`);
            return;
        }

        function actualizarHora() {
            elemento.innerHTML = `
                <div class="fecha-argentina">${obtenerFechaArgentina()}</div>
                <div class="reloj-argentina">${obtenerHoraArgentina()}</div>
            `;
        }

        actualizarHora();
        setInterval(actualizarHora, 1000);
    }

    window.obtenerHoraArgentina = obtenerHoraArgentina;
    window.iniciarHoraArgentina = iniciarHoraArgentina;

    function iniciarAutomaticamente() {
        const elemento = document.getElementById("hora-argentina");

        if (elemento) {
            iniciarHoraArgentina("hora-argentina");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarAutomaticamente);
    } else {
        iniciarAutomaticamente();
    }
})();
