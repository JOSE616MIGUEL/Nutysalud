window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Obtener todas las secciones de la página
    var sections = document.querySelectorAll('section');

    // Iterar sobre las secciones para encontrar la que está actualmente visible
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100; // ajusta el valor según sea necesario para el diseño de tu página
        var sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            // Si la sección está visible, actualiza el enlace de navegación correspondiente a "active"
            var id = section.getAttribute('id');
            var navLink = document.querySelector('a[href="#' + id + '"]');
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});
