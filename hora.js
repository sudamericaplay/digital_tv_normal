/**
 * Hora actual de Argentina en tiempo real.
 * Zona horaria: America/Argentina/Buenos_Aires
 */

(function () {
    "use strict";

    const TIME_ZONE = "America/Argentina/Buenos_Aires";

    /**
     * Devuelve la fecha y hora actual de Argentina.
     */
    function obtenerHoraArgentina() {
        return new Intl.DateTimeFormat("es-AR", {
            timeZone: TIME_ZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).format(new Date());
    }

    /**
     * Muestra la hora dentro de un elemento HTML.
     *
     * Ejemplo:
     * <div id="hora-argentina"></div>
     */
    function iniciarRelojArgentina(elementoId = "hora-argentina") {
        const elemento = document.getElementById(elementoId);

        if (!elemento) {
            console.error(
                `No se encontró un elemento con el ID "${elementoId}".`
            );
            return null;
        }

        function actualizar() {
            elemento.textContent = obtenerHoraArgentina();
        }

        actualizar();

        return setInterval(actualizar, 1000);
    }

    // Disponible globalmente para usarlo desde cualquier página.
    window.obtenerHoraArgentina = obtenerHoraArgentina;
    window.iniciarRelojArgentina = iniciarRelojArgentina;

    // Inicia automáticamente cuando encuentra el elemento.
    document.addEventListener("DOMContentLoaded", function () {
        if (document.getElementById("hora-argentina")) {
            iniciarRelojArgentina("hora-argentina");
        }
    });
})();
