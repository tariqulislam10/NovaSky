const menuButton = document.querySelector("#menuButton");

const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));

  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu after clicking a link

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");

    menuButton.setAttribute("aria-expanded", "false");
  });
});
