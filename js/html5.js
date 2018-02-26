$(window).on('load', function () {
    if($(window).width()>700){
        $('.header-img').css({
            'height': $(window).height(),
            'width': $(window).width()
        });
    }else{
        $('.header-img').css({
            'width': $(window).width()
        });
    }
    footerlocal();
})

$(window).on('resize', function () {
    if($(window).width()>700){
        $('.header-img').css({
            'height': $(window).height(),
            'width': $(window).width()
        });
    }else{
        $('.header-img').css({
            'width': $(window).width()
        });
    }
    footerlocal();
})
function footerlocal(){
    var a=$("body").height(),
    b=$(window).height(),
    c=$(window).height()/12;
    if(a<b){
        $(".page").css( 'height',(b-c));
    }
}
$(function(){
    //圆形轨迹的坐标点
    var x_arr = new Array();
    var y_arr = new Array();
    var x = y = m =0;
    
    $('.cycle_div').hover(function(){
        a_hover = true;
    },function(){
        a_hover = false;
    });
    
    var flag = true;
    $(document).mousemove(function(e){
        if(flag){
            bs = e.pageX || e.clientX;
        }
        flag = false;
        var x = e.pageX || e.clientX;
        var sx = (x-bs)/100 + 50;
        $(".head_content").stop(true,false).animate({'backgroundPositionX':sx+'%'},0);
    });
    
    //初始化
    var art_li = $('.artic_li');
    var h,t,s_top;
    var i;
    function init(){
        h = window.innerHeight;
        s_top=document.documentElement.scrollTop;
        for(i in art_li){
            t = art_li[i].offsetTop;
            t = t - s_top;
            if((t-h) < -200){
                art_li[i].style.left = '0';
                console.log(h);
             }
        }
    }
    init();
    
    var scrollFunc=function(e){ 
        h = window.innerHeight;
        e=e || window.event;
        if(e.wheelDelta){
            //IE/Opera/Chrome     
            for(i in art_li){
                s_top=document.body.scrollTop;
                t = art_li[i].offsetTop;
                t = t - s_top;
                if((t-h) < -200){
                    art_li[i].style.left = '0';
                }
            }
        }else if(e.detail){
            //Firefox 
            for(i in art_li){
                s_top=document.documentElement.scrollTop;
                t = art_li[i].offsetTop;
                t = t - s_top;
                if((t-h) < -200){ 
                    art_li[i].style.left = '0';
                }
            }
        } 
    } 
    //注册事件
    if(document.addEventListener){ 
        document.addEventListener('DOMMouseScroll',scrollFunc,false); 
    }
    //W3C 
    //IE/Opera/Chrome
    window.onmousewheel=document.onmousewheel=scrollFunc; 
    
    $(window).bind("scroll", function(){ 
            //当滚动条滚动时
            h = window.innerHeight;
            for(i in art_li){             
                s_top=$(document).scrollTop();
                t = art_li[i].offsetTop;
                t = t - s_top; 
                if((t-h) < -200){
                    art_li[i].style.left = '0';
                }
        }
        if($(document).scrollTop() >= 300){
            $('#totop').fadeIn(500);
        }
        else{
            $('#totop').fadeOut(500);
        }
    }); 
    
    $('#totop').on('click',function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        },800);
    });
    
    //菜单弹出
    var menu_none = true;
    function menuOut(){
        $('.head_menu').stop(true.false).animate({'left':'0'},200);
        $('.head_nav').stop(true.false).animate({'left':'50%'},200);
        $('.page').stop(true.false).animate({'left':'50%'},200);
        $('.footer').stop(true.false).animate({'left':'50%'},200);      
    }
    function menuIn(){
        $('.footer').stop(true.false).animate({'left':'0'},200);
        $('.head_menu').stop(true.false).animate({'left':'-50%'},200);
        $('.head_nav').stop(true.false).animate({'left':'0'},200);
        $('.page').stop(true.false).animate({'left':'0'},200);         
    }
    $('.menu_button').click(function(){
        if(menu_none){
            menuOut();
            menu_none = false;
        }
        else{
            menuIn();
            menu_none = true;
        }
    });
        
    //手势事件
    var startX,endX;
    $(window).bind('touchstart', touchStart);
    $(window).bind('touchmove', touchMove);
    $(window).bind('touchend', touchEnd);
    
    function touchStart(event){
        var touch =   event.originalEvent.targetTouches[0];
        startX = touch.pageX;
    }
    
    function touchMove(event){
        var touch =  event.originalEvent.changedTouches[0];
        endX = touch.pageX;
    }

    function touchEnd(event){
        if(endX - startX > 160){
            menuOut();
        }
        else if(endX - startX < 160){
            menuIn();
        }
    }
    //运行时间
    function show_date_time() {
        window.setTimeout(function () {
            show_date_time();
        }, 1000);
        var birthDay = new Date("2/22/2018 22:22:22");
        var today = new Date();
        var timeStamp = (today.getTime() - birthDay.getTime());
        var wholeDay = 24 * 60 * 60 * 1000;
        var jea_howDay = timeStamp / wholeDay;
        var howDay = Math.floor(jea_howDay);
        var jea_howHour = (jea_howDay - howDay) * 24;
        var howHour = Math.floor(jea_howHour);
        var jea_howMin = (jea_howHour - howHour) * 60;
        var howMin = Math.floor((jea_howHour - howHour) * 60);
        var seconds = Math.floor((jea_howMin - howMin) * 60);
        $('#runtimes').html(howDay + "天" + howHour + "小时" + howMin + "分" + seconds + "秒");
    }
    show_date_time();
    //心心
    function rnd(m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
    function runHearts() {
        $.each($('.footer-line'), function () {
            var heartCount = ($(this).width() / 10);
            for (var i = 0; i <= heartCount; i++) {
                var size = (rnd(35, 70) / 10);
                $(this).append('<span class="footer-hearts" style="top:' + rnd(20, 80) + '%; left:' + rnd(0, 99) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + (rnd(0, 30) / 10) + 's;"></span>')
            }
        })
    }
    runHearts();




    //  $('.img_div').hover(function(){
    //     $(this).children('.title_bg').stop(true,false).animate({'bottom':'0'},300); 
    //     $(this).children('.art_title').stop(true,false).animate({'bottom':'0'},300); 
    // },function(){
    //     $(this).children('.title_bg').stop(true,false).animate({'bottom':'-55px'},300); 
    //     $(this).children('.art_title').stop(true,false).animate({'bottom':'-55px'},300);
    // });
});

