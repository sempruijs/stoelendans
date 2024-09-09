document.addEventListener("DOMContentLoaded", function() {
    const flyingImagesContainer = document.getElementById('flying-images') as HTMLElement;

    function createFlyingImage(): void {
        const image = document.createElement('div');
        image.className = 'flying-image';
        
        // Gebruik het relatieve pad voor de afbeelding
        image.style.backgroundImage = `url('./site/images/beer.png')`;
        image.style.left = `${Math.random() * 100}vw`; // Willekeurige horizontale positie
        image.style.top = `${Math.random() * 100}vh`; // Willekeurige verticale positie
        image.style.animationDuration = `${Math.random() * 10 + 5}s`; // Willekeurige snelheid
        image.style.animationDelay = `${Math.random() * 5}s`; // Willekeurige vertraging
        flyingImagesContainer.appendChild(image);

        // Verwijder de afbeelding na het beëindigen van de animatie om overtollige DOM-elementen te voorkomen
        image.addEventListener('animationend', () => {
            flyingImagesContainer.removeChild(image);
        });
    }

    // Maak elke 200ms een nieuwe vliegende afbeelding
    setInterval(createFlyingImage, 200);
});
