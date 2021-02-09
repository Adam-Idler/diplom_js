'use strict';

class ArrowBtn {
    constructor() {
        this.arrowBtn = document.getElementById('totop');
        this.headerBlock = document.querySelector('.header-main');
    }

    getVisible() {
        let posBlock = this.headerBlock.offsetTop + this.headerBlock.offsetHeight;
        
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > posBlock) {
                this.arrowBtn.classList.add('active');
            } else {
                this.arrowBtn.classList.remove('active');
            }
        });
    }
}

export default ArrowBtn;