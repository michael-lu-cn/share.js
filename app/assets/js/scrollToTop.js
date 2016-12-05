$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.abc').fadeIn();
        } else {
            $('.abc').fadeOut();
        }
    });

    // $('#toTop').click(function (e) {
    //   console.log("scroll");
    //   e.preventDefault();
    //   $("html, body").animate({
    //       scrollTop: 0
    //   }, 600);
    //   return false;
    //
    // });

});
