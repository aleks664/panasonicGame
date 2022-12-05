var map = $('#game-map'),
  mapW = $('#game-map').outerWidth(),
  mapH = $('#game-map').outerHeight(),
  sky = $('.sky1'), // Облако 1
  sky2 = $('.sky2'), // Облако 2
  sky3 = $('.sky3'), // Облако 3
  aerostat = $('#aerostat'), // Воздушный шар
  slider  = $('#game-map-sl'),
  waveL = $('#boat .wave-l-b img, #boat  .wave-l-t img'),
  waveR = $('#boat .wave-r-b img, #boat  .wave-r-t img'),
  boat = $('#boat'),
  boatR = $('#boat-right'),
  boatR2 = $('#boat-right2'),
  boatRwaveL = $('.boat-right .wave-l-b img, .boat-right .wave-l-t img'),
  boatRwaveR = $('.boat-right .wave-r-b img, .boat-right .wave-r-t img'),
  balloon1 = $('.ball1-anim'),
  balloon2 = $('.ball2-anim'),
  balloon3 = $('.ball3-anim'),
  marker = $('.marker'),
  plane = $('#plane'),
  boat3 = $('#boat3'),
  airship = $('#airship'),
  airshipAnim = new TimelineMax(),
  boat3Anim = new TimelineMax(),
  planeAnim = new TimelineMax(),
  balloon1Anim = new TimelineMax(),
  wayAnim = new TimelineMax(),
  boatRAnim = new TimelineMax(),
  boatR2Anim = new TimelineMax(),
  boatRwaveLAnim = new TimelineMax(),
  boatRwaveRAnim = new TimelineMax(),
  boatAnim = new TimelineMax(),
  waveLAnim = new TimelineMax(),
  waveRAnim = new TimelineMax(),
  sliderAnim = new TimelineMax(),
  aerostatAnim = new TimelineMax(),
  skyAnim = new TimelineMax(),
  skyAnim2 = new TimelineMax(),
  skyAnim3 = new TimelineMax();

  var timeK = 2;
