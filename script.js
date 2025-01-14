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
// Live Chat Functionality

document.querySelector('.live-chat-button').addEventListener('click', function() {
  const chatBox = document.querySelector('.live-chat-box');
  chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

document.querySelector('.live-chat-send').addEventListener('click', function() {
  const input = document.querySelector('.live-chat-input');
  const message = input.value;
  if (message) {
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('live-chat-message');
    chatMessage.innerHTML = `<p class="live-chat-text">${message}</p>`;
    document.querySelector('.live-chat-box').appendChild(chatMessage);
    input.value = '';
  }
});