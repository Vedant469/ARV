const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.getElementById("navbar-links");
const dropdown = document.querySelector('.dropdown'); 
const dropdownContent = dropdown.querySelector('.dropdown-content'); // Move this outside for better access

toggleButton.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
    dropdownContent.classList.remove('show'); // Hide dropdown when menu is toggled
});

dropdown.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    dropdownContent.classList.toggle('show'); // Toggle dropdown visibility
});

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show'); // Hide dropdown if clicked outside
    }
});
