$('[name="phone"]').mask('+7 (999) 999-99-99');

$(function () {
    const $track = $('.news-ticker__track');
    $track.append($track.html());
});

// animate scroll to section
$('.go_to').on('click', function (e) {
    e.preventDefault();

    const target = $(this).attr('href');

    if ($(window).width() < 1570) {
        $('.btn-burger').trigger('click');
    }

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});

// btn scroll top
$('.btn-scroll-top').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 800);
});


const galleryImages = [];

$('.gallery-slider .slide img').each(function () {
    galleryImages.push($(this).attr('src'));
});

$('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    arrows: true,
    fade: true,
    prevArrow: $('.gallery-slider-prev'),
    nextArrow: $('.gallery-slider-next')
});

function updatePreview(currentIndex, totalSlides) {

    let nextIndex = currentIndex + 1;

    if (nextIndex >= totalSlides) {
        nextIndex = 0;
    }

    const nextImage = galleryImages[nextIndex];

    $('.gallery-preview img').fadeOut(200, function () {

        $(this)
            .attr('src', nextImage)
            .fadeIn(300);

    });

    $('.gallery-preview a').attr('href', nextImage);
}

updatePreview(0, galleryImages.length);

$('.gallery-slider').on('beforeChange', function (event, slick, currentSlide) {
    updatePreview(
        currentSlide,
        slick.slideCount
    );
});

$('.events-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    speed: 800,
    cssEase: 'ease',
    arrows: true,
    dots: false,
    prevArrow: `
        <button type="button" class="events-arrow events-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10L14 4L14 16L6 10Z"/>
</svg>

        </button>
    `,

    nextArrow: `
        <button type="button" class="events-arrow events-next">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10L10 4L10 16L18 10Z"/>
</svg>

        </button>
    `,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

Fancybox.bind("[data-fancybox='gallery']", {
    
});

function activateScheme(id) {

    $('.scheme-marker').removeClass('active');
    $('.scheme-info__item').removeClass('active');

    $('.scheme-marker[data-id="' + id + '"]').addClass('active');
    $('.scheme-info__item[data-id="' + id + '"]').addClass('active');
}

$(document).on('mouseenter', '.scheme-info__item', function () {

    activateScheme($(this).data('id'));

});

$(document).on('mouseenter', '.scheme-marker', function () {

    activateScheme($(this).data('id'));

});

$(document).on('mouseleave', '.scheme-info__item, .scheme-marker', function () {

    $('.scheme-marker').removeClass('active');
    $('.scheme-info__item').removeClass('active');

});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('.nav-menu').fadeToggle();
    $('.overlay').fadeToggle();
});

function initAboutSlider() {
    if ($(window).width() < 1200) {

        if (!$('.about-slider').hasClass('slick-initialized')) {
            $('.about-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                fade: true,
                infinite: true,
                prevArrow: `
        <button type="button" class="events-arrow events-prev about-slider-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10L14 4L14 16L6 10Z"/>
</svg>

        </button>
    `,

                nextArrow: `
        <button type="button" class="events-arrow events-next about-slider-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10L10 4L10 16L18 10Z"/>
</svg>

        </button>
    `,
            });
        }

    } else {

        if ($('.about-slider').hasClass('slick-initialized')) {
            $('.about-slider').slick('unslick');
        }

    }
}

$(document).ready(function () {
    initAboutSlider();
});

$(window).on('resize', function () {
    initAboutSlider();
});