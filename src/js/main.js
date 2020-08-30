$(document).ready(function () {
    // $('.slick-slider').slick({
    //     centerMode: true,
    //     slidesToShow: 4,
    //     infinite: true,
    //     autoplay: true,
    // })
    $('.why-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            }
        ]
    })
    $('.reviews-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            }
        ]
    })
    $('.get-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            }
        ]
    })
})

$(document).ready(function () {
    $('.text-toggle').click(function () {
        $(this).siblings('.text').toggleClass('hide');
        if ($(this).siblings('.text').hasClass('hide')) {
            $(this).html('показать полностью');
        } else {
            $(this).html('скрыть');
        }
        return false;
    });
})

// slide infinity
$(document).ready(function () {
    function runLiner(el) {
        var _w = $(el).width() / 3
        el.animate({
            left: '-' + _w + 'px'
        }, 40000, "linear", function () {
            el.css('left', 0)
            runLiner(el)
        })
    }

    $('.b-marquee-line__flow-block').each(function () {
        var _w = 0;
        $(this).find('.b-marquee-line__flow-item').each(function () {
            var _mr = getComputedStyle(this)
            _w += $(this).width() + parseFloat(_mr["margin-right"]);
        })
        $(this).parent().css('width', _w * 3)
        runLiner($(this).parent())
    })
})
