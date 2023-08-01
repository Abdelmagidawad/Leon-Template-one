let iconToTop = document.querySelector("html lord-icon");

window.onscroll = function () {
  if (this.scrollY >= 530) {
    iconToTop.classList.add("show");
  } else {
    iconToTop.classList.remove("show");
  }
};

iconToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
