<section class="section-services" id="services">
  <div class="row row_centered">
    <h2>Services</h2>
  </div>
  <div class="row row_spaced">
    <!-- <div class="services-container"> -->
      
      <?php foreach($services as $service) { ?>
        
        <div class="col service">
          <i class="fas <?php echo $service['icon']; ?> fa-3x service--icon" aria-hidden="true"></i>
          <h3 class="service--title"><?php echo $service['title']; ?></h3>
          <p class="service--text"><?php echo $service['text']; ?></p>
        </div>
      
      <?php } ?>

    <!-- </div> -->
  </div>
</section>
        
