<?php

// 定义语言

add_action('after_setup_theme', 'my_theme_setup');
function my_theme_setup() {
	load_theme_textdomain('can', get_template_directory() . '/lang');
}

// 定义导航

register_nav_menus();

// 定义侧边栏

// if ( function_exists('register_sidebar') )
// 	register_sidebar(array(
// 		'name' => __( 'Sidebar', 'can' ),
// 		'id' => 'can',
// 		'description' => 'Sidebar',
// 		'class' => '',
// 		'before_widget' => '<section class="widgets">',
// 		'after_widget' => '</section>',
// 		'before_title' => '<h3>',
// 		'after_title' => '</h3>',
// 	)
// );

// 定义特色图片

add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 800 , 800, true );
add_filter( 'max_srcset_image_width', create_function( '', 'return 1;' ) );
function autoset_featured() {
global $post;
$already_has_thumb = has_post_thumbnail($post->ID);
if (!$already_has_thumb)  {
	$attached_image = get_children( "post_parent=$post->ID&post_type=attachment&post_mime_type=image&numberposts=1" );
	if ($attached_image) {
		foreach ($attached_image as $attachment_id => $attachment) {
			set_post_thumbnail($post->ID, $attachment_id);
		}
	}
}
}
add_action('new_to_publish', 'autoset_featured');

//分页导航
function can_pagenavi () {
	global $wp_query, $wp_rewrite;
	$wp_query->query_vars['paged'] > 1 ? $current = $wp_query->query_vars['paged'] : $current = 1;
	$pagination = array(
		'base' => @add_query_arg('paged','%#%'),
		'format' => '',
		'total' => $wp_query->max_num_pages,
		'current' => $current,
		'show_all' => false,
		'type' => 'plain',
		'end_size'=>'0',
		'mid_size'=>'5',
		'prev_text' => __('←','can'),
		'next_text' => __('→','can')
	);
	if( $wp_rewrite->using_permalinks() )
		$pagination['base'] = user_trailingslashit( trailingslashit( remove_query_arg('s',get_pagenum_link(1) ) ) . 'page/%#%/', 'paged');
	if( !empty($wp_query->query_vars['s']) )
		$pagination['add_args'] = array('s'=>get_query_var('s'));
	echo paginate_links($pagination);
}

// 评论附加函数
function delete_comment_link( $id ) {
	if (current_user_can('level_5')) {
		echo '<a class="comment-delete-link" href="'.admin_url("comment.php?action=cdc&c=$id").'">删除</a> ';
	}
}

// 加载评论
if ( ! function_exists( 'can_comment' ) ) :
function can_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
	?>
	<li <?php comment_class(); ?> id="comment-<?php comment_ID(); ?>">
		<p><?php echo 'Pingback '; ?> <?php comment_author_link(); ?> <aside class="comment-link"><?php edit_comment_link( '编辑', '<span class="comment-edit-link">', '</span>' ); ?></aside></p>
	<?php
			break;
		default :
		global $post;
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment">
			<?php
				echo '<div class="avatar">' . get_avatar( $comment, 44 ) . '</div><div class="cmt_r">';
				printf( '<span class="cmt_meta_head">%1$s</span>',
					get_comment_author_link() );
				printf( '<span class="cmt_meta_time"><a href="%1$s"><time datetime="%2$s">%3$s</time></a></span>',
					esc_url( get_comment_link( $comment->comment_ID ) ),
					get_comment_time( 'c' ),
					sprintf( '%1$s %2$s' , get_comment_date(), get_comment_time() )
				);
			?>
				
			<aside class="comment-link d-block">
				<?php edit_comment_link( __('編輯','can'), '', '' ); ?>
				<?php delete_comment_link(get_comment_ID()); ?>
				<?php comment_reply_link( array_merge( $args, array( 'reply_text' => __('回复','can'), 'after' => '', 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
			</aside>

			<div class="cmt_con"><?php comment_text(); ?></div>

			<?php if ( '0' == $comment->comment_approved ) : ?>
				<p class="comment-awaiting-moderation"><?php _e('审核中','can'); ?></p>
			<?php endif; ?>
			</div>
		</article>
	<?php
		break;
	endswitch;
}
endif;

// 设置页单选按钮

function can_va($option) {
	if ( get_option($option) == "yes" ) { echo 'checked="true"'; }
}

function can_vb($option) {
	if ( get_option($option) == "no" ) { echo 'checked="true"'; }
}

//友情链接
add_action('admin_init', 'wpjam_blogroll_settings_api_init');
function wpjam_blogroll_settings_api_init() {
    add_settings_field('wpjam_blogroll_setting', '友情链接', 'wpjam_blogroll_setting_callback_function', 'reading');
    register_setting('reading','wpjam_blogroll_setting');
}
 
function wpjam_blogroll_setting_callback_function() {
    echo '<textarea name="wpjam_blogroll_setting" rows="10" cols="50" id="wpjam_blogroll_setting" class="large-text code">' . get_option('wpjam_blogroll_setting') . '</textarea>';
}
function wpjam_blogroll(){
    $wpjam_blogroll_setting = get_option('wpjam_blogroll_setting');
    if($wpjam_blogroll_setting){
        $wpjam_blogrolls = explode("\n", $wpjam_blogroll_setting);
        foreach ($wpjam_blogrolls as $wpjam_blogroll) {
            $wpjam_blogroll = explode("|", $wpjam_blogroll );
            echo '<li class="box">
			<div class="box-border">
			  <div class="pal-img d-none d-sm-block">
				<img src="'.trim($wpjam_blogroll[3]).'" alt="'.esc_attr(trim($wpjam_blogroll[1])).'">
			  </div>
			  <div class="pal-text">
				<h3>'.trim($wpjam_blogroll[1]).'</h3>
				<p>'.trim($wpjam_blogroll[2]).'</p>
			  </div>
			  <a href="'.trim($wpjam_blogroll[0]).'" title="'.esc_attr(trim($wpjam_blogroll[1])).'" target="_blank"></a>
			</div>
		  </li>';
        }
    }
}

// function is_pjax(){
// 	return array_key_exists('HTTP_X_PJAX', $_SERVER) && $_SERVER['HTTP_X_PJAX'];
// }


// 谷歌字体移除
// function remove_open_sans() {
// 	wp_deregister_style('open-sans');
// 	wp_register_style('open-sans',false);
// 	wp_enqueue_style('open-sans','');
// }
// if ( get_option('can_rmgf') == "yes" ) {
// 	add_action('init','remove_open_sans');
// }
?>

