'use strict';

class Burger {
    constructor() {
<<<<<<< HEAD
        this.burgerMenu = document.querySelector('.hidden-large').querySelector('img');
=======
        this.burgerMenu = document.querySelector('.hidden-large');
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b
        this.menu = document.querySelector('.hidden-small');
        this.topMenu = document.querySelector('.top-menu');

        this.popup = document.querySelector('.popup-menu');
<<<<<<< HEAD
=======
        // this.popupWindow = document.querySelector('')
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b
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
<<<<<<< HEAD
=======

    showPopup() {
        this.burgerMenu.addEventListener('click', () => {
            this.popup.style.display = 'flex';
        })

        this.popup.addEventListener('click', (e) => {
            let target = e.target;

            if (target.tagName === 'IMG' || target.tagName === 'A') {
                this.popup.style.display = 'none';
            }
        });
    }
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b
}

export default Burger;