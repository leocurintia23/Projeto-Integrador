document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        body.classList.toggle("menu-open");
    });
});