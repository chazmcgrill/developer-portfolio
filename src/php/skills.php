<section class="section-skills" id="skills">
  <div class="row">
    <h3>Technologies used:</h3>
    <div class="skills-box">

      <?php foreach($skills as $skill) { ?>
        <div class="icon icon-<?php echo $skill; ?>" tool-title="<?php echo $skill; ?>"></div>
      <?php } ?>
      
    </div>
  </div>
</section>