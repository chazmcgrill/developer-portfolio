<footer>
  <div class="row">
    <div class="footer-container">
      <ul class="footer-nav">
        <li>Bio</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div class="footer-icons">

        <?php foreach($social_icons as $s_icon) { ?>
          <a href="<?php echo $s_icon['url']; ?>" aria-hidden="true" target="_blank">
            <i class="fab fa-<?php echo $s_icon['name']; ?>"></i>
          </a>
        <?php } ?>

      </div>
    </div>
    <p>&copy; 2018 Charlie Taylor All Rights Reserved</p>
  </div>
</footer>