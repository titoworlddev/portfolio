// This function is used only to close when the user clicks outside the menu
export function closeMenuCard() {
  window.addEventListener('mouseup', function (e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuChildren = Array.from(mobileMenu.querySelectorAll('*'));
    const mobileMenuContent = document.querySelector('.mobile-menu-content');

    if (
      mobileMenuContent &&
      !mobileMenuChildren.includes(e.target) &&
      mobileMenuContent.style.display !== 'none'
    )
      mobileMenuContent.style.display = 'none';
  });
}
