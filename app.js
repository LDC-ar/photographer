// Responsive menu
const navButton = document.querySelector('.burguer');
const navLinks = document.querySelector('.nav-links');
const liElements = navLinks.querySelectorAll('li');

function toggleNav() {
	navLinks.classList.toggle('nav-links__move');
	navButton.classList.toggle('close');
}

// Add the event listener to the burguer
navButton.addEventListener('click', toggleNav);

// Loop through each li element and add the event listener
liElements.forEach(liElement => {
	liElement.addEventListener('click', toggleNav);
});
// End of responsive menu

// Smooth scrolling with vanilla JavaScript
const navbar = document.querySelector('#navbar');
const aElements = navbar.querySelectorAll('a');
const galleryBtn = document.querySelector('#gallery-btn');

let scrolled = false;

window.onscroll = function () {
	if (window.pageYOffset > 100) {
		navbar.classList.remove('top');
		if (!scrolled) {
			navbar.style.transform = 'translateY(-70px)';
		}
		setTimeout(function () {
			navbar.style.transform = 'translateY(0)';
			scrolled = true;
		}, 200);
	} else {
		navbar.classList.add('top');
		scrolled = false;
	}
};

function scroll(e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;
		const target = document.querySelector(hash);
		const headerOffset = 100;
		const elementPosition = target.getBoundingClientRect().top;
		const offsetPosition = elementPosition - headerOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
}

aElements.forEach(link => {
	link.addEventListener('click', scroll);
});

galleryBtn.addEventListener('click', scroll);
// End of smooth scrolling with vanilla JavaScript
