document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.textContent === '☰' ? '✕' : '☰';
            mobileToggle.textContent = icon;
        });
    }

    // Sticky Header Scroll Effect (Optional enhancement)
    const header = document.querySelector('.header-main');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }
    });

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (mobileToggle) mobileToggle.textContent = '☰';
            }
        });
    });
    // Enquiry Form Handling
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const requirement = document.getElementById('requirement').value;

            const message = `Hello, New Enquiry from Website.%0A%0AName: ${name}%0APhone: ${phone}%0ARequirement: ${requirement}`;
            const whatsappUrl = `https://wa.me/919820490779?text=${message}`;

            window.open(whatsappUrl, '_blank');
            // Optional: reset form after a short delay
            setTimeout(() => enquiryForm.reset(), 1000);
        });
    }
});
