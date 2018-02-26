<?php get_header(); ?>



<div id="page" class="page">
    <div class="header-img">
        <img src="<?php echo get_template_directory_uri(); ?>/images/upload/header.png" alt="">
    </div>
    <section id="content" class="p_content">

        <ul id="article_ctn">
            <?php if ( have_posts() ) : ?>
            <?php while ( have_posts() ) : the_post(); ?>
                <?php get_template_part('content'); ?>
            <?php endwhile; ?>
        </ul>
        
        <div class="page_navi"><?php par_pagenavi(7); ?></div>
        <?php else : ?>

        <?php get_template_part('404'); ?>

        <?php endif; ?>

    </section>
</div>

<?php get_footer(); ?>