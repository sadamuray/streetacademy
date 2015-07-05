$(function(){
    $(document).ready(function(){
        $('#footer_login').hide();
    });

    $(window).scroll(function(){
        var distanceTop = 100;
        var bottomPos = $(document).height() - $(window).height() -320;

        if ($(window).scrollTop() < bottomPos && $(window).scrollTop() > distanceTop) {
            $('#footer_login').fadeIn("slow");
        } else if ($(window).scrollTop() < distanceTop || $(window).scrollTop() > bottomPos) {
            $('#footer_login').fadeOut("slow");
        }
    });
});
