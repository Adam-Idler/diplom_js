'use strict';

class ModalWindows {
    constructor() {
        this.modalBtn = document.querySelectorAll('[data-popup]');
        this.modalWindow = document.querySelectorAll('.popup');
    }

    showModal() {
        this.modalBtn.forEach((btn) => {

            btn.addEventListener('click', () => {
                let popup = document.querySelector(btn.getAttribute('data-popup'));
                popup.style.display = 'flex';
            });
            
        });

        this.modalWindow.forEach((bg) => {
            bg.addEventListener('click', (e) => {
                let target = e.target;
    
                if (target.tagName === 'IMG'
                 || target.tagName === 'A'
                 || target.classList.contains('close-btn')
                 || target.closest('.overlay')) {
    
                    bg.style.display = 'none';
    
                }
            });
        });
    }
}

export default ModalWindows;