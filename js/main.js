$(document).ready(function(){

  // HOME ANIMATIONS
  function queue(start) {
    var rest = [].splice.call(arguments, 1),
        promise = $.Deferred();

    if (start) {
        $.when(start()).then(function () {
            queue.apply(window, rest);
        });
    } else {
        promise.resolve();
    }
    return promise;
  }

  queue(function () {
    return $("h1").addClass('animated fadeInLeft');
  }, function () {
    return $("h2").addClass('animated fadeInLeft');
  }, function () {
    return $("h3#watch").addClass('animated fadeInLeft');
  }, function () {
    return $("h3#stream").addClass('animated fadeInLeft');
  }, function () {
    return $("h3#buy").addClass('animated fadeInLeft');
  }, function () {
    return $("a#home-btn").addClass('animated fadeInRight');
  }, function () {
    return $("a#live-btn)").addClass('animated fadeInRight');
  }, function () {
    return $("a#contact-btn").addClass('animated fadeInRight');
  });

  // MENU ANIMATIONS
  // Active class
  $('#main-nav a').click(function(){
    $(this).addClass('active');
    $('#main-nav a').not($(this)).removeClass('active');
  })

  // Section animations
  $('#home-btn').click(function(){
    $('section, footer').hide().removeClass('animated fadeIn');
  })

  $('#about-btn').click(function(){
    $('#about').show().addClass('animated fadeIn');
    $('#contact, #live, footer').hide().removeClass('animated fadeIn');
  })

  $('#live-btn').click(function(){
    $('#live').show().addClass('animated fadeIn');
    $('#contact, #about, footer').hide().removeClass('animated fadeIn');
  })

  $('#contact-btn').click(function(){
    $('#contact, footer').show().addClass('animated fadeIn');
    $('#about, #live').hide().removeClass('animated fadeIn');
  })

  // WATER RIPPLES
  $('body').ripples({
    dropRadius: 20,
    perturbance: 0.02,
    interactive: true,
    resolution: 1024,
  });

});
