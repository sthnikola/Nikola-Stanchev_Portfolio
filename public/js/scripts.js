if ($(window).width() > 1000) {

  $(window).on('mousemove', function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function (i, el) {
      var offset = parseInt($(el).data('offset'));
      var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

      $(el).css({
        '-webkit-transform': translate,
        'transform': translate,
        'moz-transform': translate
      });
    });
  });
}


$(function () {
  $('.monster').fadeIn('slow');
});

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme').each(function (i) {

      var bottom_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });

});
