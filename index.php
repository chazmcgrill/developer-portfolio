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
  <link rel="stylesheet" href="./dist/assets/css/main.css">
  <link rel="icon", type="image/png", sizes="32x32", href="./dist/assets/img/favicon-32x32.png">
  <link rel="icon", type="image/png", sizes="16x16", href="./dist/assets/img/favicon-16x16.png">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400|Slabo+27px" rel="stylesheet">
</head>
<body>

  <?php
    include './data.php';
    include './includes/header.php';
    include './includes/bio.php';
    include './includes/services.php';
    include './includes/skills.php';
    include './includes/portfolio.php';
    include './includes/modal.php';
    include './includes/contact.php';
    include './includes/footer.php'; 
  ?>
  
  <script defer src="./dist/assets/js/app.js"></script>
</body>
</html>
