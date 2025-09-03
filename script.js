// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
const typewriterElement = document.querySelector('.typewriter');
const text = "A passionate Full-Stack Developer crafting innovative web solutions";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        if (bar.offsetParent !== null && bar.style.width === '0px') {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);

// Contact form demo
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo - no email sent)');
    this.reset();
});
