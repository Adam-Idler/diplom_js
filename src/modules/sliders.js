'use strict';
class Slider {
    mainSliderActivate() {
        
        const slides = document.querySelectorAll('.main-slider .slide');

        let currentSlide = 0,
            interval;
		const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
		const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

        const autoPlaySlide = () => {
			prevSlide(slides, currentSlide, 'active-slide');
            nextSlide(slides, currentSlide, 'non-active-slide');
			currentSlide++;
			if (currentSlide >= slides.length) currentSlide = 0;
            prevSlide(slides, currentSlide, 'non-active-slide');
			nextSlide(slides, currentSlide, 'active-slide');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		startSlide(4000);
    }

    serviceSliderActivate() {
        const slides = document.querySelectorAll('.service-slider .slide'),;


    }
}
export default Slider;