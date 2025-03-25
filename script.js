document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Animated Progress Bars (Example for Services Section)
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = 'linear-gradient(135deg, #c8e6c9, #dcedc8)';
        });
        item.addEventListener('mouseout', () => {
            item.style.background = 'linear-gradient(135deg, #e8f5e9, #dcedc8)';
        });
    });
});



// Link script in HTML
document.addEventListener('DOMContentLoaded', () => {
    // Create Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    console.log('Custom cursor created:', cursor); // Debug: Confirm cursor is created

    // Move Cursor with Mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        console.log('Mouse moved:', e.clientX, e.clientY); // Debug: Confirm mouse movement
    });

    // Change Cursor on Hover Over Interactive Elements
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .social-icon');
    console.log('Interactive elements found:', interactiveElements); // Debug: Confirm elements are found
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.classList.add('cursor-hover');
        });
        element.addEventListener('mouseout', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
});