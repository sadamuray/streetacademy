(function() {

  $(function() {
    $(window).load(function() {
      var $setElm, easing, effectSpeed, switchDelay;
      $setElm = $(".js-review-ticker");
      effectSpeed = 1000;
      switchDelay = 3000;
      easing = "swing";
      $setElm.each(function() {
        var $setList, $targetLi, $targetObj, $targetUl, effectFilter, listHeight, ulWidth;
        effectFilter = $(this).attr("rel");
        $targetObj = $(this);
        $targetUl = $targetObj.children("ul");
        $targetLi = $targetObj.find("li");
        $setList = $targetObj.find("li:first");
        ulWidth = $targetUl.width();
        listHeight = $targetLi.height();
        $targetObj.css({
          height: listHeight
        });
        $targetLi.css({
          top: "0",
          left: "0",
          position: "absolute"
        });
        if (effectFilter === "fade") {
          $setList.css({
            display: "block",
            opacity: "0",
            zIndex: "98"
          }).stop().animate({
            opacity: "1"
          }, effectSpeed, easing).addClass("showlist");
          setInterval((function() {
            var $activeShow;
            $activeShow = $targetObj.find(".showlist");
            $activeShow.animate({
              opacity: "0"
            }, effectSpeed, easing, function() {
              $(this).next().css({
                display: "block",
                opacity: "0",
                zIndex: "99"
              }).animate({
                opacity: "1"
              }, effectSpeed, easing).addClass("showlist").end().appendTo($targetUl).css({
                display: "none",
                zIndex: "98"
              }).removeClass("showlist");
            });
          }), switchDelay);
        } else if (effectFilter === "roll") {
          $setList.css({
            top: "3em",
            display: "block",
            opacity: "0",
            zIndex: "98"
          }).stop().animate({
            top: "0",
            opacity: "1"
          }, effectSpeed, easing).addClass("showlist");
          setInterval((function() {
            var $activeShow;
            $activeShow = $targetObj.find(".showlist");
            $activeShow.animate({
              top: "-3em",
              opacity: "0"
            }, effectSpeed, easing).next().css({
              top: "3em",
              display: "block",
              opacity: "0",
              zIndex: "99"
            }).animate({
              top: "0",
              opacity: "1"
            }, effectSpeed, easing).addClass("showlist").end().appendTo($targetUl).css({
              zIndex: "98"
            }).removeClass("showlist");
          }), switchDelay);
        } else if (effectFilter === "slide") {
          $setList.css({
            left: ulWidth,
            display: "block",
            opacity: "0",
            zIndex: "98"
          }).stop().animate({
            left: "0",
            opacity: "1"
          }, effectSpeed, easing).addClass("showlist");
          setInterval((function() {
            var $activeShow;
            $activeShow = $targetObj.find(".showlist");
            $activeShow.animate({
              left: -ulWidth,
              opacity: "0"
            }, effectSpeed, easing).next().css({
              left: ulWidth,
              display: "block",
              opacity: "0",
              zIndex: "99"
            }).animate({
              left: "0",
              opacity: "1"
            }, effectSpeed, easing).addClass("showlist").end().appendTo($targetUl).css({
              zIndex: "98"
            }).removeClass("showlist");
          }), switchDelay);
        }
      });
    });
  });

  $("#intro_video").click(function() {
    $("#intro_movie_wrap").html("");
    $("#intro_movie_wrap").append($("<iframe id=\"intro_movie\" src=\"//player.vimeo.com/video/78328310\" width=\"780\" height=\"438\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"));
    $("#video_container").fadeIn("fast");
  });

  $("#video_close_btn, #video_container").click(function() {
    $("#video_container").hide();
    $("#intro_movie_wrap").html("");
  });

}).call(this);
