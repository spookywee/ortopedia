let promoSlides = document.querySelectorAll('.promo-slider__slide');
let promoLeftArrow = document.querySelector('.promo-slider__togle-left');
let promoRightArrow = document.querySelector('.promo-slider__togle-right');
let current = 0;
let priceListCurrent = 0;
let staffCurrent = 0;
let promoDots = document.querySelectorAll('.promo-slider__dot');
let priceDots = document.querySelectorAll('.price-list__button');

let menuLogo = document.querySelector(".phone__menu_button");
let menuClose = document.querySelector(".phone__menu_button_close");
let navMenu = document.querySelector(".mobile-menu");

function menuOpen(){
  menuLogo.addEventListener("click", function(){
    navMenu.style.display = "list-item";
    menuLogo.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", function(){
    navMenu.style.display = "none";
    menuLogo.style.display = "block";
    menuClose.style.display = "none";
  });
}

menuOpen();

function slider(slides, counter) {
  for (let i = 0; i<slides.length; i++) {
    slides[i].classList.add('shide');
    promoDots[i].classList.remove('promo-slider__dot--active');
  }
  slides[counter].classList.remove('shide');
  promoDots[counter].classList.add('promo-slider__dot--active');
}

function priceSlider(slides, counter) {
  for (let i = 0; i<slides.length; i++) {
    slides[i].classList.add('shide');
    priceDots[i].classList.remove('price-list__button--active');
  }
  slides[counter].classList.remove('shide');
  priceDots[counter].classList.add('price-list__button--active');
}

function staffSlider(slides, counter) {
  for (let i = 0; i<slides.length; i++) {
    slides[i].classList.add('shide');
  }
  slides[counter].classList.remove('shide');
}


// кликабельные точки
function dotsClick(){
  for (let i = 0; i<promoDots.length; i++){
    promoDots[i].addEventListener('click', function(){
      slider(promoSlides, i);
    });
  }
}

// пролистывание списка услуг
function buttonPriceSlider(){

  for (let i = 0; i<priceDots.length; i++){
    priceDots[i].addEventListener('click', function(){
      priceSlider(priceListSlides, i);
    });
  }
}

buttonPriceSlider();
dotsClick();

window.onload = setInterval(function eventFire(el = promoRightArrow, etype = 'click'){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}, 5000);

promoLeftArrow.addEventListener('click', function(){
  if(current - 1 == -1) {
    current = promoSlides.length-1;
  }
  else {
    current--;
  }
  slider(promoSlides, current);
})

promoRightArrow.addEventListener('click', function(){
  if(current + 1 == promoSlides.length) {
    current = 0;
  }
  else {
    current++;
  }
  slider(promoSlides, current);
})


let additionalText = document.querySelector('.about-us__additional-text');
let buttonMore = document.querySelector('.button-more');
let textImage = document.querySelector('.about-us__image')

buttonMore.addEventListener('click', function(){
  additionalText.classList.remove('shide');
  buttonMore.classList.add('shide');
  textImage.classList.add('about-us__add-image');
})

let priceListButtonLeft = document.querySelector('.price-list__button-left');
let priceListButtonRight = document.querySelector('.price-list__button-right');
let priceListSlides = document.querySelectorAll('.price-list__slide');

priceListButtonLeft.addEventListener('click', function(evt){
  evt.preventDefault();
  if(priceListCurrent - 1 == -1) {
    priceListCurrent = priceListSlides.length-1;
  }
  else {
    priceListCurrent--;
  }
  priceSlider(priceListSlides, priceListCurrent);

})

priceListButtonRight.addEventListener('click', function(evt){
  evt.preventDefault();
  if(priceListCurrent + 1 == priceListSlides.length) {
    priceListCurrent = 0;
  }
  else {
    priceListCurrent++;
  }
  priceSlider(priceListSlides, priceListCurrent);
})

let staffButtonLeft = document.querySelector('.our-staff__left-arrow');
let staffButtonRight = document.querySelector('.our-staff__right-arrow');
let staffSlides = document.querySelectorAll('.staff-slider__slide');


staffButtonLeft.addEventListener('click', function(evt){
  evt.preventDefault();
  if(staffCurrent - 1 == -1) {
    staffCurrent = staffSlides.length-1;
  }
  else {
    staffCurrent--;
  }
  staffSlider(staffSlides, staffCurrent);
})

staffButtonRight.addEventListener('click', function(evt){
  evt.preventDefault();
  if(staffCurrent + 1 == staffSlides.length) {
    staffCurrent = 0;
  }
  else {
    staffCurrent++;
  }
  staffSlider(staffSlides, staffCurrent);
})
