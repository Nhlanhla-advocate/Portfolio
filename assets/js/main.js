document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('downloadCV');
    
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
}); 