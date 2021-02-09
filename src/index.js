'use strict';

import Gift from './modules/gift';
import Burger from './modules/burger';
import ArrowBtn from './modules/arrowBtn';
import DropDown from './modules/dropDownMenu';
<<<<<<< HEAD
import ModalWindows from './modules/modalWindows';

// Подарок
const gift = new Gift();

=======

// Подарок
const gift = new Gift();
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b
gift.giftAppear();

// Фиксация Бургер Меню 
const burger = new Burger();

burger.burgerFix();
<<<<<<< HEAD
=======
burger.showPopup();
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

// Появление стрелки
const arrow = new ArrowBtn();

arrow.getVisible();

// Выпадающее меню 
const dropDown = new DropDown();

<<<<<<< HEAD
dropDown.drop();

// Модальные окна
const modalWindow = new ModalWindows();

modalWindow.showModal();
=======
dropDown.drop();
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b
