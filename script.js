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
            // Animate skill progress bars when Skills section is visible
            if (entry.target.id === 'skills') {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    const proficiency = item.dataset.proficiency;
                    const progress = item.querySelector('.progress');
                    const offset = 283 - (283 * proficiency / 100);
                    progress.style.strokeDashoffset = offset;
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

// Navbar Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ ' : '🌙 ';
});


