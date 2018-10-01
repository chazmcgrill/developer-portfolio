<section class="section-skills" id="skills">
  <h3>Technologies used:</h3>
  <div class="row">
    <div class="col col_full skills">

      <?php foreach ($skills as $skill) { ?>
        <div class="skill skill--<?php echo $skill; ?>" tool-title="<?php echo $skill; ?>"></div>
      <?php } ?>
      
    </div>
  </div>
</section>