// 自行加入的JS請寫在這裡
$(function () {
    function closeMenu() {
        $('.m_menu').removeClass('open');
        $('.btn_menu').find('#burger').stop().removeClass('open');
    }
    function closeAll() {
        $('.submenu').stop(true, true).hide();
    }
    var _windowW = $(window).width();
    $(window).on('load resize scroll', function (e) {
        if (_windowW > 992) {
            closeMenu();
        }
    });
    $('.btn_menu')
        .off()
        .click(function (e) {
            $('.m_menu').stop().toggleClass('open');
            $(this).find('#burger').stop().toggleClass('open');
            e.preventDefault();
        });
    //---------------------------------------------------------------------------手機選單---------//
    //----------------------------------------//
    $('.m_menu')
        .find('#m_elegant')
        .off()
        .click(function (e) {
            closeMenu();
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.elegant').offset().top }, 400, 'linear');
            e.preventDefault();
        });
    $('.m_menu')
        .find('#m_authorize')
        .off()
        .click(function (e) {
            closeMenu();
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.authorize').offset().top }, 400, 'linear');
            e.preventDefault();
        });
    $('.m_menu')
        .find('#m_onestop')
        .off()
        .click(function (e) {
            closeMenu();
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.set').offset().top }, 400, 'linear');
            e.preventDefault();
        });
    $('.m_menu')
        .find('#m_tech')
        .off()
        .click(function (e) {
            closeMenu();
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.intro-1').offset().top }, 400, 'linear');
            e.preventDefault();
        });
    $('.m_menu')
        .find('#m_contact')
        .off()
        .click(function (e) {
            closeMenu();
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('footer').offset().top }, 400, 'linear');
            e.preventDefault();
        });
    //----------------------------------------//
    $('.m_menu')
        .find('#m_download')
        .off()
        .click(function (e) {
            $(this).siblings('.submenu').stop().slideToggle('600', 'easeOutQuint');
            e.preventDefault();
        });
    //---------------------------------------------------------------------------手機選單---------//
    //m_download
    if ($('header #m_download').length > 0) {
        var download_Status = false;
        $('header')
            .find('#m_download')
            .off()
            .click(function (e) {
                if (!download_Status) {
                    $(this).siblings('.submenu').stop(true, true).addClass('open').fadeIn('600', 'easeOutQuint');
                    download_Status = true;
                } else {
                    $(this).siblings('.submenu').stop(true, true).removeClass('open').hide();
                    download_Status = false;
                }
                e.preventDefault();
            });
        // click document close lang
        function closeDownload() {
            $('.submenu').stop(true, true).hide();
        }
        $(document.body).click(function (e) {
            if (download_Status) {
                closeDownload();
                closeAll();
                download_Status = false;
            }
        });
        $('.submenu ,#m_download').click(function (e) {
            e.stopPropagation();
        });
    }
    //m_lang
    // if ($('#m_lang').length > 0) {
    //     var lang_Status = false;
    //     $('#m_lang')
    //         .off()
    //         .click(function (e) {
    //             if (!lang_Status) {
    //                 $(this).siblings('.submenu').stop(true, true).fadeIn('600', 'easeOutQuint');
    //                 lang_Status = true;
    //             } else {
    //                 $(this).siblings('.submenu').stop(true, true).hide();
    //                 lang_Status = false;
    //             }
    //             e.preventDefault();
    //         });
    //     // click document close lang
    //     function closeLang() {
    //         $('.submenu').stop(true, true).hide();
    //     }
    //     $(document.body).click(function (e) {
    //         if (lang_Status) {
    //             closeLang();
    //             closeAll();
    //             lang_Status = false;
    //         }
    //     });
    //     $('.submenu ,#m_lang').click(function (e) {
    //         e.stopPropagation();
    //     });
    // }
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
    $(window).on('scroll load', function () {
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
    /*-----------------------------------*/
    ////////////// quick //////////////
    /*-----------------------------------*/
    $('header')
        .find('#m_elegant')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.elegant').offset().top }, 400, 'linear');
        });
    $('header')
        .find('#m_authorize')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.authorize').offset().top }, 400, 'linear');
        });

    $('header')
        .find('#m_onestop')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.set').offset().top }, 400, 'linear');
        });
    $('header')
        .find('#m_tech')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.intro-1').offset().top }, 400, 'linear');
        });
    $('header')
        .find('#m_contact')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('footer').offset().top }, 400, 'linear');
        });

    // $('#m_download')
    //     .parent('li')
    //     .hover(
    //         function () {
    //             $(this).find('.submenu').stop().fadeIn();
    //         },
    //         function () {
    //             $(this).find('.submenu').stop().hide();
    //         }
    //     );
});
