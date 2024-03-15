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
    //
    //
    //
    //
    $('.chen').slick({
        arrows: true, //左右箭頭
        autoplay: false, //自動播放
        autoplaySpeed: 3000, //自動播放秒數
        dots: false, //顯示圓點
        dotsClass: 'slick-dots', //原點css
        draggable: true, //滑鼠可以拖曳
        infinite: true, //無限輪播
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
        rtl: false, //改變輪播方向
        slidesToShow: 1, //一次顯示幾張
        slidesToScroll: 1, //一次輪播幾張
        vertical: false, //改成垂直方向
        fade: true,
    });
    $('.impression').slick({
        arrows: true, //左右箭頭
        autoplay: false, //自動播放
        autoplaySpeed: 3000, //自動播放秒數
        dots: false, //顯示圓點
        dotsClass: 'slick-dots', //原點css
        draggable: true, //滑鼠可以拖曳
        infinite: true, //無限輪播
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
        rtl: false, //改變輪播方向
        slidesToShow: 1, //一次顯示幾張
        slidesToScroll: 1, //一次輪播幾張
        vertical: false, //改成垂直方向
        fade: true,
    });
    // 頁籤
    $('.toggle_content').find('.display32').hide();
    $('.chen_block')
        .find('.btn_17')
        .off()
        .click(function (e) {
            $(this).addClass('active').blur();
            $(this).siblings().removeClass('active');
            $(this).parent().siblings('.toggle_content').find('.display17').fadeIn(800);
            $(this).parent().siblings('.toggle_content').find('.display32').hide();
            $(this).parent().siblings('.toggle_content').find('.display17').slick('refresh');
            e.preventDefault();
        });
    $('.chen_block')
        .find('.btn_32')
        .off()
        .click(function (e) {
            $(this).addClass('active').blur();
            $(this).siblings().removeClass('active');
            $(this).parent().siblings('.toggle_content').find('.display17').hide();
            $(this).parent().siblings('.toggle_content').find('.display32').fadeIn(800);
            $(this).parent().siblings('.toggle_content').find('.display32').slick('refresh');
            e.preventDefault();
        });
    $('.impression_block')
        .find('.btn_17')
        .off()
        .click(function (e) {
            $(this).addClass('active').blur();
            $(this).siblings().removeClass('active');
            $(this).parent().siblings('.toggle_content').find('.display17').fadeIn(800);
            $(this).parent().siblings('.toggle_content').find('.display32').hide();
            $(this).parent().siblings('.toggle_content').find('.display17').slick('refresh');
            e.preventDefault();
        });
    $('.impression_block')
        .find('.btn_32')
        .off()
        .click(function (e) {
            $(this).addClass('active').blur();
            $(this).siblings().removeClass('active');
            $(this).parent().siblings('.toggle_content').find('.display17').hide();
            $(this).parent().siblings('.toggle_content').find('.display32').fadeIn(800);
            $(this).parent().siblings('.toggle_content').find('.display32').slick('refresh');
            e.preventDefault();
        });
});
