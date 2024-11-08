// swiper advantages
const advantagesSlider = document.querySelector('.swiper-advantages');

let advantagesSwiper = new Swiper(advantagesSlider, {
	loop: true,
	wrapperClass: 'swiper-advantages__wrapper',
	slideClass: 'swiper-advantages__slide',

	navigation: {
		nextEl: '.advantages__button-next',
		prevEl: '.advantages__button-prev',
	},
});

// swiper reviews
const reviewsSlider = document.querySelector('.swiper-reviews');

let reviewsSwiper = new Swiper(reviewsSlider, {
	loop: true,
	slidesPerView: 7,
	spaceBetween: 14,
	wrapperClass: 'swiper-reviews__wrapper',
	slideClass: 'swiper-reviews__slide',
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
	},
});















