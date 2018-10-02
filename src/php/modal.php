<div class="modal-bg is-hidden">
  <div class="modal">

    <div class="modal-header">
      <h4 class="modal-header--title">portfolio</h4>
      <div class="modal-header--cross" id="modal-close">&times;</div>
    </div>

    <div class="modal-content">

      <?php foreach($portfolio as $modal_item) { ?>
        <div class="portfolio-item" id="<?php echo $modal_item['id']; ?>">
          <img class="modal-content--img" src="./assets/img/<?php echo $modal_item['img']; ?>" alt="<?php echo $modal_item['title']; ?>">
          <h4 class="modal-content--title" ><?php echo $modal_item['title']; ?></h4>
          <p class="modal-content--text" ><?php echo $modal_item['text']; ?></p>
          
          <?php foreach($modal_item['links'] as $link) { ?>
            <a class="modal-content--link" target="_blank" href="<?php echo $site_urls[$link['site']] . $link['url']; ?>">
              view on <?php echo $link['site'] ?>
            </a>
          <?php } ?>

        </div>
      <?php } ?>

    </div>

    <div class="modal-footer">
      <div class="modal-footer--arrow" id="modal-prev"><?php include('./assets/img/arrow-left.svg'); ?></div>
      <div class="modal-footer--arrow" id="modal-next"><?php include('./assets/img/arrow-right.svg'); ?></div>
    </div>

  </div>
</div>