const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", function() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const dotsContainer = document.querySelector('.dots');
	const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    
    let currentIndex = 0;

    // Crée les points
	slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Fonction pour mettre à jour l'affichage de la diapositive
    function updateSlide(index) {
        bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
        bannerText.innerHTML = slides[index].tagLine;

        dots.forEach((dot, i) => {
            dot.classList.toggle('dot_selected', i === index);
        });
    }

    // Ajoutez des écouteurs d'événements pour les clics sur les flèches
    arrowLeft.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlide(currentIndex);
		console.log('Flèche gauche cliqué');
		// alert('Flèche gauche cliqué');
    });

    arrowRight.addEventListener('click', function() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlide(currentIndex);
		console.log('Flèche droite cliqué');
		// alert('Fkèche droite cliqué');
    });
});
