export function closeMenuCard() {
  document.addEventListener('mouseup', function (e) {
    const tarjetaClases = [
      'tarjeta',
      'tarjeta-header',
      'tarjeta-contenido',
      'fotos-tarjeta',
      'foto',
      'nombre-explicacion',
      'titulo-tarjeta',
      'texto-tarjeta',
      'logos-tiendas'
    ];
    const menuClases = ['mobile-menu-content', 'mobile-menu-items'];

    const mobileMenu = document.querySelector('.mobile-menu-content');
    const tarjetaContainer = document.querySelector('.tarjeta-container');

    if (
      !menuClases.includes(e.target.className) &&
      mobileMenu.style.display !== 'none'
    )
      mobileMenu.style.display = 'none';

    if (
      !tarjetaClases.includes(e.target.className) &&
      tarjetaContainer.style.display !== 'none'
    )
      tarjetaContainer.style.display = 'none';
  });
}

export function btnUpPage() {
  document.querySelectorAll('.portfolio').forEach(item => {
    item.addEventListener('click', () => {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}
