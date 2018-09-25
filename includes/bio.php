<section class="section-bio" id="bio">
  <div class="row">
    <h2>Bio</h2>
    <div class="bio-wrap"><img src="./dist/assets/img/profile-pic.jpg" alt="Charlie Taylor">
      <p class="bio-text"><strong>Hello,</strong> I'm Charlie A front-end developer and graphic artist from Leeds. I love making well designed responsive websites and interactive applications.</p>
      <div class="bio-icons">
        
        <?php foreach ($social_icons as $s_icon) { ?>
          <a href="<?php echo $s_icon['url']; ?>" aria-hidden="true" target="_blank">
            <i class="fab fa-<?php echo $s_icon['name']; ?>"></i>
          </a>
        <?php } ?>
        
      </div>
    </div>
  </div>
</section>
