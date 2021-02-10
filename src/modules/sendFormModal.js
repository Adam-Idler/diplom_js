'use strict';

class sendFormModal {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.popup = document.querySelectorAll('.popup');
        this.errorBlock = document.getElementById('error');
        this.errorText = error.querySelector('.error-text');
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
        console.log(this.errorBlock);
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
            let checkbox = form.querySelector('[type="checkbox"]');

            form.addEventListener('submit', (event) => {
                try {
                    event.preventDefault();
                    if (checkbox && !checkbox.checked) {
                        throw new Error('Дайте согласие на обработку персональных данных');
                    }

                    if (form.id == 'footer_form') {
                        let checked = [...form.querySelectorAll('[type="radio"]')].some((radio) => radio.checked);

                        if (!checked) throw new Error('Выберите удобный для Вас клуб');
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
                    this.errorText.innerText = err.message;

                    this.popup.forEach((item) => item.style.display = 'none');
                    this.errorBlock.style.display = 'block';
                }
            });
            
        });
    }
}

export default sendFormModal;