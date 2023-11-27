// This function is used only to close when the user clicks outside the card or the menu
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

// This function is used only to open and close the card when the user clicks on the project or on the card close button
export function openCloseCard() {
  const card = document.querySelector('.tarjeta-container');
  const display = card.style.display;
  setTimeout(() => {
    if (display === 'none') {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  }, 150);
}

// For scroll to top the page when the user click on the logo
export function btnUpPage(ref) {
  document.querySelectorAll('.portfolio').forEach(item => {
    item.addEventListener('click', () => {
      window.history.pushState(null, null, `/`);
      ref.getScrollElement().scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}
