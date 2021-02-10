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
                target.value = target.value.replace(/[^а-яё\s]{2,15}/gi, '');
            }
            if (target.getAttribute('name') === 'phone') {
                if (target.value[1] === '7' || target.value[0] === '7' ) maskPhone('input[name="phone"]', '+_ (___) ___-__-__');
                else if (target.value[0] === '8') maskPhone('input[name="phone"]', '_ (___) ___-__-__');
                else if (target.value[0] === '2') maskPhone('input[name="phone"]', '___-__-__');
            }
            });
        });
      }
}

export default Validate;