$(window).scroll(function(e) {
    var distanceScrolled = $(this).scrollTop();
    $('.container-image').css('-webkit-filter', 'blur('+distanceScrolled/100+'px)');
});


$('.ieee-logo').on('click', function() {
    window.location='http://wcci2022.org';
});