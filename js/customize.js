// 自行加入的JS請寫在這裡
$(function () {
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop')
        .off()
        .click(function (e) {
            $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
            // $('a.goCenter').focus(); //加入這行
            e.preventDefault();
        });
    $('.scrollToTop').keydown(function (e) {
        $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
        _body.find('a.goCenter').focus();
        e.preventDefault();
    });
});
