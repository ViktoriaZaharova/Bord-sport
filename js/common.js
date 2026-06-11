$('[name="phone"]').mask('+7 (999) 999-99-99');

$(function () {
    const $track = $('.news-ticker__track');
    $track.append($track.html());
});

// animate scroll to section
$('.go_to').on('click', function (e) {
    e.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
});

// btn scroll top
$('.btn-scroll-top').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 800);
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