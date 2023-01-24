const button = document.querySelector('.wrap_btn');
const header = document.querySelector('.header');
const arrow_wrap = document.querySelector('.arrow_wrap');
const h1main = document.querySelector('.header_h1');
const wrpbtn = document.querySelector('.wrap_btn');
const main_container = document.querySelector('.main__container');
const containerflex = document.querySelector('.container-flex');
const containerflexfix = document.querySelector('.container-flex-fix');

button.addEventListener('click', updateButton);


function updateButton() {
   header.classList.toggle("header_none");
   arrow_wrap.classList.toggle("arrow_wrap_fix");
   h1main.classList.toggle("header_fix");
   wrpbtn.classList.toggle("wrap_btn_fix");
   main_container.classList.toggle("main_container_fix");
   containerflex.classList.toggle("container-flex-fix");
   main_container.classList.toggle("main__container_fix");
}

window.addEventListener('resize', function(event) {
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main_container.style.width = rightcol + 'px';
  var main__width = (main_container.style.width = rightcol + 'px');
  /*console.log(main__width);*/
}, true);

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);

  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main_container.style.width = rightcol + 'px';
  var main__width = (main_container.style.width = rightcol + 'px');
  console.log(main__width);
}



wrpbtn.addEventListener('click', handleClick);
function handleClick() {

  console.log('click')
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main_container.style.width = rightcol + 'px';
  var main__width = (main_container.style.width = rightcol + 'px');
  console.log(main__width);


}

//обновление слайдера при изменении окна
async function elementUpdate(selector) {
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

elementUpdate('div.map__container');







function initMap (){
    map = new ymaps.Map("yandexmap", {

    center: [51.137505, 71.412139],
    zoom: 13,
    controls: []
    });
}

function newMetka (){
    var myPlacemark = new ymaps.Placemark([51.137505, 71.412139], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/metka.png',
    iconImageSize: [28, 28],
});
    map.geoObjects.add(myPlacemark); 
    console.log('HI');
}


ymaps.ready(initMap);
ymaps.ready(newMetka);



$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  asNavFor: '.slider-nav',

});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  centerMode: false,
  infinite: false,
  loop: true,
  focusOnSelect: true,
  centerPadding: '0px'
});



 $(".item").fancybox({
        'width'       : 1352,
        'height'      : 744,
        'autoScale'     : false,
        'transitionIn'    : 'none',
        'transitionOut'   : 'none',
        'type'        : 'iframe'
        
      });

























