// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Intersection Observer for Animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars
            if (entry.target.id === 'skills') {
                const skills = entry.target.querySelectorAll('.skill');
                skills.forEach(skill => {
                    const bar = skill.querySelector('.bar');
                    bar.style.width = skill.dataset.width;
                });
            }
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Animate Home Section on Load
window.addEventListener('load', () => {
    document.getElementById('home').classList.add('visible');
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Contact Form Handling (Simulated)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    this.reset();
});