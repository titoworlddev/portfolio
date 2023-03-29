export function closeMenuCard() {
  window.addEventListener('mouseup', function (e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuChildren = Array.from(mobileMenu.querySelectorAll('*'));
    const mobileMenuContent = document.querySelector('.mobile-menu-content');

    const tarjetaContainer = document.querySelector('.tarjeta-container');
    const tarjetaChildren = Array.from(tarjetaContainer.querySelectorAll('*'));

    if (
      !mobileMenuChildren.includes(e.target) &&
      mobileMenuContent.style.display !== 'none'
    )
      mobileMenuContent.style.display = 'none';

    if (
      !tarjetaChildren.includes(e.target) &&
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
