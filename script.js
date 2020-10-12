//SEKCJA





$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();




  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top
  const art2Height = $art2.outerHeight()

  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()

  const $art5 = $('.art5');
  const art5FromTop = $art5.offset().top
  const art5Height = $art5.outerHeight()

  const $art6 = $('.art6');
  const art6FromTop = $art6.offset().top
  const art6Height = $art6.outerHeight()

  const $art7 = $('.art7');
  const art7FromTop = $art7.offset().top
  const art7Height = $art7.outerHeight()

  if (scrollValue > art2FromTop + art2Height / 2 - windowHeight) {
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height / 2 - windowHeight) {

    $art3.addClass('active');
  }
  if (scrollValue > art4FromTop + art4Height / 2 - windowHeight) {
    $art4.addClass('active');
  }
  if (scrollValue > art5FromTop + art5Height / 2 - windowHeight) {

    $art5.addClass('active');
  }
  if (scrollValue > art6FromTop + art6Height / 2 - windowHeight) {
    $art6.addClass('active');
  }
  if (scrollValue > art7FromTop + art7Height / 2 - windowHeight) {

    $art7.addClass('active');
  }


  if (scrollValue < 100) {
    $('article').removeClass('active');
  }
})


//PRZYCISK

$('.b1').on('click', function () {
  $('body , html').animate({
    scrollTop: $('.s1').offset().top
  }, )
})

// slider 
