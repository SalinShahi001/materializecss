$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    dist:0
  });
  window.setInterval(function(){$('.carousel').carousel('next')},4000)
});
$(document).ready(function(){
  $('.tabs').tabs();
});
$(document).ready(function(){
  $('.modal').modal();
});
$("#see_more").click(function() {
  
    $('html,body').animate({
        scrollTop: $(".position").offset().top},
        'slow');
});
$("#header_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
});
$("#about_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
$("#header_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
});
$("#portfolio_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});
$("#blog_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#blog").offset().top},
        'slow');
});
$("#contact_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
$(document).ready(function(){
    $('.position').pushpin({
      top: 700,
      bottom: Infinity,
      offset: 0,
      onPositionChange: null
    });
  });
//link active
$(document).ready(function(){
        $('ul.Right li').on('click', function(){
            var clicked = $(this);
            $('ul.Right li').each(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }
            });
            $(this).addClass('active');
        });
});