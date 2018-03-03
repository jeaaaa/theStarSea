checkImg();
waterfall();
  $(window).on('resize', function () {
    checkImg();
  })

  function checkImg() { //检测图片是否加载完成
    var imgload = $('img');
    setTimeout(function () {
      var complete = true;
      imgload.each(function () {
        if (!this.complete) {
          complete = false;
          return false;
        }
      });
      if (complete) {   //加载完成回调
        waterfall();
      } else {
        checkImg();
      }
    }, 1);
  }

  function waterfall() { //瀑布流布局
    var box_width = $('.box').eq(0).outerWidth();
    if($(window).width()>700){
      var num = Math.floor($(window).width() / box_width)-1;
    }else{
      var num = Math.floor($(window).width() / box_width);
    }
    $('#main').css({
      'width': num * box_width + 'px',
      'margin': '0 auto'
    });
    var height_arr = [];
    $('.box').each(function (index, value) {
      if (index < num) {
        var box_height = $(value).outerHeight();
        height_arr.push(box_height);
        $(value).css('position', 'relative');
      } else {
        var min_height = Math.min.apply(null, height_arr); 
        var min_index = $.inArray(min_height, height_arr); 
        $(value).css({
          'position': 'absolute',
          'top': min_height + 'px',
          'left': min_index * box_width + 'px'
        });
        height_arr[min_index] += $(value).outerHeight();
      }
    });
    $('.pagea').css('height',$('.box:last').offset().top+$('.box:last').height()+'px');
  }