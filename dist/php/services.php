<section class="section-services" id="services">
  <div class="row">
    <h2>Services</h2>
  </div>
  <div class="row">
    <div class="services-container">
      
      <?php foreach($services as $service) { ?>
        
        <div class="services-box">
          <i class="fas <?php echo $service['icon']; ?> fa-3x" aria-hidden="true"></i>
          <h3><?php echo $service['title']; ?></h3>
          <p><?php echo $service['text']; ?></p>
        </div>
      
      <?php } ?>

    </div>
  </div>
</section>
        
