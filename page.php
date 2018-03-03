<?php get_header();?>

<div id="page">
  <div class="page pagea">
    <script src="<?php echo get_template_directory_uri(); ?>/js/flow.js"></script>
    <div class="friend-link text-center">
        <h1>我的盆羽们</h1>
      </div>
      <ul id="main">
        <?php wpjam_blogroll();?>
      </ul>
  </div>
    <div class="fri-page">
      <?php comments_template('/comments-friend.php');?>
    </div> 
</div>

<?php get_footer(); ?>


