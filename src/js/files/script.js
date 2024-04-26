// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// TODO Кнопка скролу вверх
const btnUp = {
  el: document.querySelector('.scroll-up'),
  show() {
    // видалення у кнопки класа scroll-up--hide
    this.el.classList.remove('scroll-up--hide');
  },
  hide() {
    // додавання до кнопки класу scroll-up--hide
    this.el.classList.add('scroll-up--hide');
  },
  addEventListener() {
    // при здійснення прокрутки контенту сторінки
    window.addEventListener('scroll', () => {
      // визначення величини прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // якщо строніка прокручена у низ більше ніж на 400px, то кнопку відображається, інакше за замовчування вона display: none;
      scrollY > 400 ? this.show() : this.hide();
    });
    // при натискані на кнопку .scroll-up
    document.querySelector('.scroll-up').onclick = () => {
      // пепреміщеня на початок сторінки
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


// TODO ПЛАВНИ СКРОЛЛІНГ ПО ЯКОРЯХ

// document.addEventListener("DOMContentLoaded", function() {
//   if (window.location.hash) {
//     const blockID = window.location.hash.substring(1);
//        const targetElement = document.getElementById(blockID);
//      if (targetElement) {
//          targetElement.scrollIntoView({
//              behavior: "auto",
//              block: "start"
//          });
//      } 
//   }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const menuIcon = document.querySelector('.menu__icon');
//   const submenuLinks = document.querySelectorAll('.submenu__link');

//   if (menuIcon) {
//     menuIcon.addEventListener('click', function() {
//       document.documentElement.classList.toggle('menu-open');
//     });
//   }

//   submenuLinks.forEach(function(link) {
//     link.addEventListener('click', function() {
//       document.documentElement.classList.remove('menu-open');
//     });
//   });
// });


// TODO ПІДСВІТКА АКТИВНОЇ СТОРІНКИ ЗА ДОПМОГОЮ ЕЛЕМЕНТУ МЕНЮ

const currentPage = window.location.pathname.split('/').pop();

  const menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });


//TODO Перебір form регистрації

const wrapper = document.querySelector('.popup__content');

const logLink = document.getElementById('login');

const regLink = document.getElementById('register');

regLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

logLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});


//eye password
const inputPass = document.getElementById('client-blank__cell-item-pass');
const iconPass = document.getElementById('pass-icon');
iconPass.addEventListener('click', () => {

	if (inputPass.getAttribute('type') === "password") {
inputPass.setAttribute('type', 'text');
} else {
inputPass.setAttribute('type', 'password');
} 
});

const inputPassReg = document.getElementById('client-blank__cell-item-pass-reg');
const iconPassReg = document.getElementById('pass-icon-reg');
iconPassReg.addEventListener('click', () => {

	if (inputPassReg.getAttribute('type') === "password") {
inputPassReg.setAttribute('type', 'text');
} else {
inputPassReg.setAttribute('type', 'password');
} 
});

//TODO Коди стран

document.addEventListener('DOMContentLoaded', function() {
  var input = document.querySelector("#registration__phone");
  var iti = intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function(callback) {
          fetch("https://ipinfo.io/", {
              method: "GET"
          }).then(function(response) {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Failed to fetch country");
          }).then(function(data) {
              callback(data.country);
          }).catch(function() {
              callback("us"); // Default to United States
          });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });
});