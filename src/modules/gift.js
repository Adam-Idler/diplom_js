'use strict';

class Gift {
    giftAppear() {
        const giftWindow = document.getElementById('gift'),
              giftBtn = document.querySelector('.fixed-gift');
        
        giftBtn.addEventListener('click', () => {
            giftWindow.style.display = 'block';
            giftBtn.style.display = 'none';
        });

        giftWindow.addEventListener('click', (e) => {
            let target = e.target,
                closeBtn = target.classList.contains('close-btn') ? true : false;
            target = target.closest('.form-content');
            if (!target || closeBtn) {
                giftWindow.style.display = 'none';
            }
        });
    }
}

export default Gift;