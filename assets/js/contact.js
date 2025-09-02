// Formspree form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const firstname = document.getElementById('firstname').value.trim();
            const lastname = document.getElementById('lastname').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phonenumber').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!firstname || !lastname || !email || !phone || !message) {
                alert('Please fill in all required fields.');
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
            submitButton.disabled = true;

            // Prepare form data
            const formData = new FormData(form);
            
            // Add additional data
            formData.append('_subject', `New Contact Form Message from ${firstname} ${lastname}`);
            formData.append('_replyto', email);
            formData.append('_cc', 'nhlanhlamsibi008@gmail.com');

            // Send form using fetch
            fetch('https://formspree.io/f/nhlanhlamsibi008@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    alert('Thank you! Your message has been sent successfully.');
                    form.reset();
                } else {
                    // Error
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! Something went wrong. Please try again later or contact me directly at nhlanhlamsibi008@gmail.com');
            })
            .finally(() => {
                // Restore button state
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
        });
    }
});

// Add loading animation CSS
const style = document.createElement('style');
style.textContent = `
    .bx-spin {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style); 