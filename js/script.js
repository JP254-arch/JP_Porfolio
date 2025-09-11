document.addEventListener('DOMContentLoaded', function () {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.nav li a');

    // Sidebar toggle (mobile)
    if (navToggler && aside) {
        navToggler.addEventListener('click', function () {
            aside.classList.toggle('open');
            mainContent?.classList.toggle('shifted');
            navToggler.classList.toggle('open');
        });
    }

    // Close sidebar on nav link click (on small screens)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1199) {
                aside?.classList.remove('open');
                mainContent?.classList.remove('shifted');
                navToggler?.classList.remove('open');
            }
        });
    });

    // Typed.js Initialization
    if (document.querySelector('.typing')) {
        new Typed(".typing", {
            strings: ["Web Developer", "Web Designer", "Graphic Designer"],
            typeSpeed: 300,
            backSpeed: 90,
            loop: true
        });
    }
});
