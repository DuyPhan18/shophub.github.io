$(document).ready(function(){
  $('.PrevButton').click(function(){
    var currentSLide = $('.active-sld');
    var prevSlide = currentSLide.prev();

    if(prevSlide.length){
      currentSLide.removeClass('active-sld').css('z-index', -10);
        prevSlide.addClass('active-sld').css('z-index', 10);
    }
  })

  $('.NextButton').click(function(){
    var currentSLide = $('.active-sld')
    var nextSlide = currentSLide.next()
    if(nextSlide.length){
      currentSLide.removeClass('active-sld').css('z-index', -10);
      nextSlide.addClass('active-sld').css('z-index', 10);
  }
  })
})