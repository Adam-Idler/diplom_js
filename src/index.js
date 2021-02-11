'use strict';

import Gift from './modules/gift';
import Burger from './modules/burger';
import Slider from './modules/sliders'
import Validate from './modules/validate';
import ArrowBtn from './modules/arrowBtn';
import Calculator from './modules/calculator';
import DropDown from './modules/dropDownMenu';
import ModalWindows from './modules/modalWindows';
import SendFormModal from './modules/sendFormModal';



// Подарок
const gift = new Gift();

document.getElementById('gift') ? gift.giftAppear() : '';

// Калькулятор
const calculator = new Calculator();

document.getElementById('price-total') ? calculator.calc() : '';

// Фиксация Бургер Меню 
const burger = new Burger();

burger.render();

// Появление стрелки
const arrow = new ArrowBtn();

arrow.getVisible();

// Выпадающее меню 
const dropDown = new DropDown();

dropDown.drop();

// Модальные окна
const modalWindow = new ModalWindows();

modalWindow.showModal();

// Отправка форм в модальных окнах
const sendFormModal = new SendFormModal();

sendFormModal.sendAjax();

// Валидация форм 
const validate = new Validate();

validate.init();

// Слайдеры
const sliders = new Slider();

sliders.mainSliderActivate();