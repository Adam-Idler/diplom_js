'use strict';

class Calculator {
    constructor() {
        this.promo = document.getElementById('promo');
        this.form = document.getElementById('card_order');
        this.total = document.getElementById('price-total');
        this.cards = this.form.querySelectorAll('[name="card-type"]');
        this.clubs = this.form.querySelectorAll('[name="club-name"]');
    }

    calc() {
        this.form.addEventListener('change', () => {
            let clubName;

            this.clubs.forEach((club) => {
                if (club.checked) clubName = club.value;
            });

            this.cards.forEach((card => {
                if (card.checked) {
                    let price = card.getAttribute(`data-price-${clubName}`);
                    this.promo.value === 'ТЕЛО2019' ? price -= price*0.3 : '';
                    this.total.innerText = Math.round(price);
                } 
            }))
        });
    }
}

export default Calculator;