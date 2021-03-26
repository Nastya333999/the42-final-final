

$(document).ready(function(){
    $('.slider').slick({
        arrows: true, // стрелки, true есть false - стрелок нет
        dots: true, //точки true есть false - точек нет
        adaptiveHeight: true,//высота посдтраивается автоматически под конкретный слайд
        slidesToShow: 1,//каличество слайдов за раз на треке
        slidesToScroll: 1, //количество пролистываемых слайдеров за раз
        speed: 1000,// скорость пролистывания слайдов в милисекундах (1 сек)
        easing:'ease', // тип анимации
        infinie: true, //бесконечность слайдера true - бесконечная
        initialSlide: 2,// с какого слайда стартует
        autoplay:false, //автопроигрывание слайдов
        autoplaySpeed:1500, // скорость авто проигрывание
        pauseOnFocus: true, //пауза когда кликнули на слайдер
        pauseOnHover: true, // пауза когда навели на слайдер 
        pauseOnDotsHover: true, //пауза когда навели на точку 
        draggable: false, // нельзя мышкой листать слайдер (не точками а картинками)
        swipe:true, //нельзя на мобилках листать слайдер
        touchTheshold:5, // слайдер делится на кол-во частей и показывает сколько свайпить
        touchMove: true, // включает все возможности тач скрина
        waitForAnimate: true, // если клацать по стрелочкам то будет прокрутка. анимация начинается только по окончании прошлой анимации false - это выключено
        centerMode: false, // главный слайд всегла по центру. true - вкл
        variableWidth: false,// убирает автоматические присваивание ширине слайда. ширина = контенту
        rows: 1, //количество рядов
        slidesPerRow: 3, //количество слайдов в ряду 
        vertical: false, // делает вертикальный слайдер. но в слайдере нужно убрать дисплей флекс
        verticalSwiping: false, // включает вертикальную прокрутку
        fade:false, //один слайд заменяется другим (только 1 слайд в ленте)
        resposive:[ // медиазапросы 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slider-two').slick({
        arrows: true, // стрелки, true есть false - стрелок нет
        dots: false, //точки true есть false - точек нет
        adaptiveHeight: true,//высота посдтраивается автоматически под конкретный слайд
        slidesToShow: 6,//каличество слайдов за раз на треке
        slidesToScroll: 1, //количество пролистываемых слайдеров за раз
        speed: 1000,// скорость пролистывания слайдов в милисекундах (1 сек)
        easing:'ease', // тип анимации
        infinie: true, //бесконечность слайдера true - бесконечная
        initialSlide: 1,// с какого слайда стартует
        autoplay:false, //автопроигрывание слайдов
        autoplaySpeed:1500, // скорость авто проигрывание
        pauseOnFocus: true, //пауза когда кликнули на слайдер
        pauseOnHover: true, // пауза когда навели на слайдер 
        pauseOnDotsHover: true, //пауза когда навели на точку 
        draggable: false, // нельзя мышкой листать слайдер (не точками а картинками)
        swipe:true, //нельзя на мобилках листать слайдер
        touchTheshold:5, // слайдер делится на кол-во частей и показывает сколько свайпить
        touchMove: true, // включает все возможности тач скрина
        waitForAnimate: true, // если клацать по стрелочкам то будет прокрутка. анимация начинается только по окончании прошлой анимации false - это выключено
        centerMode: false, // главный слайд всегла по центру. true - вкл
        variableWidth: false,// убирает автоматические присваивание ширине слайда. ширина = контенту
        rows: 1, //количество рядов
        slidesPerRow: 1, //количество слайдов в ряду 
        vertical: false, // делает вертикальный слайдер. но в слайдере нужно убрать дисплей флекс
        verticalSwiping: false, // включает вертикальную прокрутку
        fade:false, //один слайд заменяется другим (только 1 слайд в ленте)
        resposive:[ // медиазапросы 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:3
                },

                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                },
                
                breakpoint: 425,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
});
$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoWidth:false,
        navText: ['<img src="./img/left-owl.svg" alt="">', '<img src="./img/righr.svg" alt="">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
});
