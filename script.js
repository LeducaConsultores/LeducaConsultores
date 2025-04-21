document.addEventListener('DOMContentLoaded', () => {
    // Manejo de la navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    // Mostrar una sección y marcar como activa
    function showSection(sectionId) {
      // Ocultar todas las secciones
      sections.forEach(section => {
        section.classList.remove('active');
      });
  
      // Mostrar solo la sección seleccionada
      const sectionToShow = document.getElementById(sectionId);
      if (sectionToShow) {
        sectionToShow.classList.add('active');
      }
  
      // Actualizar clases activas en el menú
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  
    // Click en los enlaces de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1); // Quita el '#'
        showSection(sectionId);
        scrollToSection(sectionId);
      });
    });
  
    // Scroll para marcar automáticamente el enlace activo
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
  
      // Marcar como activo el botón del menú
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    });
  
    // Función para hacer scroll suave
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Mostrar sección de inicio por defecto
    showSection('inicio');
  
  
  });