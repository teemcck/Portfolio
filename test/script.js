const sectionButtons = document.querySelectorAll("[data-section-target]");
const sectionPanels = document.querySelectorAll("[data-section-panel]");

function showSection(sectionId) {
    sectionPanels.forEach((panel) => {
        const isActive = panel.id === sectionId;
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
    });

    sectionButtons.forEach((button) => {
        const isActive = button.dataset.sectionTarget === sectionId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-current", isActive ? "page" : "false");
    });
}

sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showSection(button.dataset.sectionTarget);
    });
});
