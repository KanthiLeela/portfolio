document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pop-up message for "Hire Me" button
    const hireMeButton = document.getElementById('hire-me');
    hireMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for your interest! I will get back to you soon.');
    });
});

