const toggleButton = document.getElementById("toggle-button");
const navbarLinks = document.getElementById("navbar-links");
const dropdown = document.querySelector('.dropdown'); 
const dropdownContent = dropdown.querySelector('.dropdown-content');

toggleButton.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
    dropdownContent.classList.remove('show');
});

dropdown.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
});

document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});
