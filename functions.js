$(window).scroll(function(e) {
    var distanceScrolled = $(this).scrollTop();
    $('.container-image').css('-webkit-filter', 'blur('+distanceScrolled/100+'px)');
});