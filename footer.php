<div class="wp d-none d-xl-block">
  <div class="wp-box">
    <img src="<?php echo get_template_directory_uri(); ?>/images/icon/mplayer_error.png" alt="music cover" class="wp-cover">
    <div class="wp-info">
      <p class="wp-name">星辰大海</p>
    </div>
    <div class="wp-btn">
      <a class="wp-prev" title="上一首"></a>
      <a class="wp-pause" title="播放"></a>
      <a class="wp-next" title="下一首"></a>
      <a class="wp-mode" title="播放模式"></a>
      <div class="wp-vol">
        <a class="wp-vol-img" title="静音"></a>
      </div>
      <a class="wp-lrc-toggle"></a>
    </div>
    <div class="wp-pro">
      <div class="wp-pro-current">
        <span class="wp-pro-btn"></span>
      </div>
    </div>
    <div class="wp-menu">
      <a class="wp-list-toggle"></a>
    </div>
  </div>
  <span class="wp-toggle">
    <span class="wp-toggle-img"></span>
  </span>
  <div class="wp-lrc-box wp-lrc-show">
    <ul class="wp-lrc"></ul>
  </div>
  <button class="wp-lrc-close"></button>
  <div class="wp-list-box">
    <ul class="wp-list-title"></ul>
    <table class="wp-list-table">
      <thead>
        <tr>
          <th>歌名</th>
          <th>歌手</th>
        </tr>
      </thead>
      <tbody class="wp-list"></tbody>
    </table>
  </div>
</div>

<footer class="pb-2">
  <div class="footer-line mb-2"></div>
  <div class="footer-img d-none d-sm-block">
    <img src="<?php echo get_template_directory_uri(); ?>/images/upload/acfun.png" alt="ACFUN">
    <div class="footer-img-text">
      <span class="footer-img-text-dark">AC在</span>
      <br>
      <span class="footer-img-text-white">爱一直在</span>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="social">
          <a href="https://github.com/jeaaaa"><img src="<?php echo get_template_directory_uri(); ?>/images/icon/github.png" alt="github"></a>
          <p class="jitter">わが征くは星の大海</p>
          <a href="https://twitter.com/jealoveQueen"><img src="<?php echo get_template_directory_uri(); ?>/images/icon/twitter.png" alt="twitter"></a>
        </div>
        
        <span>辣鸡博客存活确认<span id="runtimes"></span></span><br/>
        <span>
          <a href="https://cn.wordpress.org/">自豪的采用：wordpress</a>
           | 自建主题：thestarsea | 存放于：<a href="https://cloud.google.com">Google Cloud Platform</a>
          </span>
      </div>
    </div>
  </div>
</footer>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
  crossorigin="anonymous"></script> -->
<script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/musicplayer.js" type="text/javascript" charset="utf-8"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/musicplayer-list.js" type="text/javascript" charset="utf-8"></script> 
<script>
  var modeText = ['顺序播放', '单曲循环', '随机播放', '列表循环'];
  var player = new MPlayer({
      ////容器选择器名称
      containerSelector: '.wp',
      //// 播放列表
      songList: mplayer_song,
      //// 专辑图片错误时显示的图片
      defaultImg: './images/icon/mplayer_error.png',
      // 自动播放
      autoPlay: false,
      //// 播放模式(0->顺序播放,1->单曲循环,2->随机播放,3->列表循环(默认))
      // playMode: 3,
      // playList: 0,
      // playSong: 0,
      //// 当前歌词距离顶部的距离
      //lrcTopPos: 34,
      // 列表模板，用${变量名}$插入模板变量
      listFormat: '<tr><td>${name}$</td><td>${singer}$</td></tr>',
    },
    function () {
      // 绑定事件
      this.on('afterInit', function () {
        console.log('播放器初始化完成，正在准备播放');
      }).on('beforePlay', function () {
        var $this = this;
        var song = $this.getCurrentSong(true);
        var songName = song.name + ' - ' + song.singer;
        console.log('即将播放' + songName + '，return false;可以取消播放');
      }).on('timeUpdate', function () {
        var $this = this;
        console.log('当前歌词：' + $this.getLrc());
      }).on('end', function () {
        var $this = this;
        var song = $this.getCurrentSong(true);
        var songName = song.name + ' - ' + song.singer;
        console.log(songName + '播放完毕，return false;可以取消播放下一曲');
      }).on('mute', function () {
        var status = this.getIsMuted() ? '已静音' : '未静音';
        console.log('当前静音状态：' + status);
      }).on('changeMode', function () {
        var $this = this;
        var mode = modeText[$this.getPlayMode()];
        $this.dom.container.find('.wp-mode').attr('title', mode);
        console.log('播放模式已切换为：' + mode);
      });
    });

  //$(document.body).append(player.audio); // 测试用
  setEffects(player);
</script>

</body>

</html>