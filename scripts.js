// Simple JavaScript to display an alert when the page loads
window.onload = function() {
    alert("Welcome to my personal website!");
};
let index = 0;

function showNextImage() {
    const slides = document.querySelectorAll('.carousel-slide img');
    index = (index + 1) % slides.length;
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
