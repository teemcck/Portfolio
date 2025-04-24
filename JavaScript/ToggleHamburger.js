// Add event listener to hamburger menu.
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.mobile-nav-links');
    const hero = document.getElementById('hero');

    // Get the starting margin height of the hero element for updating padding.
    const heroPadding = parseInt(window.getComputedStyle(hero).marginTop, 10);

    // Toggle nav visibility when hamburger is clicked
    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('mobile-nav-links-visible')) {
            // Remove the class to hide the menu
            navLinks.classList.remove('mobile-nav-links-visible');
            // Wait for the transition to finish before hiding visibility
            setTimeout(() => {
                navLinks.style.visibility = 'hidden';
            }, 300); // Match the CSS transition duration (0.3s)
        } else {
            // Show the menu
            navLinks.style.visibility = 'visible';
            navLinks.classList.add('mobile-nav-links-visible');
        }   
        // Adjust hero margin
        if (navLinks.classList.contains('mobile-nav-links-visible')) {
            hero.style.marginTop = `${navLinks.offsetHeight + heroPadding}px`;
        } else {
            hero.style.marginTop = `${heroPadding}px`;
        }
    });
});