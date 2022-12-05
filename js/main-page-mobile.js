$(document).ready(function(){
  $('.century-container .prizes-container .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  $('.products-history .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.century-container .play-banner .description .btn').click(function (e) {
    $('.prizes-container').toggleClass('open')
    e.preventDefault();
  });

  $('.century-container .top-banner .menu ul li a').bind('click', function(event) {
    var $anchor = $(this).attr('href');
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    if ($($anchor).length>0) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $($anchor).offset().top
      }, 1200);
    }
  });

}); // end document.ready