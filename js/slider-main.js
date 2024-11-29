// swiper advantages
const advantagesSlider = document.querySelector('.swiper-advantages');

let advantagesSwiper = new Swiper(advantagesSlider, {
	loop: true,
	wrapperClass: 'swiper-advantages__wrapper',
	slideClass: 'swiper-advantages__slide',
	autoplay: {
		delay: 3200,
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




// // GSAP-BTN
// let btnLarge = document.querySelectorAll('.move-btn-large').forEach(btn => {
// 	btn.addEventListener('mousemove', (e) => {
// 		let x = e.offsetX;
// 		let y = e.offsetY;
// 		let btnWidht = btn.clientWidth;
// 		let btnHeight = btn.clientHeight;
// 		let transX = (x - btnWidht / 10);
// 		let transY = (y - btnHeight / 10);
// 		btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`
// 	})
// 	btn.addEventListener('mouseout', (e) => {
// 		btn.style.transform = '';
// 	})
// })
// // GSAP-BTN

