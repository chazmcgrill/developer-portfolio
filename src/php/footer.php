<footer class="footer">
  <div class="row row_spaced">

      <ul class="nav">
        <li class="nav--item">Bio</li>
        <li class="nav--item">Services</li>
        <li class="nav--item">Portfolio</li>
        <li class="nav--item">Contact</li>
      </ul>

      <div class="footer--icons">
        <?php foreach($social_icons as $s_icon) { ?>
          <a href="<?php echo $s_icon['url']; ?>" aria-hidden="true" target="_blank">
            <i class="fab fa-<?php echo $s_icon['name']; ?>"></i>
          </a>
        <?php } ?>
      </div>

    </div>

    <div class="row row_centered">
      <p class="footer--copyright">&copy; 2018 Charlie Taylor All Rights Reserved</p>
    </div>


  </div>
</footer>