/* $(document).ready(function() {
    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        adaptiveHeight: true
    });

    // Auto-advance to the next slide when a radio button is selected
    $('.single-item').on('change', 'input[type="radio"]', function() {
        $('.single-item').slick('slickNext');
    });

    // Show the "Get my book match!" button only on the last slide
    $('.single-item').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide === slick.slideCount - 1) {
            $('#gonext').fadeIn();
        } else {
            $('#gonext').fadeOut();
        }
    });
}); */

$(document).ready(function() {
    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,          
        dots: true,             
        infinite: false,
        adaptiveHeight: true,
        autoplay: false    
    });

    // Auto-advance when a radio button is selected
    $('.single-item').on('change', 'input[type="radio"]', function() {
        $('.single-item').slick('slickNext');
    });

    // Show "Get my book match!" button only at the end
    $('.single-item').on('afterChange', function(event, slick, currentSlide){
        if (currentSlide === slick.slideCount - 1) {
            $('#gonext').fadeIn();
        } else {
            $('#gonext').fadeOut();
        }
    });
});
