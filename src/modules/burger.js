'use strict';

class Burger {
    constructor() {
        this.burgerMenu = document.querySelector('.hidden-large').querySelector('img');
        this.menu = document.querySelector('.hidden-small');
        this.topMenu = document.querySelector('.top-menu');

        this.popup = document.querySelector('.popup-menu');
    }

    burgerFix() {
        let posMenu = this.topMenu.offsetTop;

        window.addEventListener('scroll', () => {
            let display = window.getComputedStyle(this.burgerMenu).getPropertyValue("display");

            if (display === 'block' && document.documentElement.scrollTop > posMenu) {
                this.topMenu.classList.add('fixed');
            } else {
                this.topMenu.classList.remove('fixed');
            }
        });
    }
}

export default Burger;