//evento que se dispara cuando el documento HTML inicial ha sido completamente cargado y analizado
document.addEventListener('DOMContentLoaded', function() { 
    const aboutUsLink = document.getElementById('link');
    const logoSection = document.getElementById('logoSection');
    const homeSection = document.getElementById('homeSection');
    const menuSection = document.getElementById('historias');
    //Devuelve el primer elemento del documento que coincida con lo indicado
    const footer = document.querySelector('footer'); 

    aboutUsLink.addEventListener('click', function(e) {
        // Evita la navegación a la URL
        e.preventDefault();

        // Mostrar todas las secciones
        logoSection.style.display = 'none'; //oculta la secciones
        homeSection.style.display = 'flex';
        menuSection.style.display = 'block';
        footer.style.display = 'block';

        // Desplazar  verticalmente hacia la sección de historias
        window.scrollTo(0, menuSection.offsetTop); //es el objeto global que representa la ventana del navegador 
    });
});