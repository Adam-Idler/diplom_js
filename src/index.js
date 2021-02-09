'use strict';

import Gift from './modules/gift';
import Burger from './modules/burger';
import ArrowBtn from './modules/arrowBtn';
import Calculator from './modules/calculator';
import DropDown from './modules/dropDownMenu';
import ModalWindows from './modules/modalWindows';


// Подарок
const gift = new Gift();

gift.giftAppear();

// Фиксация Бургер Меню 
const burger = new Burger();

burger.burgerFix();

// Появление стрелки
const arrow = new ArrowBtn();

arrow.getVisible();

// Выпадающее меню 
const dropDown = new DropDown();

dropDown.drop();

// Модальные окна
const modalWindow = new ModalWindows();

modalWindow.showModal();

// Калькулятор
const calculator = new Calculator();

calculator.calc();