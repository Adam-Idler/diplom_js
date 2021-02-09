'use strict';

class DropDown {
    constructor() {
        this.select = document.querySelector('.club-select'),
        this.selectList = this.select.querySelector('ul');
    }

    drop() {
        window.addEventListener('click', (e) => {
            let target = e.target;

            if (target.closest('.club-select')) {
                this.selectList.classList.add('active');
            } else if (!target.closest('ul')) {
                this.selectList.classList.remove('active');
            }
        });
    }
}

export default DropDown;