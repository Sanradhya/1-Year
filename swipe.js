document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Show the selected slide
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the end if needed
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Event listeners for buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});
