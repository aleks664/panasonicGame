$(document).ready(function(){
  $('.prizes-container .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.products-history .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
  $('.century-container .play-banner .description .btn').click(function (e) {
    $(this).toggleClass('active');
    $('.prizes-container').toggleClass('open');
    if ($(this).hasClass('active')) {
      $(this).text('Скрыть все призы')
    } else {
      $(this).text('Посмотреть все призы')
    }
    e.preventDefault();
  });

  $('.century-container .top-banner .menu ul li a').bind('click', function(event) {
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    var $anchor = $(this).attr('href');
    if ($($anchor).length>0) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $($anchor).offset().top
      }, 1200);
    }
  });
  // new добавил попап , [data-popup] изменилость
  $('.century-container .products-history .item a, [data-popup] ').click(function (e) {
    e.preventDefault();
    $($(this).attr('href')).fadeIn();
    $('html').addClass('popup-open')
    if ($($(this).attr('href')).hasClass()) {
      
    }
  });
  // new  .popup .btn-close
  $('.popup .close, .popup .popup-overflow, .popup .btn-close').click(function (e) {
    e.preventDefault();
    $(this).closest('.popup').fadeOut();
    $('html').removeClass('popup-open')
  });

//  Второй этап новое

  if ($('.work-edit-block .inp-file input[type=file]').length>0) {
    $('.work-edit-block .inp-file input[type=file]').change(function () {
      var file  = $(this).prop('files')[0];
      $(this).closest('.inp-file').css({'background-image': 'url('+URL.createObjectURL(event.target.files[0])+')'})
    });
  }
  $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    if (delta >= 0) {
      $('html').addClass('up').removeClass('down');
    } else {
      $('html').removeClass('up').addClass('down');
    }
  });
  //new Второй этап новое
}); // end document.ready




