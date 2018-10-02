<section class="section-portfolio" id="portfolio">
  <div class="row row_centered">
    <h2>Portfolio</h2>
  </div>
  <div class="row row_centered">
    <div class="projects">

      <?php foreach ($portfolio as $p) { ?>
        <div class="project" id="<?php echo $p['id']; ?>" style="background-image: url('./assets/img/<?php echo $p['img']; ?>')">
          <div class="project--overlay"></div>
          <h3 class="project--title"><?php echo $p['title']; ?></h3>
        </div>
      <?php } ?>
      
    </div>
  </div>
</section>