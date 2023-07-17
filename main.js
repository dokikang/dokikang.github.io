'use strict';

/*--- Make navbar transparent when it is on the top ---*/
// get navbar with query selector
$(function () {
  'use strict';
  $('body').css('paddingTop', $('.navbar').innerHeight());

  $('.navbar li a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).data('scroll')).offset().top + 1
    }, 1000);

    $('.navbar a').removeClass('active');
    $(this).addClass('active');

    //$(this).addClass('active').parent().siblings().find('a').removeClass('active');
  });

  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    $('.block').each(function () {
      if (winScrollTop > $(this).offset().top) {
        var blockId = '#' + $(this).attr('id');
        $('.navbar li a').each(function () {
          if ($(this).attr('data-scroll') === blockId) {
            $('.navbar a').removeClass('active');
            $(this).addClass('active');
            /*
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
            */

          }
        });
      }
    });
    //Scroll Element
    var toTop = $('.toTop');
    if ($(window).scrollTop() >= 500) {
      if (toTop.is(':hidden')) {//For performance
        toTop.fadeIn().css('display', 'flex');
      }
    } else {
      toTop.fadeOut();
    }
  });

  $('.toTop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});
