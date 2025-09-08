document.addEventListener('DOMContentLoaded', function() {
    const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
    const styleSwitcher = document.querySelector('.style-switcher');
    const dayNight = document.querySelector('.day-night');
    const alternateStyles = document.querySelectorAll('.alternate-style');

    // Style switcher toggle
    styleSwitcherToggler.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    })
    
    // Close when clicking outside
    window.addEventListener("scroll", () => {
        if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    })

    // Theme colors
    window.setActiveStyle = function(color) {
        if (alternateStyles) {
            alternateStyles.forEach(style => {
                if (color === style.getAttribute('title')) {
                    style.removeAttribute('disabled');
                } else {
                    style.setAttribute('disabled', 'true');
                }
            });
        }
    }

    // Light/dark mode toggle
    if (dayNight) {
        dayNight.addEventListener('click', function() {
            const icon = dayNight.querySelector('i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
            document.body.classList.toggle('dark');
            
            // Save preference to localStorage
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            dayNight.querySelector('i').classList.add('fa-sun');
        } else {
            dayNight.querySelector('i').classList.add('fa-moon');
        }
    }
});