<?php get_header(); ?>
<div id="page" class="page" >
    <div class="wrap">
        <!-- Invisible SVG -->
        <svg viewBox="0 0 600 700" class="svg-defs">
            <!-- Symbol with text -->
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text">TheStarSea</text>
            </symbol>
            <!-- 文字遮罩 -->
            <mask id="m-text" maskunits="userSpaceOnUse" maskcontentunits="userSpaceOnUse">
                <rect width="100%" height="100%" class="mask__shape"></rect>
                <use xlink:href="#s-text" class="mask__text"></use>
            </mask>
            <!-- 斜线模式 -->
            <pattern id="p-lines" width="10" height="10" viewBox="0 0 10 10" patternUnits="userSpaceOnUse">
                <rect width="100%" height="100%" class="p-rect"></rect>
                <path d="M10,0 0,10" class="p-path"></path>
            </pattern>
        </svg>

        <div class="box-with-text">
            <!-- Container for video -->
            <div class="text-fill">
                <video class="video" src="<?php echo get_template_directory_uri(); ?>/images/upload/bg-video.mp4" autoplay loop></video>
            </div>
            <!-- Visible SVG -->
            <svg viewBox="0 0 600 700" class="svg-inverted-mask">
                <!-- 输出文字遮罩-->
                <circle r="44.5%" cx="50%" cy="50%" class="shape--fill" mask="url(#m-text)"></circle>
                <!-- 输出边框-->
                <circle r="44.5%" cx="50%" cy="50%" class="shape--stroke"></circle>
                <!-- 输出文字 -->
                <use xlink:href="#s-text" class="text--stroke"></use>
            </svg>
        </div>
    </div>
    
    <?php comments_template('/comments-message.php'); ?>
</div>
<?php get_footer(); ?>