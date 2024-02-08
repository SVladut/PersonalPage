const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('misca', 'spin');
        } else {
            entry.target.classList.remove('misca', 'spin');
        }
    });
}, { threshold: 0.5 });

const animatieMiscaSections = document.querySelectorAll('.animatie-misca');
animatieMiscaSections.forEach((section) => observer.observe(section));










































