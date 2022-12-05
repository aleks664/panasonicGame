$(document).ready(function(){
  $('.btn-open').click(function () {
    $(this).closest('.block').parent().toggleClass('open').siblings().removeClass('open');
  });
  $('.question-header .overlay').click(function () {
    $('.question-header .open').removeClass('open')
  });
  var i ;
  headerHeight();
  bodyHeight();
  setTimeout(function () {
    headerHeight();
    bodyHeight();
  }, 250)
  // new исправил $('.question-btm .btn')
  $('.question-btm .btn').click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass('.btn-disabled')) {
      if ($('.question-body input[type="radio"]:checked').length>0) {
        // $('.question-body').submit(); // если не аякс
        $.ajax({
          url: 'ajax-btn.html',
          success: function(data) {
            if (data) {
              // new новое наполнение попапа
              $('#popup .txt').html('Теперь у тебя есть собственный герб.<br>Когда будешь писать императору Японии,<br>не забудь поставить герб в письмо. <br> Поздравляем!  <br><br> <div class="white txt-small">Поделись результатом в соцсети и 2 балла поступят на твой счёт</div>')
              popup('#popup');
            }
          },
          error: function (msg) {
            alert('Ошибка.  Попробуйте позже!');
          }
        });
      } else {
        $('#popup .txt').html('Внимание!<br>Вы должны ответить на вопрос!')
        popup('#popup');
      }

    }
  });


  $('.popup .popup-overflow, .popup .btn-close').click(function (e) {
    e.preventDefault();
    $('.popup.open').removeClass('open');
    $('html').removeClass('popup-open')
  });


  if ($('.interactive.carousel').length>0) {
    $('.interactive.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinity: false,
            centerPadding: '22vw',
          }
        }
      ]
    });
  }

//  Второй этап новое
// new photo
  if ($('.dowload-photo .inp-file input[type=file]').length>0) {
    $('.dowload-photo .inp-file input[type=file]').change(function (event) {
        $('#userphoto').css('background-image', 'url('+URL.createObjectURL(event.target.files[0])+')');
    });
  }

  //  Третий этап новое

  if ($('.interactive .slider').length>0) {
    $('.interactive .slider').slick({
      infinite: false,
      centerMode: false,
    });
  }
  $('.slider input[type="checkbox"]').change(function () {
    var error = 0;
    $('.slider .itm').each(function () {
      if (!$(this).find('input:checked').length>0) {
        error++;
      }
    })
    if (error == 0) {
      $('.question-btm .btn').removeClass('btn-disabled');
    } else {
      $('.question-btm .btn').addClass('btn-disabled');
    }
  });
  $('.carousel-edible input[type="radio"]').change(function () {
    var err = 0;
    $('.carousel-edible .slick-slide').each(function () {
      if (!$(this).find('input:checked').length>0) {
        err++;
      }
    })
    console.log(err)
    if (err == 0) {
      $('.question-btm .btn').removeClass('btn-disabled');
    } else {
      $('.question-btm .btn').addClass('btn-disabled');
    }
  });

  if ($('.carousel-edible').length>0) {
    $('.carousel-edible').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinity: false,
            centerPadding: '22vw',
          }
        }
      ]
    });
  }

  if ($('.century-come-slider').length>0) {
    $('.century-come-slider').slick({
      infinite: false,
      centerMode: false,
      prevArrow: '.century-come .century-come-slider .prev',
      nextArrow: '.century-come .century-come-slider .next',
    });
    $('.century-come-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
      if (nextSlide ==1 ) {
        $('body').addClass('active')
      } else {
        $('body').removeClass('active')
      }
    });
  }

  if ($('.century-come  .prizeslist').length>0) {
    setTimeout(function () {
      alignmentByHeight('.century-come .prizeslist');
    },250)
  }
}); // end document.ready
$(window).resize(function(){
  headerHeight();
  bodyHeight();
  clearTimeout(window.resizedFinished);
  if ($('.century-come .prizeslist').length>0) {
    alignmentByHeight('.century-come .prizeslist');
  }
  window.resizedFinished = setTimeout(function(){
    headerHeight();
    bodyHeight();

  }, 250);
}); // end window.resize

function headerHeight() {
  $('.header-empty').height($('header .logo .btn').offset().top + $('header .logo .btn').outerHeight())
}
function bodyHeight() {
  $('.question-body').height($(window).height() - ($('header .logo .btn').offset().top + $('header .logo .btn').outerHeight() + parseInt($('body').css('padding-bottom'))))
  $('.popup-body').css('margin-top', $('.question-txt').offset().top);
}
function popup(elem) {

  $(elem).addClass('open');
  $('html').addClass('popup-open')
}
function alignmentByHeight(el) {
  console.log('adafsdsaf')
  var divs = $(el);
  var max = 0;
  $(el).removeAttr('style');
  for(var i=0; i<$(el).length; i++) {
    max = Math.max(max, $(divs[i]).outerHeight());
  }
  $(el).css('min-height', max+'px');
};