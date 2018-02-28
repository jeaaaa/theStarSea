<?php get_header(); ?>

<div id="page" class="page">
	<!-- <div class="charector-wrap " id="js_wrap">
		<div class="charector"></div>
	</div> -->
	<section id="s_content" class="single">

		<?php the_post();?>
		<?php 
			$read=get_post_meta( $post->ID, '_read', true); 
            update_post_meta( $post->ID, '_read', $read+1 ); 
		?>
		<div class="card glow-card">
			<div class="img">
				<?php if(has_post_thumbnail()){ ?>
				<?php the_post_thumbnail(); ?>
				<?php } else{ ?>
					<img class="card-img-top" src="<?php bloginfo('template_url');?>/images/upload/bg-one.png" alt="Card image cap">
				<?php } ?>
			</div>
			<div class="card-body">
				<h1 class="text-center">
					<?php the_title(); ?>
				</h1>
				<div class="article-details">
					<span class="category">
						分类：<?php the_category(); ?>
					</span>
					<span class="lable_div d-b">
						标签：<?php the_tags('','',''); ?>
					</span>
					<span>
						出生于：<?php the_date(); ?>
					</span>
					<span class="d-b">
						吹水：
						<a href="<?php comments_link(); ?>">
							<?php comments_number( __('还没吐槽','dpt') , __('一楼是基佬','dpt') , __('% 回复','dpt') ); ?>
						</a>
					</span>
					<span class="d-b">
						围观：<?php echo get_post_meta( $post->ID, '_read', true);?>
					</span>
					<span>
						<?php echo edit_post_link( __('编辑','dpt') ); ?>
					</span>

				</div>
				<p class="card-text">
					<?php the_content(); ?>
				</p>
				<nav class="post_nav">
					<?php
						$prev_post = get_previous_post();
						if (!empty( $prev_post )): ?>
						<div class="article-left">
							<span class="article-last">上一篇</span>
							<?php previous_post_link( '%link', '' . '%title' ); ?>
						</div>
						<?php endif; ?>
						<?php
						$next_post = get_next_post();
						if(!empty( $next_post)): ?>
							<div class="article-right">
								<?php next_post_link( '%link', '%title ' . '' ); ?>
								<span class="article-next">下一篇</span>
							</div>
							<?php endif; ?>
				</nav>
			</div>
		</div>
	</section>
	<?php comments_template( '', true ); ?>
</div>

<?php get_footer(); ?>
