document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('animateButton').addEventListener('click', function() {
        var overlay = document.getElementById('overlay');
        overlay.classList.add('overlay-active');

        // Remove the overlay after animation completes
        setTimeout(function() {
            overlay.classList.remove('overlay-active');
        }, 500); // Match this duration with the CSS transition time
    });
});
