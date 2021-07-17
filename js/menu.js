const toggle = document.querySelector(".btn-toggle");
const close = document.querySelector(".btn-close");

const grid = document.querySelector(".grid-menu");
const navLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector("#nav");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
toggle.addEventListener("click", () => {
  grid.classList.toggle("active");
});

close.addEventListener("click", () => {
  grid.classList.toggle("active");
});

window.addEventListener("scroll", fixedNav);

function isMobile() {
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  return false;
}

if (isMobile()) {
  navLink.forEach((element) =>
    element.addEventListener("click", () => {
      grid.classList.toggle("active");
    })
  );
}
