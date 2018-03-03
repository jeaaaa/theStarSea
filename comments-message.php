<?php if ( post_password_required() ) return; ?>

<div  class="cmt">
    <div class="container">
        <div class="card-body">
            <div class="card-title">
                <span class="aboutme">about me -- jea</span>
                <span class="card-text">2.5次元小帅哥<s>A站人均小帅；</s></span>
                <span>还未脱宅；</span>
                <span>QQ音乐：endlesslove❦。</span>
                <div class="card-icon">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/icon/header.jpg" alt="jea">
                </div>
            </div>
            <div class="card-footer d-flex justify-content-around mt-4">
                <div class="web-github">
                    <a href="https://github.com/jeaaaa"><img src="<?php echo get_template_directory_uri(); ?>/images/icon/github.png" alt="github"></a>
                </div>
                <div class="web-acfun">
                    <a href="http://www.acfun.cn/u/940332.aspx"><img src="<?php echo get_template_directory_uri(); ?>/images/icon/acfun.png" alt="acfun"></a>
                </div>
                <div class="web-twitter">
                    <a href="https://twitter.com/jealoveQueen"><img src="<?php echo get_template_directory_uri(); ?>/images/icon/twitter.png" alt="twitter"></a>
                </div>
            </div>
        </div>
    </div>

	<?php if ( have_comments() ) : ?>

		<ol id="comments" class="cmt_list">
			<?php wp_list_comments( array( 'callback' => 'can_comment', 'style' => 'ol' ) ); ?>
		</ol>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
		<nav id="cmt-nav" class="navigation" role="navigation">
			<span class="cmt-nav-prev"><?php previous_comments_link('<img src="<?php echo get_template_directory_uri(); ?>/images/upload/left.png" />'); ?></span>
			<span class="cmt-nav-next"><?php next_comments_link('<img src="<?php echo get_template_directory_uri(); ?>/images/upload/right.png" />'); ?></span>
		</nav>
		<?php endif; ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<p class="nocomments"><?php _e('要和谐，不要吐槽~','can'); ?></p>
		<?php endif; ?>

	<?php endif; ?>

<?php

$comments_args = array(
  'id_form'           => 'cmt_form',
  'id_submit'         => 'cmt_submit',
  'title_reply'       => __('兄dei，留言'),
  'title_reply_to'    => __('吐槽 %s','can'),
  'cancel_reply_link' => __('放弃治疗','can'),
  'label_submit'      => __('发♂射','can'),

  'comment_field' =>  '<p class="comment-form-comment"><textarea id="comment" name="comment" required aria-required="true" placeholder="' . __('Ctrl + Enter 直接发♂射') .'">' .
    '</textarea></p>',

  'must_log_in' => '<p class="must-log-in">' .
    sprintf(
      __( '你必须 <a href="%s">登录</a> 后吐槽。','can' ),
      wp_login_url( apply_filters( 'the_permalink', get_permalink() ) )
    ) . '</p>',

  'logged_in_as' => '<p class="logged-in-as">' .
    sprintf(
    __('以 <a href="%1$s">%2$s</a> 登录。 <a href="%3$s" title="Log out of this account">退出</a>','can'),
      admin_url( 'profile.php' ),
      $user_identity,
      wp_logout_url( apply_filters( 'the_permalink', get_permalink( ) ) )
    ) . '</p>',

  'comment_notes_before' => '',

  'comment_notes_after' => '',

  'fields' => apply_filters( 'comment_form_default_fields', array(

    'author' =>
      '<div id="cmt_form_meta"><input placeholder="'.__('称呼','can').'" id="author" name="author" type="text" required="required" value="' . esc_attr( $commenter['comment_author'] ) .
      '" />',

    'email' =>
      '<input placeholder="'.__('邮箱','can').'" id="email" name="email" type="email" required="required" value="' . esc_attr(  $commenter['comment_author_email'] ) .
      '" /></div>'
    )
  ),
); ?>

	<?php comment_form($comments_args); ?>

</div>