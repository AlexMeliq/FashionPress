$(document).ready(function(){
    $('.sliderFull div.slider').bxSlider({
        minSlides: 1,
        moveSlides: 1,
        pager: false,
        auto: true,
        autoDelay: 1000,
        controls: true,
        nextText: '',
        prevText: '',
        buildPager: function(slideIndex) {
            return '';
        }
    });
});