<section class="section-contact" id="contact">
  <div class="row row_centered">
    <h2>Contact</h2>
  </div>
  <div class="row row_centered">
    <div class="form col col_center" id="form">
      <p class="form--title"><strong>I'm currently available for your projects,</strong> please use this form to get in touch...</p>
      <form action="php/mailer.php" method="post">
        <input class="form--input" type="text" name="name" placeholder="name" id="name" required>
        <input class="form--input" type="email" name="email" placeholder="email" id="email" required>
        <textarea class="form--input" name="message" placeholder="your message" data-new-placeholder="your message" rows="5"></textarea>

        <?php
          if (isset($_GET['success'])) {
            $cls = 'is-success';
            $msg = 'Thank you! Your message has been sent.';
            if ($_GET['success'] == -1) {
              $cls = 'is-error';
              $msg = 'Oops message sending failed.';
            }
            echo "<div class=\"form--messages $cls\">$msg</div>";
          }
        ?>
        
        <input class="btn btn_submit" type="submit" value="send message">
      </form>
    </div>
  </div>
</section>