$(document).ready(function () {
  // coords();
  logoTxt();
  $('.way .control-point.active').prevAll('.point').addClass('active');
  $('body').imagesLoaded( function() {
    $('#preloader').fadeOut(300);
    $('body').removeClass('load');
    sliderWidth();
    listStep ();
    pointTxt();
    balloonAnimation();
    listStepCurrent();
    if (airship.length>0) {
      airshipAnim
        .to(airship, 0.5*timeK, {
          rotation: '+=-7',
          ease: Power0.easeNone
        })
        .to(airship, 0.5*timeK, {
          rotation: '+=7',
          ease: Power0.easeNone
        })
        .to(airship, 7, {
          onCompleteScope: airship,
          onComplete: function () {
            airshipAnim.restart(0);
          },
          ease: Power0.easeNone
        })
    }
    if (sky.length>0) {
      skyAnim
        .set(sky,{
          left: '100%'
        })
        .to(sky, 12*timeK, {
          left: '-100%',
          repeat: -1,
          ease: Power0.easeNone
        });
    }
    if (sky2.length>0) {
      skyAnim2
        .set(sky2,{
          left: '-69%'
        })
        .to(sky2,25*timeK, {
          left: '100%',
          repeat: -1,
          ease: Power0.easeNone
        });
    }
    if (sky2.length>0) {
      skyAnim3
        .set(sky3,{
          left: '-70%'
        })
        .to(sky3, 25*timeK, {
          left: '100%',
          delay: 12,
          repeat: -1,
          ease: Power0.easeNone
        });
    }
    if (aerostat.length>0) {
      aerostatAnim
        .set(aerostat,{
          left: '-10.3%',
          top: '3.%',
          ease: Power0.easeNone
        })
        .to(aerostat, 12*timeK, {
          left: '25%',
          top: '12%',
          ease: Power0.easeNone
        })
        .to(aerostat, 12*timeK, {
          left: '62%',
          top: '0.3%',
          ease: Power0.easeNone
        })
        .to(aerostat, 12*timeK, {
          left: '100%',
          top: '12%',
          ease: Power0.easeNone
        })
        .to(aerostat, 0, {
          left: '-10.3%',
          top: '3.%',
          ease: Power0.easeNone,
          onCompleteScope: aerostat,
          onComplete: function () {
            aerostatAnim.restart(0);
          }
        });
    }
    if (waveL.length>0) {
      waveLAnim
        .set(waveL,{
          left: '0',
          bottom: '0',
          ease: Power0.easeNone
        })
        .to(waveL, 1, {
          bottom: '-100%',
          left: '-100%',
          repeat: -1,
          ease: Power0.easeNone
        })
    }
    if (waveR.length>0) {
      waveRAnim
        .set(waveR,{
          left: '0',
          bottom: '0',
          ease: Power0.easeNone
        })
        .to(waveR, 1, {
          bottom: '-100%',
          left: '-100%',
          repeat: -1,
          ease: Power0.easeNone
        })
    }
    if (boat.length>0) {
      boatAnim
        .set(boat,{
          top: '100%',
          left: '0',
          ease: Power0.easeNone
        })
        .to(boat, 7*timeK, {
          top: '85%',
          left: '30%',
          ease: Power0.easeNone
        })
        .to(boat, 10*timeK, {
          top: '65%',
          left: '80%',
          rotation: '+=10',
          ease: Power0.easeNone
        })
        .to(boat, 7*timeK, {
          top: '55%',
          left: '110%',
          rotation: '+=10',
          ease: Power0.easeNone
        })
        .to(boat, 0, {
          top: '100%',
          left: '0',
          rotation: '0',
          onCompleteScope: boat,
          onComplete: function () {
            boatAnim.restart(0);
          },
          ease: Power0.easeNone
        })
    }
    if (boatRwaveL.length>0) {
      boatRwaveLAnim
        .set(boatRwaveL ,{
          left: '-100%',
          bottom: '-100%',
          ease: Power0.easeNone
        })
        .to(boatRwaveL , 1, {
          bottom: '0%',
          left: '0%',
          repeat: -1,
          ease: Power0.easeNone
        })
    }
    if (boatRwaveR.length>0) {
      boatRwaveRAnim
        .set(boatRwaveR,{
          bottom: '-100%',
          left: '-100%',
          ease: Power0.easeNone
        })
        .to(boatRwaveR, 1, {
          bottom: '0%',
          left: '0%',
          repeat: -1,
          ease: Power0.easeNone
        })
    }
    if (boatR.length>0) {
      boatRAnim
        .set(boatR,{
          top: '40%',
          left: '100%',
          ease: Power0.easeNone
        })
        .to(boatR, 7*timeK, {
          top: '65%',
          left: '70%',
          ease: Power0.easeNone
        })
        .to(boatR, 10*timeK, {
          top: '110%',
          left: '30%',
          rotation: '-=10',
          ease: Power0.easeNone
        })
        .to(boatR, 0*timeK, {
          top: '40%',
          left: '100%',
          rotation: '0',
          ease: Power0.easeNone
        })
        .to(boatR, 0, {
          top: '40%',
          left: '100%',
          rotation: '0',
          onCompleteScope: boat,
          onComplete: function () {
            setTimeout(function () {
              boatRAnim.restart(0);
            }, 7000)
          },
          ease: Power0.easeNone
        })
    }
    if (plane.length>0) {
      planeAnim
        .set(plane,{
          top: '100%',
          left: '100%',
          ease: Power0.easeNone
        })
        .to(plane, 12, {
          top: '-7%',
          left: '20%',
          repeat: -1,
          ease: Power0.easeNone
        });
    }
    if (boat3.length>0) {
      boat3Anim
        .set(boat3,{
          top: '45%',
          left: '-10%',
          transformOrigin:"top 50%",
          ease: Power0.easeNone
        })
        .to(boat3, 7*timeK, {
          top: '30%',
          left: '10%',
          rotation: '+=10',
          ease: Power0.easeNone
        })
        .to(boat3, 7*timeK, {
          top: '20%',
          left: '30%',
          rotation: '+=5',
          ease: Power0.easeNone
        })
        .to(boat3, 10*timeK, {
          top: '-10%',
          left: '70%',
          rotation: '0',
          ease: Power0.easeNone
        })
        .to(boat3, 0, {
          top: '45%',
          left: '-10%',
          rotation: '0',
          onCompleteScope: boat,
          onComplete: function () {
            boat3Anim.restart(0);
          },
          ease: Power0.easeNone
        })
    }
    if (boatR2.length>0) {
      boatR2Anim
        .set(boatR2,{
          top: '0%',
          left: '100%',
          ease: Power0.easeNone
        })
        .to(boatR2, 10*timeK, {
          top: '15%',
          left: '60%',
          rotation: '+=20',
          ease: Power0.easeNone
        })
        .to(boatR2, 7*timeK, {
          top: '20%',
          left: '30%',
          ease: Power0.easeNone
        })
        .to(boatR2, 7*timeK, {
          top: '30%',
          left: '-10%',
          rotation: '-=10',
          ease: Power0.easeNone
        })
        .to(boatR2, 0, {
          top: '0%',
          left: '100%',
          rotation: '0',
          onCompleteScope: boat,
          onComplete: function () {
            boatR2Anim.restart(0);
          },
          ease: Power0.easeNone
        })
    }
  });
  $('.game-header .btn').click(function (e) {
    e.preventDefault();
    $('.game-arrow').addClass('disable');
    var ths = $(this);
    if (!$(this).hasClass('disabled')) {
      $(this).addClass('disabled active');
      $.ajax({
        url: 'ajax-btn.html',
        success: function(data) {
          var nowTxt = data; //Текст кнопки при клике
          var step = 1; // Ход
          var btnTxt = ' <div class="f18">СДЕЛАТЬ</div><div class="f41">ХОД</div>'; // Текст кнопки после хода
          var nowMarker = $('.step.current .control-point.active'); // Где сейчас метка
          console.log(nowMarker);
          var newstep = nowMarker.attr('id').replace(/\D/g,'')*1 + step;
          var el = $('#control-point'+newstep );

          ths.find('.inner').html(data);
          // если кнопка должна быть краснной
          // ths.addClass('red').find('.inner').html(data);
          logoTxt();
          if (nowMarker.hasClass( 'point-end')) {
            nowMarker.nextAll().addClass('next');
            el.prevAll().addClass('next');
            wayAnimationEnd('.step.current .point.next', el, btnTxt);
          } else {
            el.prevAll().addClass('next');
            $('.step.current .control-point.active').prevAll().removeClass('next');
            $('.step.current .control-point.active').removeClass('active');
            if ($('.step.current').hasClass('active')) { // Если находимся на текущей карте
              wayAnimation('.point.next', el, btnTxt);
            } else { // если находимся не на текущей
              listStepCurrent();
              setTimeout(wayAnimation('.point.next', el, btnTxt), 1000);
            }
          }
        },
        error: function (msg) {
          alert('Ошибка.  Попробуйте позже!');
        }
      });
    }

  });
}); // end document.ready

