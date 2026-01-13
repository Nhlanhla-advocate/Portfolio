document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('downloadCV');
    
    if (previewButton) {
        previewButton.addEventListener('click', function(e) {
            // Prevent default behavior if CV is not ready
            if (!this.href.includes('.pdf')) {
                e.preventDefault();
                alert('CV is currently being updated. Please try again later.');
                return;
            }

            // Optional: Track preview
            try {
                console.log('CV preview initiated');
                // You could add analytics tracking here
            } catch (error) {
                console.error('Error opening preview:', error);
            }
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('bx-menu');
                    icon.classList.add('bx-x');
                } else {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            }
        });
        
        // Close menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('.nav-link a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            });
        });
    }
}); 