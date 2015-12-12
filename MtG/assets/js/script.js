$(document).ready(function() {

var contact = 0;

$(".contact").hide();

$("#robert-contact").click(function () {
    if (contact == 0) {
        $("#robert").show();
        contact = 1;
    }
    else {
        $("#robert").hide();
        contact = 0;
    }
});

$("#kyle-contact").click(function () {
    if (contact == 0) {
        $("#kyle").show();
        contact = 1;
    }
    else {
        $("#kyle").hide();
        contact = 0;
    }
});

$("#richard-contact").click(function () {
    if (contact == 0) {
        $("#richard").show();
        contact = 1;
    }
    else {
        $("#richard").hide();
        contact = 0;
    }
});

$("#bernice-contact").click(function () {
    if (contact == 0) {
        $("#bernice").show();
        contact = 1;
    }
    else {
        $("#bernice").hide();
        contact = 0;
    }
});



$('.curr-message').hide();
$('#curr-message-1').show();

$(document).scroll(function(){
    var s = $(window).scrollTop();
    if ( s < 150) {
        $('.curr-message').hide();
        $('#curr-message-1').show();
        $('#bar-two').css("background-color", "");
        $('#bar-three').css("background-color", "");
        $('#bar-four').css("background-color", "");
        $('#bar-five').css("background-color", "");
        $('#bar-six').css("background-color", "");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();


    }
    if (s > 150) {
        $('.curr-message').hide();
        $('#curr-message-2').show();
        $('#bar-two').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-three').css("background-color", "");
        $('#bar-four').css("background-color", "");
        $('#bar-five').css("background-color", "");
        $('#bar-six').css("background-color", "");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }   
    if (s > 590) {
        $('.curr-message').hide();
        $('#curr-message-3').show();
        $('#bar-three').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-four').css("background-color", "");
        $('#bar-five').css("background-color", "");
        $('#bar-six').css("background-color", "");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 1030) {
        $('.curr-message').hide();
        $('#curr-message-4').show();
        $('#bar-four').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-five').css("background-color", "");
        $('#bar-six').css("background-color", "");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 1430) {
        $('.curr-message').hide();
        $('#curr-message-5').show();
        $('#bar-five').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-six').css("background-color", "");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 1830) {
        $('.curr-message').hide();
        $('#curr-message-6').show();
        $('#bar-six').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-seven').css("background-color", "");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 2230) {
        $('.curr-message').hide();
        $('#curr-message-7').show();
        $('#bar-seven').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-eight').css("background-color", "");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 2530) {
        $('.curr-message').hide();
        $('#curr-message-8').show();
        $('#bar-eight').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-nine').css("background-color", "");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 2930) {
        $('.curr-message').hide();
        $('#curr-message-9').show();
        $('#bar-nine').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-ten').css("background-color", "");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 3330) {
        $('.curr-message').hide();
        $('#curr-message-10').show();
        $('#bar-ten').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-eleven').css("background-color", "");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();


    }
    if (s > 3730) {
        $('.curr-message').hide();
        $('#curr-message-11').show();
        $('#bar-eleven').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-twelve').css("background-color", "");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 4030) {
        $('.curr-message').hide();
        $('#curr-message-12').show();
        $('#bar-twelve').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-thirteen').css("background-color", "");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 4430) {
        $('.curr-message').hide();
        $('#curr-message-13').show();
        $('#bar-thirteen').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-fourteen').css("background-color", "");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();

    }
    if (s > 4830) {
        $('.curr-message').hide();
        $('#curr-message-14').show();
        $('#bar-fourteen').css("background-color", "rgba(102, 102, 255, .8)");
        $('#bar-fifteen').css("background-color", "");
        $('#scroll').show();



    }
    if (s > 5130) {
        $('.curr-message').hide();
        $('#curr-message-15').show();
        $('#bar-fifteen').css("background-color", "rgba(102, 102, 255, .8)");
        $('#scroll').hide();
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
