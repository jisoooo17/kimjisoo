export const getScrollObjY = () => {
  let arrY = [];
  let scrollMotions = document.querySelectorAll(".scroll-motion");

  scrollMotions.forEach((el) => {
    let offsetTop = el.getBoundingClientRect().top + window.pageYOffset;
    arrY.push(parseInt(offsetTop));
  });

  return arrY;
};

export const handleScroll = () => {
  let scrollMotions = document.querySelectorAll(".scroll-motion");
  let scrollY = window.scrollY || window.pageYOffset;

  scrollMotions.forEach((el, q) => {
    if (scrollY + window.innerHeight > getScrollObjY()[q]) {
      el.classList.add("active");
    }
  });
};
