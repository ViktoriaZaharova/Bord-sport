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

// $('.gallery-slider-max').slick({
//     slidesToShow: 1,
//     infinite: true,
//     speed: 800,
//     arrows: false,
//     fade: true,
//     asNavFor: ".gallery-slider-preview",
// })

// $('.gallery-slider-preview').slick({
//     slidesToShow: 1,
//     infinite: true,
//     speed: 800,
//     arrows: true,
//     fade: true,
//     focusOnSelect: true,
//     asNavFor: ".gallery-slider-max",
//     prevArrow: `
//         <button type="button" class="slick-arrow gallery-slider-prev">
//             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// <path d="M6 10L14 4L14 16L6 10Z"/>
// </svg>

//         </button>
//     `,

//     nextArrow: `
//         <button type="button" class="slick-arrow gallery-slider-next">
//             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// <path d="M18 10L10 4L10 16L18 10Z"/>
// </svg>

//         </button>
//     `,
// })

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

    $('.gallery-preview img').fadeOut(200, function() {

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
    // Your custom v5 options here
    Infinite: true,
    Images: {
        protected: true
    }
});