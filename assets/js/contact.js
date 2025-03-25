// Initialize EmailJS with your public key
(function() {
    emailjs.init("-jGwOzq7dF33TJE5b");
})();

function sendEmail(e) {
    e.preventDefault();

    // Get form elements
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phonenumber').value;
    const message = document.getElementById('message').value;

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
    submitButton.disabled = true;

    // Prepare template parameters
    const templateParams = {
        from_name: `${firstname} ${lastname}`,
        reply_to: email,
        from_email: email,
        phone_number: phone,
        message: message,
        to_name: 'Nhlanhla Msibi'
    };

    // Send email using EmailJS
    emailjs.send(
        "service_risirnr", 
        "template_zca9rkv", 
        templateParams
    )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            alert('Thank you! Your message has been sent successfully.');
            
            // Reset form
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Oops! Something went wrong. Please try again later.');
        })
        .finally(() => {
            // Restore button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });

    return false;
}

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