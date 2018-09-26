<section class="section-portfolio" id="portfolio">
  <div class="row">
    <h2>Portfolio</h2>
  </div>
  <div class="row">
    <div class="portfolio-img-grid">

      <?php foreach ($portfolio as $p) { ?>
        <div class="portfolio-item-box">
          <img src="./assets/img/<?php echo $p['img']; ?>"
            alt="<?php echo $p['title']; ?>" 
            name="<?php echo $p['id']; ?>">
          <h3><?php echo $p['title']; ?></h3>
        </div>
      <?php } ?>
      
    </div>
  </div>
</section>