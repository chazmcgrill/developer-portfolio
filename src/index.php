<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Charlie Taylor - Web Development &amp; Graphic Arts</title>
  <meta name="description", content="Modern web development and graphic arts, the official website of Charlie Taylor.">
  <meta meta name="author", content="Charlie Taylor">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./assets/css/main.css">
  <link rel="icon", type="image/png", sizes="32x32", href="./assets/img/favicon-32x32.png">
  <link rel="icon", type="image/png", sizes="16x16", href="./assets/img/favicon-16x16.png">
  <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:300,400|Slabo+27px" rel="stylesheet"> -->
</head>
<body>

  <?php
    include './php/data.php';
    include './php/header.php';
    include './php/bio.php';
    include './php/services.php';
    include './php/skills.php';
    include './php/portfolio.php';
    include './php/modal.php';
    include './php/contact.php';
    include './php/footer.php'; 
  ?>

  <!-- grid test -->
  <section>
    <h3>centered wider column:</h3>
    <div class="row row_centered">
      <div class="col col_center">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
    </div>

    <h3>normal 3 column:</h3>
    <div class="row row_spaced">
      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
    </div>

    <h3>2 items spaced:</h3>
    <div class="row row_spaced">
      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio, minus blanditiis vel explicabo ipsum non eligendi quae harum voluptatum iste natus, a voluptates soluta. Illo odit enim porro delectus!</p>
      </div>
    </div>
  </section>
  
  <script defer src="./assets/js/app.js"></script>
</body>
</html>
