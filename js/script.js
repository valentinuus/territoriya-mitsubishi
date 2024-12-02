// test PC or mobile
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
// test PC or mobile

// testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// testWebP


const burger = document?.querySelector('[data-burger]');
const closeMenu = document?.querySelector('[data-close]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;

burger?.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

closeMenu?.addEventListener('click', () => {
	body.classList.remove('stop-scroll');
	nav?.classList.remove('nav--visible');
	burger?.classList.remove('burger--active');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop-scroll');
		burger?.classList.remove('burger--active');
		nav?.classList.remove('nav--visible');
	});
});



VK.Widgets.Group("vk_groups", {mode: 3, no_cover: 1, width: 300, height: 300, color1: "FFFFFF", color2: "000000", color3: "5181B8"}, 36573499);





