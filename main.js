import '@/style/style.scss';

//Preloader

const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', () => {
	preloader.classList.add('remove');
});

/**
 *  add event multiply elements
 */

const addEventOnElem = function (elements, eventType, callback) {
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

/**
 * Navbar toggle for mob
 * */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNav = () => {
	navbar.classList.toggle('active');
	overlay.classList.toggle('active');
	document.body.classList.toggle('nav-active');
};

addEventOnElem(navTogglers, 'click', toggleNav);

/**
 * Header
 * */

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
	header.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
});
