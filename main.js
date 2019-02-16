$(function(){
    $(".header").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top}, 'slow');
    });
})

$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        $('.arrow').addClass('hide');
    }
    else {
        $('.arrow').removeClass('hide');
    }
})