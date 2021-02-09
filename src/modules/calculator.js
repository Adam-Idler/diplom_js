'use strict';

class Calculator {
    constructor() {
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
                if (card.checked) this.total.innerText = card.getAttribute(`data-price-${clubName}`);
            }))
        });
    }
}

export default Calculator;