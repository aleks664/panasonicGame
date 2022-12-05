$(document).ready(function(){
  svg4everybody({});
  $('.emblem-question  input[type="radio"]').change(function () {

    $('.emblem-question input[type="radio"]:checked').each(function () {
      if ($(this).closest('.gerb-wrap').length>0) {
        $('.gerb-block .gerb-wrap .gerb-svg').hide();
        $('.gerb-block .gerb-wrap .'+$(this).data('svg')).show();
      }
      if ($(this).closest('.crown-wrap').length>0) {
        $('.icon-crown').removeAttr('class').attr('class','icon icon-crown icon_'+$(this).data('svg'))
        console.log('icon icon-crown icon_'+$(this).data('svg'))
        $('.crown-block use').attr('xlink:href', 'images/sprite-svg.svg#'+$(this).data('svg'));
      }
      if ($(this).closest('.wreath-wrap').length>0) {
        $('.wreath-block').removeAttr('class').attr('class','wreath-block '+$(this).data('svg'))
        $('.wreath-block use').attr('xlink:href', 'images/sprite-svg.svg#'+$(this).data('svg'));
      }
      if ($(this).closest('.colors-list').length>0) {
        var baseColor = $(this).siblings('label').find('.pict').css('background-color');
        var darkColor = $(this).siblings('label').find('.pict').data('dark');
        $('.gerb-svg .base-color').attr('fill', baseColor)
        $('.gerb-svg .dark-color').attr('fill', darkColor)
      }
    });
  });
  fonttSize();
  setTimeout(function () {
    fonttSize()
  }, 500)
  
}); // end document.ready
function fonttSize() {
  if ($('.gerb-block .initials').length>0) {
    if ($(window).width()>992) {
      $('.gerb-block .initials').css({'font-size': $('.gerb-block .initials').height() *75/100 , 'line-height': $('.gerb-block .initials').height() +'px'})
    } else {
      $('.gerb-block .initials').removeAttr('style');
    }
  }
}
$(window).resize(function(){
  clearTimeout(resizedFinished);
  var resizedFinished = setTimeout(function(){
    fonttSize();
  }, 250);
}); // end window.resize