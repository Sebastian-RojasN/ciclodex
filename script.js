document.addEventListener("DOMContentLoaded", function () {
    var mainContent = document.querySelectorAll('.main-content');

    window.addEventListener('scroll', function () {
        mainContent.forEach(function (content) {
            if (window.scrollY > content.offsetTop - window.innerHeight / 2) {
                content.classList.add('visible');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var title = document.querySelector('.custom-font-title');
    var mujer = document.querySelector('.mujer-locion');
    var firstSection = document.querySelector('.header-container');

    window.addEventListener('scroll', function () {
        var factor = 0.001;
        var opacity = 1 - (window.scrollY * factor);
        opacity = Math.min(1, Math.max(0, opacity));
        title.style.opacity = opacity.toFixed(2);
        mujer.style.opacity = opacity.toFixed(2);
        firstSection.style.opacity = opacity.toFixed(2);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var planta = document.querySelector('.planta');

    window.addEventListener('scroll', function () {
        var scrollValue = window.scrollY;
        var translateY = scrollValue * 0.5; // Ajusta el factor según tus preferencias
        var translateX = -scrollValue * 0.3; // Invertir el signo para mover hacia la izquierda

        planta.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var planta = document.querySelector('.forearm');

    window.addEventListener('scroll', function () {
        var scrollValue = window.scrollY;
        var translateY = scrollValue * 0.5; // Ajusta el factor según tus preferencias
        var translateX = -scrollValue * 0.3; // Invertir el signo para mover hacia la izquierda

        planta.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Establecer el tiempo de cuenta regresiva en segundos
    var tiempoRegresivo = 15;
  
    // Actualizar el contador cada segundo
    var intervalo = setInterval(actualizarContador, 1000);
  
    function actualizarContador() {
      // Reducir el tiempo restante
      tiempoRegresivo--;
  
      // Mostrar el contador en el elemento con el id "contador"
      document.getElementById('contador').innerHTML = tiempoRegresivo ;
  
      // Reiniciar el contador cuando llega a cero
      if (tiempoRegresivo <= 0) {
        tiempoRegresivo = 15;
      }
    }
  });
  
  

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        let headerImage = document.querySelector('.custom-header-container img');
        let mainContentImages = document.querySelectorAll('.custom-main-content img.graficos');

        // Mueve la imagen y el texto al hacer scroll en la primera sección
        headerImage.style.transform = 'translateX(' + (-scrollPosition / 2) + 'px)';
        
        mainContentImages.forEach(function (image) {
            // Mueve las imágenes en la sección de contenido principal al hacer scroll
            let offset = image.getBoundingClientRect().top + scrollPosition - window.innerHeight;
            if (offset < 0) {
                image.style.transform = 'translateX(' + (-offset / 2) + 'px)';
            }
        });
    });
});