$(window).load(function () {
}); // end window.load
$(window).resize(function () {
  logoTxt();
  // scrLeft();
  sliderWidth();
  pointTxt();
}); // end window.resize

$(window).scroll(function () {
}); // end window.scroll

function coords() {
  $('.step').click(function (e) {
    $('div.way').append('<div class="point"></div>');
    var width= $(this).closest('.step').find('.map-basis').outerWidth();
    var height= $(this).closest('.step').find('.map-basis').outerHeight();
    $('div.way .point:last-child').css({'top':  e.pageY/height*100+'%', 'left': (e.pageX+$('.game-map .game-map-scroll').scrollLeft())/width*100+'%',});
  })
}

// Анимация пути
function wayAnimationEnd(el, elhide, btnTxt) {
  $('body').addClass('animation-way');
  marker = $('.marker:visible');
  wayAnim
    .to(marker, 0.5, {
      width: '0',
      height:  '0',
      onCompleteScope: marker,
      onComplete: function () {
        $('.control-point.hide').removeClass('hide');
      },
      ease: Power0.easeNone,
    })
    .staggerTo(el, 0.05, {
        backgroundColor: '#00B1ED',
        ease: Power2.easeIn,
        onStartParams: ["{self}"],
        onStart: function(self) {
          $(self.target).removeClass('next');
        },
      }, 0.05
    )
    .to($('.step.current + .step .marker'), 0, {
      top: elhide.prev().css('top'),
      left:  elhide.prev().css('left'),
      width: '0',
      height:  '0',
      ease: Power0.easeNone,
      onCompleteScope: $('.step.current + .step .marker'),
      onComplete: function () {
        $('.step.current').removeClass('current').next().addClass('current');
        listStepCurrent();
        setTimeout(wayAnimation('.point.next', elhide, btnTxt), 1000);
      }
    });
}
function wayAnimation(el, elhide, btnTxt) {
  $('body').addClass('animation-way');
  marker = $('.step.current .marker');
  wayAnim
    .to(marker, 0.5, {
      width: '0',
      height:  '0',
      onCompleteScope: marker,
      onComplete: function () {
        $('.control-point.hide').removeClass('hide');
      },
      ease: Power0.easeNone,
    })
    .to(marker, 0, {
      top: elhide.prev().css('top'),
      left:  elhide.prev().css('left'),
      ease: Power0.easeNone,
    })
    .staggerTo(el, 0.05, {
        backgroundColor: '#00B1ED',
        ease: Power2.easeIn,
        onStartParams: ["{self}"],
        onStart: function(self) {
          $(self.target).removeClass('next');
        },
      }, 0.05
    )
    .to(elhide, 0, {
      onCompleteScope: elhide,
      onComplete: function () {
        elhide.addClass('hide active');
        marker.find('span').text(elhide.find('.date-wrap span').text());
      },
    })
    .to(marker, 0.5, {
      width: '2.08919%',
      height:  '5.65%',
      ease: Power0.easeNone,
      onCompleteScope: marker,
      onComplete: function () {
        pointTxt();
        $('.game-header .btn').removeClass('disabled active red').find('.inner').html(btnTxt);
        logoTxt();
        $('.game-arrow').removeClass('disable');
        $('body').removeClass('animation-way');
        location.href = elhide.find('a').attr('href');
      },
    });
}
// Карту смещаем влево при ресайзе
function scrLeft() {
  if ($(window).width()>991 && $('.game-map-scroll').length>0) {
    $('.game-map-scroll').scrollLeft(0);
  }
}
// Размер ширфат в лого при мастшабе
function logoTxt() {
  if ($('.game-header .logo').length>0) {
    var size = $('.game-header .logo').height()/436 * 57;
    var btnHeight = $('.game-header .btn').outerHeight();

    $('.game-header .logo .ttl').css({'font-size': size+ 'px'});
    $('.game-header .btn .inner *').each(function () {
      var cl = $(this).attr('class');
      switch (cl) {
        case 'f18':
          $(this).css({'font-size': btnHeight/233 * 18+ 'px', 'line-height': btnHeight/233 * 18+ 3+'px'});
          break;
        case 'f41':
          $(this).css({'font-size': btnHeight/233 * 41+ 'px', 'line-height': btnHeight/233 * 41+ 3+'px'});
          break;

      }
    });
  }
}
function pointTxt() {
  if ($('.control-point').length>0) {
    var size = $('.control-point.small .txt').height()/60 * 18;
    $('.control-point .txt span').css({'font-size':size + 'px', 'line-height': size + 3 + 'px'})
    $('.step.current .marker span').css({'font-size':$('.step.current .marker').height()/80 * 14 + 'px', 'line-height': $('.step.current .marker').height()/80 * 14+ 3 + 'px'})
  }
}
// Видимость стрелок прокрутки
function visibleArrow() {
  if ($('.step.active').prev('.step').length > 0) {
    $('.game-prev').show();
  } else {
    $('.game-prev').hide();
  }
  if ($('.step.active').next('.step').length > 0) {
    $('.game-next').show();
  } else {
    $('.game-next').hide();
  }
}
// ширина слайдера
function sliderWidth() {
  var container = $('body'),
      map  = $('.game-map .step:first-child .map-basis');
  if ((container.width() / container.height()) < (map.prop("naturalWidth") / map.prop("naturalHeight"))) {
    $('.game-map .step .map-basis').css({'width': 'auto', 'height' : container.height()})
    $('.game-map .step, .game-map-inner ').css({'width': map.width(), 'max-width': 'none'});
  } else {
    $('.game-map .step .map-basis').css({'width': '100%', 'height' : 'auto'});
    $('.game-map .step, .game-map-inner ').css({'width': container.width(), 'max-width': '100%'});
  }

  // $('.game-map-sl').width($('.game-map-sl .step:first-child').outerWidth()* $('.game-map-sl .step').length);

}
// Смена слайдов
function listStep() {
  $('.game-next').click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass('disable')) {
      var ths = $(this);
      ths.addClass('disable');
      $('.game-map-sl .step.active').next().addClass('active').siblings().removeClass('active')
      var right = -1 *$('.game-map-sl .step.active').outerWidth() * $('.game-map-sl').find('.step.active').index();
      sliderAnim
        .to(slider, 0, {
          // x: right,
          ease: Power0.easeNone,
          onCompleteScope: slider,
          onComplete: listStepCompele
        })
    }
  });
  $('.game-prev').click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass('disable')) {
      var ths = $(this);
      ths.addClass('disable');
      $('.game-map-sl .step.active').prev().addClass('active').siblings().removeClass('active')
      var right = -1 *$('.game-map-sl .step.active').outerWidth() * $('.game-map-sl').find('.step.active').index();
      sliderAnim
        .to(slider, 0, {
          // x: right,
          ease: Power0.easeNone,
          onCompleteScope: slider,
          onComplete: listStepCompele
        })
    }
  });
}
// После смены слайда
function listStepCompele() {
  $('.game-header .logo .ttl').text($('.game-map-sl .step.active').data('ttl'));
  $('.game-arrow').removeClass('disable');
  visibleArrow();
  balloon1Anim.restart();
}
// Движение к текущей карте
function listStepCurrent() {
  $('.game-arrow').addClass('disable');
  $('.game-map-sl .step.current').addClass('active').siblings().removeClass('active');
  var w = $('.game-map-sl').find('.step.current').offset().left - $('.game-map-sl').offset().left;
  sliderAnim
    .to(slider, 0, {
      // x: w,
      ease: Power0.easeNone,
      onCompleteScope: slider,
      onComplete: listStepCompele
    })
}

