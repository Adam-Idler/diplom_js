'use strict';

class Validate {
    constructor() {
        this.textForm = document.querySelectorAll('form');
        this.namesInput = document.querySelectorAll('input[name="name"]');
    }

    init() {
        this.validateInputText();

        this.namesInput.forEach(elem => {
            elem.onblur = (e) => {
              if (e.target.value.length < 2) {
                e.target.value = '';
              }
            };
        });
    }

    validateInputText() {
        this.textForm.forEach( (form) => {
            form.addEventListener('input', e => {
            const target = e.target;
            if (target.getAttribute('name') === 'name') {
                if (target.value.match(/[^а-яё\s]{1,15}/gi)) {
                    target.classList.add('wrong_input');
                } else {
                    target.classList.remove('wrong_input');
                }
            }
            if (target.getAttribute('name') === 'phone') {
                if (target.value.match(/[^0-9\+\-\s\(\)]/gi)) {
                    target.classList.add('wrong_input');
                } else {
                    target.classList.remove('wrong_input');
                }
                if (target.value[1] === '7' || target.value[0] === '7' ) maskPhone('input[name="phone"]', '+_ (___) ___-__-__');
                else if (target.value[0] === '8') maskPhone('input[name="phone"]', '_ (___) ___-__-__');
                else if (target.value[0] === '2') maskPhone('input[name="phone"]', '___-__-__');
            }
            });
        });
      }
}

export default Validate;