'use strict';
class Slider {
    mainSliderActivate() {
        
        const slides = document.querySelectorAll('.main-slider .slide');

        let currentSlide = 0,
            interval;
		const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
		const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

        const autoPlaySlide = () => {
			prevSlide(slides, currentSlide, 'active-main-slide');
            nextSlide(slides, currentSlide, 'non-active-slide');
			currentSlide++;
			if (currentSlide >= slides.length) currentSlide = 0;
            prevSlide(slides, currentSlide, 'non-active-slide');
			nextSlide(slides, currentSlide, 'active-main-slide');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		startSlide(4000);
    }

    serviceSliderActivate() {
        const slider = document.querySelector('.services-slider');

		let list = document.querySelector('.carousel');

		let width = 226;
		let count = 1;

		let position = 0;

		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;

			if (!target.matches('.slider-arrow, .slider-arrow *, .dot')) return;

			if (target.matches('.slider-arrow.next, .slider-arrow.next *')) {
				position -= width * count;

				position = Math.max(position, -1130);
				list.style.marginLeft = position + 'px';
			} else if (target.matches('.slider-arrow.prev, .slider-arrow.prev *')) {

				position += width * count;

				position = Math.min(position, 0)
				list.style.marginLeft = position + 'px';
            }
		});
    }

    gallerySliderActivate() {
        const slides = document.querySelectorAll('.gallery-slider .slide'),
				slider = document.querySelector('.gallery-slider'),
				dotUl = slider.querySelector('.slider-dots');

		let dotsCount = slides.length;
		for (let i = 0; i < dotsCount; i++) {
			const dot = document.createElement('li');
			const btn = document.createElement('button');
			dotUl.insertBefore(dot, dotUl.lastChild);
            dot.insertBefore(btn, dot.lastChild);
			btn.classList.add('dot');
		}
		const dots = dotUl.querySelectorAll('.dot');
		dots[0].classList.add('slick-active');
		let currentSlide = 0,
			interval;
		const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
		const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

		const autoPlaySlide = () => {
			prevSlide(slides, currentSlide, 'active-service-slide');
            nextSlide(slides, currentSlide, 'non-active-slide');
			prevSlide(dots, currentSlide, 'slick-active');
			currentSlide++;
			if (currentSlide >= slides.length) currentSlide = 0;
			nextSlide(dots, currentSlide, 'slick-active');
			prevSlide(slides, currentSlide, 'non-active-slide');
			nextSlide(slides, currentSlide, 'active-service-slide');
		};
		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};
		const stopSlide = () => {
			clearInterval(interval);
		};
		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;

			if (!target.matches('.slider-arrow, .slider-arrow *, .dot')) return;

			prevSlide(slides, currentSlide, 'active-service-slide');
            nextSlide(slides, currentSlide, 'non-active-slide');
			prevSlide(dots, currentSlide, 'slick-active');

			if (target.matches('.slider-arrow.next, .slider-arrow.next *')) {
				currentSlide++;
			} else if (target.matches('.slider-arrow.prev, .slider-arrow.prev *')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dots.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slides.length) currentSlide = 0;
			if (currentSlide < 0) currentSlide = slides.length - 1;
			nextSlide(dots, currentSlide, 'slick-active');
			prevSlide(slides, currentSlide, 'non-active-slide');
			nextSlide(slides, currentSlide, 'active-service-slide');
		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.slider-arrow, .slider-arrow *') || event.target.matches('.dot'))
				stopSlide();
		});
		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.slider-arrow, .slider-arrow *') || event.target.matches('.dot'))
				startSlide();
		});
		startSlide(1500);
    }
}
export default Slider;