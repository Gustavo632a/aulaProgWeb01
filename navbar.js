
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const dropdownLinks = document.querySelectorAll('.has-dropdown > a');

    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 700) {
                e.preventDefault();
                const dropdown = link.nextElementSibling;
                if (dropdown) {
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});
