document.addEventListener("DOMContentLoaded", function () {
    const flyingImagesContainer = document.getElementById('flying-images') as HTMLElement;

    function createFlyingImage(): void {
        const image = document.createElement('div');
        image.className = 'flying-image';

        // Gebruik het relatieve pad voor de afbeelding
        image.style.backgroundImage = `url('./images/beer.png')`;
        image.style.left = `${Math.random() * 100}vw`; // Willekeurige horizontale positie
        image.style.top = `${Math.random() * 100}vh`; // Willekeurige verticale positie

        // Maak de animaties rustiger door de duur en vertraging te verhogen
        image.style.animationDuration = `${Math.random() * 20 + 15}s`; // Verlaag de snelheid (meer tussen 15 en 35 seconden)
        image.style.animationDelay = `${Math.random() * 10}s`; // Verhoog de vertraging (tussen 0 en 10 seconden)

        flyingImagesContainer.appendChild(image);

        // Verwijder de afbeelding na het beëindigen van de animatie
        image.addEventListener('animationend', () => {
            // Verwijder de afbeelding als de animatie is afgelopen
            if (flyingImagesContainer.contains(image)) {
                flyingImagesContainer.removeChild(image);
            }
        });
    }

    // Maak minder vaak een nieuwe vliegende afbeelding (verhoogde interval naar 3000ms)
    setInterval(createFlyingImage, 3000);
});
