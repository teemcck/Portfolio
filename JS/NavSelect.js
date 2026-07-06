const navLinks = document.querySelectorAll(".desktop-link[data-target]");
const sections = document.querySelectorAll(".section-container");

function showSection(targetId) {
  sections.forEach((section) => {
    const isTarget = section.id === targetId;

    section.hidden = !isTarget;
    section.classList.toggle("active", isTarget);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === targetId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.dataset.target);
  });
});

showSection("about");
