document.addEventListener("DOMContentLoaded", function() {
    const flyingImagesContainer = document.getElementById('flying-images');

    function createFlyingImage() {
        const image = document.createElement('div');
        image.className = 'flying-image';
        // Use the relative path for the image
        image.style.backgroundImage = `url('site/images/beer.png')`;
        image.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        image.style.top = `${Math.random() * 100}vh`; // Random vertical position
        image.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random speed
        image.style.animationDelay = `${Math.random() * 5}s`; // Random delay
        flyingImagesContainer.appendChild(image);

        // Remove the image after the animation ends to prevent excess DOM elements
        image.addEventListener('animationend', () => {
            flyingImagesContainer.removeChild(image);
        });
    }

    // Create a new flying image every 200ms
    setInterval(createFlyingImage, 200);
});
