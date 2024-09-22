document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });

  // Fecha o menu quando uma opção é clicada
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if(navMenu.classList.contains('active')){
              navMenu.classList.remove('active');
          }
      });
  });

  // Colapsa o menu automaticamente em telas maiores
  window.addEventListener('resize', () => {
      if(window.innerWidth > 768){
          navMenu.classList.remove('active');
      }
  });
});
