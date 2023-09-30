export const scrollIntoViewWithOffset = (element: HTMLElement) => {
  window.scrollTo({
    behavior: "smooth",
    //this is the height of the header at the top of the page. Correcting the scroll for that.
    top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
  });
};
