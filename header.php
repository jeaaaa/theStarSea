<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="application-name" content="<?php bloginfo('name'); ?>"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="apple-mobile-app-capable" content="yes">
    <meta name="apple-mobile-app-status-bar-style" content="black">
    <meta name="author" content="jea">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <link rel="shortcut icon" type="image/x-icon" href="<?php bloginfo('template_url');?>/images/icon/favicon.ico" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/animation.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/musicplayer.css">
    <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <?php 
        if( is_home() ){
            $title=get_bloginfo('name');
        }else{
            $title=wp_title('',false)."--星辰大海";
        }
    ?>
    <title><?php echo $title; ?></title>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.pjax.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ias.min.js"></script>
    <?php wp_head();?>
    <!--[if lt IE 9]>
	   <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
    <![endif]-->
    <script>
            // title切换
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {    
      if (document.hidden) {        
        document.title = '( • ̀ω•́ )✧不要离开我~~ ' + OriginTitile;        
        clearTimeout(titleTime);    
      }    
      else {        
        document.title = 'ヾ(✿ﾟ▽ﾟ)ノ欢迎回来~ ' + OriginTitile;        
        titleTime = setTimeout(function () {            
          document.title = OriginTitile;        
        }, 2000);    
      }
    });

var ias = $.ias({
    container: "#article_ctn", //包含所有文章的元素
    item: ".artic_li", //文章元素
    pagination: ".page_navi", //分页元素
    next: ".page_navi .next", //下一页元素
});
 
ias.extension(new IASTriggerExtension({
    text: 'Load more items', //此选项为需要点击时的文字
    offset: 99, //设置此项后，到 offset+1 页之后需要手动点击才能加载，取消此项则一直为无限加载
}));
ias.extension(new IASSpinnerExtension());
ias.extension(new IASNoneLeftExtension({
    text: '没有更多的了哦', // 加载完成时的提示
}));
ias.on('rendered', function(items) {
    $('.artic_li').css('left','0px');
})
</script>
</head>

<body>
<canvas class="fireworks d-none d-sm-block"></canvas>
<script src="<?php echo get_template_directory_uri(); ?>/js/mouseStars.js" type="text/javascript" charset="utf-8"></script>		
<header class="head_menu">
    <div class="head_menu_img">
        <img src="<?php echo get_template_directory_uri(); ?>/images/icon/header.jpg">
        <h1 class="menu_title">jea's blog</h1>
        <h2 class="menu_description">“<?php bloginfo( 'name' );?>”</h2>
    </div>
    <div class="menu_main">
		<?php wp_nav_menu( array( 'theme_location' => 'main' ) ); ?>
	</div>
    <div class="menu_plur"></div>
</header>
<nav class="head_nav">
    <!-- 居左Logo -->
    <a class="menu_button"></a> 
    <div class="nav_logo_left">
	   <h1 class="nav_title_left">
		  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
			 <?php bloginfo( 'name' ); ?>
		  </a>
	   </h1>
	</div>
    <div class="nav_logo_center">
        <h1 class="nav_title_center">
		  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
			 <?php bloginfo( 'name' ); ?>
		  </a>
	   </h1>
    </div>
    <!--导航菜单 -->
    <div class="nav_main">
		<?php wp_nav_menu(); ?>
	</div>
    <!-- 搜索 -->
    <div class="nav_search">
		<form id="nav_search_form" data-pjax  method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
			<input class="nav_search_input" type="text" name="s" id="s" placeholder="Search" size="10" />
		</form>
	</div>
</nav>
<div id="jax_load">
    <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
    </div>
</div>

<div id="totop" class="totop"></div>