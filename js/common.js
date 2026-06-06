$('[name="phone"]').mask('+7 (999) 999-99-99');

$(function() {
    const $track = $('.news-ticker__track');
    $track.append($track.html());
});

// animate scroll to section
$('.go_to').on('click', function(e) {
    e.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
});

