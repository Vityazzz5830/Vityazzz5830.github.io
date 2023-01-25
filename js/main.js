const button = document.querySelector('.wrap_btn');
const header = document.querySelector('.header');
const headernone = document.querySelector('.header_none');
const arrow_wrap = document.querySelector('.arrow_wrap');
const h1main = document.querySelector('.header_h1');
const wrpbtn = document.querySelector('.wrap_btn');
const main__container = document.querySelector('.main__container');
const main__container_fix = document.querySelector('.main__container_fix');
const contflex = document.querySelector('.main__container');
/*const main__container_fix = document.querySelector('.main__container_fix');
*/
const buttonmobile = document.querySelector('.wrap_btn_mobile');
const wrap_btn_mobile = document.querySelector('.wrap_btn_mobile');
const wrap_btn_mobile_fix = document.querySelector('.wrap_btn_mobile_fix');
const slider_main = document.querySelector('.slider_main');

button.addEventListener('click', updateButton);


function updateButton() {
  header.classList.toggle("header_none");
  arrow_wrap.classList.toggle("arrow_wrap_fix");
  h1main.classList.toggle("header_fix");
  wrpbtn.classList.toggle("wrap_btn_fix");
  main__container.classList.toggle("main__container_fix");

}
/*
//скрытие header 768-
buttonmobile.addEventListener('click', updateButtonmobile);
function updateButtonmobile() {
  header.classList.toggle("header_none");
  wrap_btn_mobile.classList.toggle("wrap_btn_mobile_fix");
  wrpbtn.classList.toggle("wrap_btn_fix");
}
*/
//расчет ширины main__container при ресайзе окна
window.addEventListener('resize', function(event) {
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main__container.style.width = rightcol + 'px';
  var main__width = (main__container.style.width = rightcol + 'px');
}, true);


//расчет ширины main__container при нажатии кнопки меню
$("button").on('click', function(event) {
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log("111");
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main__container.style.width = rightcol + 'px';
  var main__width = (main__container.style.width = rightcol + 'px');
});




//Инициализация слайдера
$('.slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  dots: false,
  horizontalSwiping: true,
  edgeFriction: 0.15,
  prevArrow: $('.mainmenu__arrow-left'),
  nextArrow: $('.mainmenu__arrow-right'),
});

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  var slider_main__width = document.querySelector('.slider_main').offsetWidth;
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  var headerwidth = document.querySelector('.header').offsetWidth;

  if (document.documentElement.clientWidth > 768 ) {
    var rightcol = containerflex - headerwidth - 50;
    console.log(rightcol + 'main');
    var sliderfix = slider_main__width + 1;
    slider_main.style.width = rightcol + 'px';
    console.log(slider_main.style.width);
  } 
  else if (document.documentElement.clientWidth < 769) {
    var rightcol = containerflex - 50;
    console.log(rightcol + 'main');
    var sliderfix = slider_main__width + 1;
    slider_main.style.width = rightcol + 'px';
    console.log(slider_main.style.width);
  } 
}




//обновление слайдера при изменении окна
/*async function elementUpdate(selector) {
  try {
    var html = await (await fetch(location.href)).text();
    var newdoc = new DOMParser().parseFromString(html, 'text/html');
    document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
    console.log('Элемент '+selector+' был успешно обновлен');
    return true;
  } catch(err) {
    console.log('При обновлении элемента '+selector+' произошла ошибка:');
    console.dir(err);
    return false;
  }
}

elementUpdate('div.container-flex');*/