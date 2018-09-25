<div class="modal-bg hidden">
  <div class="modal">
    <div class="modal-header">
      <h4>portfolio</h4>
      <div class="close-button">&times;</div>
    </div>
    <div class="modal-content">

      <?php foreach($portfolio as $modal_item) { ?>
        <div class="portfolio-item" id="<?php echo $modal_item['id']; ?>">
          <img src="./dist/assets/img/<?php echo $modal_item['img']; ?>" alt="<?php echo $modal_item['title']; ?>">
          <h4><?php echo $modal_item['title']; ?></h4>
          <p><?php echo $modal_item['text']; ?></p>
          <?php foreach($modal_item['links'] as $link) { ?>
            <a target="_blank" href="<?php echo $site_urls[$link['site']] . $link['url']; ?>">
              view on <?php echo $link['site'] ?>
            </a>
          <?php } ?>
        </div>
      <?php } ?>
    
    </div>
    <div class="modal-footer">
      <button class="modal-prev"><i class="fa fa-arrow-left"></i></button>
      <button class="modal-next"><i class="fa fa-arrow-right"></i></button>
    </div>
  </div>
</div>