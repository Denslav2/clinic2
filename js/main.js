/*OWL CAROUSEL*/
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 120, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 8000, //Время смены слайда
        navText: ['<i class="ti-angle-left styleowl" aria-hidden="true"></i>', '<i class="ti-angle-right styleowl2" aria-hidden="true"></i>'],
        /*navText: ['<div class="owl__arrow-l"aria-hidden="true"></div>', '<div class="owl__arrow-r"aria-hidden="true"></div>'],*/
        autoWidth: true,
        items: 1
    });
});