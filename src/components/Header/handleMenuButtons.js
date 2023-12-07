export const handleMenuButtons = e => {
  const simpleBarContent = document.querySelector(
    '.my-simplebar .simplebar-content-wrapper'
  );

  if (showMobileMenu) setShowMobileMenu(false);
  simpleBarContent.scroll({
    left: 0,
    top: document.querySelector(`.${e.target.id.split('-')[0]}`).offsetTop - 96,
    behavior: 'smooth'
  });
};
