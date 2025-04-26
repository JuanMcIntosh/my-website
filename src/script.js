// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
});

// Add click handler for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // This is where you would add the link to the actual project
        // For now, it just logs to console
        console.log('Project clicked:', card.querySelector('h3').textContent);
    });
}); 