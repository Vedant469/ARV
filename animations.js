document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const desktopLinks = document.querySelector(".desktop-links");

    hamburger.addEventListener("click", () => {
        desktopLinks.classList.toggle("active");
    });

});