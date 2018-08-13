<section class="section-contact" id="contact">
  <div class="row">
    <h2>Contact</h2>
    <div class="form-container" id="form">
      <p><strong>I'm currently available for your projects,</strong> please use this form to get in touch...</p>
      <form action="mailer.php" method="post">
        <input type="text" name="name" placeholder="name" id="name" required>
        <input type="email" name="email" placeholder="email" id="email" required>
        <textarea name="message" placeholder="your message" data-new-placeholder="your message" rows="5"></textarea>
        <?php
          if (isset($_GET['success'])) {
            $cls = 'success';
            $msg = 'Thank you! Your message has been sent.';
            if ($_GET['success'] == -1) {
              $cls = 'error';
              $msg = 'Oops message sending failed.';
            }
            echo "<div class=\"form-messages $cls\">$msg</div>";
          }
        ?>
        <input type="submit" value="send">
      </form>
    </div>
  </div>
</section>
