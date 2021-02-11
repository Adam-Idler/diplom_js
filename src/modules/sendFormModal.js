'use strict';

class sendFormModal {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.popup = document.querySelectorAll('.popup');
        this.thanksBlock = document.getElementById('thanks');
    }

    postData(form, body) {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    sendAjax() {
        const loadingAnim = document.createElement('div');
        loadingAnim.style.cssText = ` 
            width: 3em;
            height: 3em;
            margin: auto;
            background-color: #337ab7;
            border-radius: 100%;
            animation: sk-spinner-pulse 1.0s infinite ease-in-out;
        `;

        loadingAnim.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1.0)',
              opacity: '0' }
            ],
            {
                duration: 1000,
              iterations: Infinity
        });
        
        this.forms.forEach( (form) => {
            let checkbox = form.querySelector('[type="checkbox"]'),
                name = form.querySelector('[name="name"]');

            form.addEventListener('submit', (event) => {
                try {
                    event.preventDefault();
                    if (name && name.classList.contains('wrong_input')) {
                        return;
                    }
                    
                    if (checkbox && !checkbox.checked) {
                        throw new notChecked();
                    } else if (form.querySelector('p > label')) {
                        form.querySelector('p > label').classList.remove('wrong_rights');
                    }
                    
                    if (form.id == 'footer_form') {
                        let checked = [...form.querySelectorAll('[type="radio"]')].some((radio) => radio.checked);
                        
                        if (!checked) {
                            throw new Error();
                        } else {
                            form.querySelector('.choose-club').classList.remove('wrong_club');
                        }
                    }

                    for (let i = 0, len = form.elements.length; i < len; ++i) {
                        form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = true : form.elements[i].readOnly = true;
                    }
                    
                    form.appendChild(loadingAnim);
                    const formPhone = form.querySelector('[name="phone"]');
                    formPhone.value = formPhone.value.replace(/\D/g, '');
                    
                    const formData = new FormData(form);
                    let body = {};
                    formData.forEach((val, key) => {
                        body[key] = val;
                    });
                    
                    this.postData(form, body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        loadingAnim.remove();
    
                        for (let i = 0, len = form.elements.length; i < len; ++i) {
                            form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;
                        }
    
                        this.popup.forEach((item) => item.style.display = 'none');
                        this.thanksBlock.style.display = 'block';
                        
                    })
                    .catch(error => {
                        loadingAnim.remove();
    
                        for (let i = 0, len = form.elements.length; i < len; ++i) {
                            form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;
                        }
    
                        this.popup.forEach((item) => item.style.display = 'none');
                        errorBlock.style.display = 'block';
                    });
                    form.reset();
                } catch(err) {              
                    if (err.name == 'ReferenceError') {
                        form.querySelector('p > label').classList.add('wrong_rights');
                    } else if (err.name == 'Error') {
                        form.querySelector('.choose-club').classList.add('wrong_club');
                    } else {
                        throw err;
                    }
                }
            });
        });
    }
}

export default sendFormModal;