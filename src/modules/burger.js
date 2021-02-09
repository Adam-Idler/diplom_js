'use strict';

class Burger {
    constructor() {
        this.burgerMenu = document.querySelector('.hidden-large').querySelector('img');
        this.menu = document.querySelector('.hidden-small');
        this.topMenu = document.querySelector('.top-menu');

        this.popup = document.querySelector('.popup-menu');
    }

    render() {
        checkResize.apply(this);
        window.addEventListener('resize', checkResize.bind(this));
        
        function checkResize() {
            if (window.innerWidth < 768) {
                this.menu.style.display = 'none';
                document.querySelector('.hidden-large').style.display = 'block';
                
            } else {
                this.menu.style.display = 'flex';
                document.querySelector('.hidden-large').style.display = 'none';
            }
        }
        
        this.burgerFix();
    }

    burgerFix() {
        let posMenu = this.topMenu.offsetTop;

        window.addEventListener('scroll', () => {
            if (window.innerWidth < 768 && document.documentElement.scrollTop > posMenu) {
                this.topMenu.classList.add('fixed');
            } else {
                this.topMenu.classList.remove('fixed');
            }
        });
    }
}

export default Burger;