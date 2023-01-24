const button = document.querySelector('.wrap_btn');
const header = document.querySelector('.header');
const arrow_wrap = document.querySelector('.arrow_wrap');
const h1main = document.querySelector('.header_h1');
const wrpbtn = document.querySelector('.wrap_btn');
const main_container = document.querySelector('.main__container_createproject');
const main__container2 = document.querySelector('.main__container');
const path_visible = document.querySelector('.path_visible');
const select__item = document.querySelector('.select__item');
const path_fix = document.querySelector('.path_fix');
const path_fix2 = document.querySelector('.path_fix2');
const path_ok = document.querySelector('.path_ok');
const containerflex = document.querySelector('.container-flex');
const containerflexfix = document.querySelector('.container-flex-fix');
const main__container_fix = document.querySelector('.main__container_fix')

button.addEventListener('click', updateButton);


function updateButton() {
   header.classList.toggle("header_none");
   arrow_wrap.classList.toggle("arrow_wrap_fix");
   h1main.classList.toggle("header_fix");
   wrpbtn.classList.toggle("wrap_btn_fix");
   main_container.classList.toggle("main_container_fix");
   containerflex.classList.toggle("container-flex-fix");
   main__container2.classList.toggle("main__container_fix");
}

select__item.addEventListener('click', fixPath);

function fixPath() {
   path_fix.classList.toggle("path_visible");
   path_fix2.classList.toggle("path_ok");
}


jQuery(($) => {
    $(".select").on("click", ".select__head", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).next().fadeOut();
        } else {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
            $(this).addClass("open");
            $(this).next().fadeIn();
        }
    });

    $(".select").on("click", ".select__item", function () {
        $(".select__head").removeClass("open");
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
        }
    });

});

jQuery(($) => {

    // Уменьшаем на 1
    $(document).on("click", ".input-number__bottom", function () {
        let total = $(this).prev().prev();
        if (total.val() > 0) {
            total.val(+total.val() - 1);
        }
    });

    // Увеличиваем на 1
    $(document).on("click", ".input-number__top", function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });

    // Запрещаем ввод текста
    $(document).on("input", ".input-number__input", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
    });

    // Запрещаем ввод текста js
    // document.querySelectorAll(".inputTN__input").forEach(function (el) {
    //     el.addEventListener("input", function () {
    //         this.value = this.value.replace(/[^d]/g, "");
    //     });
    // });

});

document.getElementById("clearButton").onclick = function(e) {
  $("#sel__inv").html("Не выбрано");
}

window.addEventListener('resize', function(event) {
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main__container2.style.width = rightcol + 'px';
  var main__width = (main__container2.style.width = rightcol + 'px');
  /*console.log(main__width);*/
}, true);



wrpbtn.addEventListener('click', handleClick);



function handleClick() {

  console.log('click')
  var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main__container2.style.width = rightcol + 'px';
  var main__width = (main__container2.style.width = rightcol + 'px');
  console.log(main__width);


}

document.addEventListener("DOMContentLoaded", ready);
function ready() {
    var containerflex = document.querySelector('.container-flex').offsetWidth;
  console.log(containerflex);
  var headerwidth = document.querySelector('.header').offsetWidth;
  var rightcol = containerflex - headerwidth - 50;
  main__container2.style.width = rightcol + 'px';
  var main__width = (main__container2.style.width = rightcol + 'px');
  console.log(main__width);
  }