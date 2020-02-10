$(document).ready(function () {
    $('.coaches__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
$(document).ready(function () {
    $(document).mouseup(function (e) { 
        var div = $(".navbar"),
            nav = $('#navbarNavAltMarkup');
        if (!div.is(e.target) && div.has(e.target).length === 0) { 
            nav.removeClass('show');
        }
    });
});