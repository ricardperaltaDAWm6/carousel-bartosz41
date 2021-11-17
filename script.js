window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ["img/img1.jpg","img/img2.jpg","img/img3.jpg"];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.querySelector("#retroceder");
    let $botonAvanzar = document.querySelector("#avanzar");
    let $imagen = document.querySelector("#imagen");
    let $botonPlay = document.querySelector("#play");
    let $botonStop = document.querySelector("#stop");

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        posicionActual = (posicionActual + 1) % IMAGENES.length;
        // se incrementa el indice (posicionActual)
        renderizarImagen();
        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        // se incrementa el indice (posicionActual)
        posicionActual = (posicionActual - 1 + IMAGENES.length) % IMAGENES.length;
        // ...y se muestra la imagen que toca.
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
        intervalo = setInterval(function(){
           pasarFoto(); 
        }, TIEMPO_INTERVALO_MILESIMAS_SEG);

        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.
        $botonPlay.setAttribute("disabled","");
        $botonStop.removeAttribute("disabled");
    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        // Desactivar la ejecución de intervalo.
        clearInterval(intervalo);
        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
        $botonPlay.removeAttribute("disabled");
        $botonStop.setAttribute("disabled","");
    }
        $botonRetroceder.addEventListener('click', function() {
            retrocederFoto()
        })
        $botonAvanzar.addEventListener('click', function() {
            pasarFoto()
        })
        $botonPlay.addEventListener('click', function() {
            playIntervalo()
        })
        $botonStop.addEventListener('click', function() {
            stopIntervalo()
        })
    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.

    // Iniciar
    renderizarImagen();
} 
