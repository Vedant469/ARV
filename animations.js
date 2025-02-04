// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", () => {
    
    // Animate service boxes when they appear on screen
    gsap.from(".service-box", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
    // Toggle Menu for Mobile
function toggleMenu() {
    const nav = document.querySelector(".desktop-links");
    nav.classList.toggle("active");
}

    // Hover effect for service boxes
    document.querySelectorAll(".service-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            gsap.to(box, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        });
        box.addEventListener("mouseleave", () => {
            gsap.to(box, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });

    // Smoothly show the navbar on scroll up and hide on scroll down
    let lastScroll = 0;
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scrolling down
            gsap.to(navbar, { y: -100, duration: 0.5, ease: "power2.out" });
        } else {
            // Scrolling up
            gsap.to(navbar, { y: 0, duration: 0.5, ease: "power2.out" });
        }
        lastScroll = currentScroll;
    });

    // Hamburger menu animation
    document.querySelector(".hamburger").addEventListener("click", () => {
        const menu = document.querySelector(".desktop-links");
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            gsap.fromTo(menu, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3 });
        }
    });

});
