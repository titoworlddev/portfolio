export const handleScrollToTop = () => {
  const simpleBarContent = document.querySelector(
    '.my-simplebar .simplebar-content-wrapper'
  );
  simpleBarContent.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
};
