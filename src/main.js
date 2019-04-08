var slideWidth = 300;  //Ширина одного слайда
var sliderTimer = setInterval(nextSlide, 1000);   //Интервал смены кадров

/*Устанавливаем ширину списка
*равную произведению ширины одного слайда на общее кол-во слайдов
*чтобы он вытянулся в одну строку*/
$('.slider').width($('.slider').children().length * slideWidth);
/*задаем временной интервал*/

/*функция, сменяющая слайды каждую секунду*/
function nextSlide() {
    var currentSlide = parseInt($('.slider').data('current'));  //определяем текущий слайд
    currentSlide++;  //увеличиваем его значение
    if (currentSlide >= $('.slider').children().length) { //перематываем к началу, если слайд последний
        currentSlide = 0;
    }
    /*передвигаем список и сохраняем значение текущего слайда*/
    $('.slider').animate({left: -currentSlide * slideWidth}, 300).data('current', currentSlide);
}


$('.visible').hover(function () {
    clearInterval(sliderTimer);
}, function () {
    sliderTimer = setInterval(nextSlide, 1000);
});
