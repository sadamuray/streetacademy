(function() {

  $('.auto_position img').each(function() {
    var loadImg, self;
    self = $(this);
    loadImg = new Image;
    loadImg.src = $(this).attr('src');
    return $(loadImg).on('load', function() {
      var ch, cw, ih, imgH, imgW, iw;
      imgW = loadImg.width;
      imgH = loadImg.height;
      if (imgH >= imgW) {
        self.css('width', '170px');
      } else {
        self.css('height', '170px');
      }
      cw = 170;
      ch = 170;
      iw = (self.width() - cw) / 2;
      ih = (self.height() - ch) / 2;
      self.css('top', '-' + ih + 'px');
      self.css('left', '-' + iw + 'px');
    });
  });

}).call(this);
