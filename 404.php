<?php get_header(); ?>
<div id="page" class="page">
    <div class="div_404 mt-5">
        <h1>你想要的呀，并不存在！<font id='jump'>5</font>秒后返回首页，或<a href="<?php bloginfo( 'url' ); ?>">直接返回</a></h1>
        <img class="img-fluid mt-5" src="<?php echo get_template_directory_uri(); ?>/images/upload/404.jpg" alt="404">
    </div>
    <script>
    function autoJump(sec){
        $('#jump').html(sec);
        if(--sec>0){
            setTimeout("autoJump("+sec+")", 1000);
        }else{
            window.location.href="<?php bloginfo('url'); ?>"
        }
    }
    autoJump(5);
    </script>
</div>

