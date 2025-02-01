// Fade-in effect for the animated text
document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector('.animated-text');
    animatedText.style.opacity = 0;
    animatedText.style.transition = 'opacity 1s ease-in-out';
    animatedText.style.opacity = 1;
});

// Toggle navigation menu
function toggleMenu() {
    const links = document.querySelector('.desktop-links');
    links.classList.toggle('active');
}
