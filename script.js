const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
     // Toggle the menu
     navbarLinks.classList.toggle('active');
   // Toggle the cross icon
   toggleButton.classList.toggle('active');
});
// Contact Us Page JavaScript Code

// Get the contact form
const contactForm = document.getElementById('contact-form');

// Add an event listener to the form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Display a success message
  alert('Thank you for your message! We will get back to you shortly.');
  
  // Reset the form
  contactForm.reset();
});