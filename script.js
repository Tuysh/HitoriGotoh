// Scrolling Effect
$(".scroll").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

$('.animarInicio').each(function () {
    var elementoTop = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var ventanaAltura = $(window).height();

    if (scrollTop + ventanaAltura > elementoTop + 100) {
        var animacion = $(this).data('animacion');
        $(this)
            .css('animation-name', animacion)
            .addClass('animate');
    }
});

$(window).on('scroll', function () {
    $('.animar').each(function () {
        var elementoTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var ventanaAltura = $(window).height();

        var reverseAnimations = {
            'slideInUp': 'slideOutDown',
            'slideInDown': 'slideOutUp',
            'slideInLeft': 'slideOutRight',
            'slideInRight': 'slideOutLeft'
        };

        if (scrollTop + ventanaAltura > elementoTop + 100 && !$(this).hasClass('animate')) {
            var animacion = $(this).data('animacion');
            $(this)
                .css('animation-name', animacion)
                .addClass('animate');
        } else if (scrollTop + ventanaAltura <= elementoTop + 100 && $(this).hasClass('animate')) {
            var animacion = $(this).data('animacion');
            var reverseAnim = reverseAnimations[animacion];
            $(this)
                .css('animation-name', reverseAnim)
                .removeClass('animate');
        }
    });
});
