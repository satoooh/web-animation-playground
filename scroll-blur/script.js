const activeClassName = "animated";
const targetElements = document.querySelectorAll(".scroll-animate");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(activeClassName);
    } else {
      entry.target.classList.remove(activeClassName);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

targetElements.forEach((element) => {
  observer.observe(element);
});
