// swiper advantages
const advantagesSlider = document.querySelector('.swiper-advantages');

let advantagesSwiper = new Swiper(advantagesSlider, {
	loop: true,
	wrapperClass: 'swiper-advantages__wrapper',
	slideClass: 'swiper-advantages__slide',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.advantages__button-next',
		prevEl: '.advantages__button-prev',
	},
});

// swiper reviews
const reviewsSlider = document.querySelector('.swiper-reviews');

let reviewsSwiper = new Swiper(reviewsSlider, {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	wrapperClass: 'swiper-reviews__wrapper',
	slideClass: 'swiper-reviews__slide',
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		900: {
			slidesPerView: 2,
			spaceBetween: 12,
		},
		1190: {
			slidesPerView: 3,
			spaceBetween: 14,
		},
		1290: {
			slidesPerView: 5,
			spaceBetween: 16,
		}
	},
});
// swiper reviews




