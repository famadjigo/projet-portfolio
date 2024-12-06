document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollButton');
    let isScrollingUp = true;

    // Toggle direction of scroll
    scrollButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (isScrollingUp) {
            // Scroll to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            // Scroll to the bottom
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }

        // Toggle the arrow direction
        const img = scrollButton.querySelector('img');
        img.classList.toggle('up');
        isScrollingUp = !isScrollingUp;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    animatedElements.forEach(element => observer.observe(element));
});