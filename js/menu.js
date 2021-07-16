const toggle = document.querySelector(".btn-toggle");
const close = document.querySelector(".btn-close");

const grid = document.querySelector(".grid-menu");
const navLink = document.querySelectorAll(".nav-link");

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

toggle.addEventListener("click", () => {
  grid.classList.toggle("active");
});

close.addEventListener("click", () => {
  grid.classList.toggle("active");
});

if (isMobile()) {
  navLink.forEach((element) =>
    element.addEventListener("click", () => {
      grid.classList.toggle("active");
    })
  );
}
