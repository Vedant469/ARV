const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
     // Toggle the menu
     navbarLinks.classList.toggle('active');
   // Toggle the cross icon
   toggleButton.classList.toggle('active');
});