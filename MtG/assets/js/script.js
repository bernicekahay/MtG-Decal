$(document).ready(function() {


$('.curr-message').hide();
$('#curr-message-1').show();

$(document).scroll(function(){
    var s = $(window).scrollTop();
    if ( s < 150) {
        $('.curr-message').hide();
        $('#curr-message-1').show();
    }
    if (s > 150) {
        $('.curr-message').hide();
        $('#curr-message-2').show();
    }
    if (s > 590) {
        $('.curr-message').hide();
        $('#curr-message-3').show();
    }
    if (s > 1030) {
        $('.curr-message').hide();
        $('#curr-message-4').show();
    }
    if (s > 1430) {
        $('.curr-message').hide();
        $('#curr-message-5').show();
    }
    if (s > 1830) {
        $('.curr-message').hide();
        $('#curr-message-6').show();
    }
    if (s > 2230) {
        $('.curr-message').hide();
        $('#curr-message-7').show();
    }
    if (s > 2530) {
        $('.curr-message').hide();
        $('#curr-message-8').show();
    }
    if (s > 2930) {
        $('.curr-message').hide();
        $('#curr-message-9').show();
    }
    if (s > 3330) {
        $('.curr-message').hide();
        $('#curr-message-10').show();
    }
    if (s > 3730) {
        $('.curr-message').hide();
        $('#curr-message-11').show();
    }
    if (s > 4030) {
        $('.curr-message').hide();
        $('#curr-message-12').show();
    }
    if (s > 4430) {
        $('.curr-message').hide();
        $('#curr-message-13').show();
    }
    if (s > 4830) {
        $('.curr-message').hide();
        $('#curr-message-14').show();
    }
    if (s > 5130) {
        $('.curr-message').hide();
        $('#curr-message-15').show();
    }
});


$(".home > div:gt(0)").hide();

setInterval(function() {
  $('.home > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.home');
}, 5000);


});
