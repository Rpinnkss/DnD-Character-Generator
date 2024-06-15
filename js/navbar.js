// Select the menu icon and the navigation links
const menuIcon = document.querySelector('.navbar-menu-icon');
const navbarLinks = document.querySelector('.navbar-links');

// Toggle the 'active' class on the navigation links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