function balloonAnimation() {
  if (balloon1.length>0 && balloon2.length>0) {
    balloon1Anim
      .add('start')
      .to(balloon1, 10, {
        left: '-=22.5%',
        top: '-=20%',
        ease: Power0.easeNone
      }, 'start')
      .to(balloon2, 10, {
        left: '-=20%',
        top: '-=20%',
        ease: Power0.easeNone
      }, 'start')
      .to(balloon3, 10, {
        left: '-=17.5%',
        top: '-=20%',
        ease: Power0.easeNone
      }, 'start')
      .add('end')
      .to(balloon1, 20, {
        left: '0%',
        top: '-10%',
        ease: Power2.easeNone
      }, 'end')
      .to(balloon2, 20, {
        left: '0%',
        top: '-10%',
        ease: Power2.easeNone
      }, 'end')
      .to(balloon3, 20, {
      left: '0%',
      top: '-10%',
      ease: Power2.easeNone
    }, 'end');
      // .add('next')
      // .to(balloon1, 12, {
      //   left: '50%',
      //   top: '55%',
      //   ease: Power0.easeNone
      // }, 'next')
      // .to(balloon2, 12, {
      //   left: '47.2%',
      //   top: '55%',
      //   ease: Power0.easeNone
      // }, 'next')
      // .add('next2')
      // .to(balloon1, 12, {
      //   left: '30%',
      //   top: '25%',
      //   ease: Power0.easeNone
      // }, 'next2')
      // .to(balloon2, 12, {
      //   left: '33%',
      //   top: '25%',
      //   ease: Power0.easeNone
      // }, 'next2')
      // .add('end')
      // .to(balloon1, 12, {
      //   left: '0%',
      //   top: '-10%',
      //   ease: Power0.easeNone
      // }, 'end')
      // .to(balloon2, 12, {
      //   left: '0%',
      //   top: '-10%',
      //   ease: Power0.easeNone
      // }, 'end');
  }
}