// Hide loader after page load (only works if .loader exists)
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// WhatsApp redirect for Book Now
document.querySelectorAll(".book-now-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        
        const phone = "9007062180"; // your number
        const text = encodeURIComponent("Hello, I want to book a room at Kingsukh Guest House.");
        
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload on submit

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();

    // Your WhatsApp number in international format (without +)
    let phoneNumber = "91xxxxxxxxxx";

    let whatsappMessage =
        `New Contact Form Submission:\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Mobile: ${mobile}\n` +
        `Message: ${message}`;

    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank"); // open WhatsApp
});


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let fadeOutTimeout;

    // Fade-out navbar after inactivity
    function resetFadeOutTimer() {
        clearTimeout(fadeOutTimeout);

        navbar.classList.remove('fade-out');

        fadeOutTimeout = setTimeout(() => {
            navbar.classList.add('fade-out');
        }, 4000);
    }

    window.addEventListener('mousemove', resetFadeOutTimer);
    window.addEventListener('keypress', resetFadeOutTimer);
    window.addEventListener('scroll', resetFadeOutTimer);

    resetFadeOutTimer();

    // Highlight active menu link on scroll
    function updateActiveLink() {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.clientHeight;

            if (window.pageYOffset >= top - height / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // Typing effect (you can change target element)
    const typingTarget = document.querySelector(".about-text");
    const text = "At Kingsukh Guest House, we believe every stay should feel like home. Surrounded by nature and calmness, our property offers a cozy retreat with modern comforts.";

    if (typingTarget) {
        typeText(typingTarget, text);
    }

    function typeText(el, text, i = 0) {
        if (i === 0) el.textContent = "";
        if (i < text.length) {
            el.textContent += text[i];
            setTimeout(() => typeText(el, text, i + 1), 20);
        }
    }
});
