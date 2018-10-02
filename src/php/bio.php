<section class="section-bio" id="bio">
  <h2>Bio</h2>
  <div class="row row_centered">
    <div class="bio col col_center">
      <div>
        <img class="bio--img" src="./assets/img/profile-pic.jpg" alt="Charlie Taylor">
        <p class="bio--text"><strong>Hello,</strong> I'm Charlie A front-end developer and graphic artist from Leeds. I love making well designed responsive websites and interactive applications.</p>
        <div class="icons_bio">  
          <?php foreach ($social_icons as $s_icon) { ?>
            <a href="<?php echo $s_icon['url']; ?>" aria-hidden="true" target="_blank">
              <?php
                $icon = file_get_contents('assets/img/si-' . $s_icon['name'] . '.svg');
                $icon_bio = str_replace('#', 'icon_bio', $icon);
                echo $icon_bio;
              ?>
            </a>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>
</section>
