function ToGithub() {
    window.open("https://github.com/Rpinnkss?tab=repositories", "_blank");
}

function ToGenerator() {
    window.open("https://rpinnkss.github.io/DnD-Character-Generator/", "_blank");
}

// Function to toggle the navigation menu
function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    burgerMenu.classList.toggle('active');

    navMenu.classList.toggle('active');
    
}

document.getElementById('visit-works').addEventListener('click', ToGithub);
document.getElementById('visit-generator').addEventListener('click', ToGenerator);