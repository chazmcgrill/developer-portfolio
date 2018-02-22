<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Charlie Taylor - Web Development &amp; Graphic Arts</title>
    <meta name="description" content="Modern web development and graphic arts, the official website of Charlie Taylor.">
    <meta meta name="author" content="Charlie Taylor">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://use.fontawesome.com/d891ebaa12.js"></script>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">
  </head>
  <body>
    <header>
      <nav>
        <div class="row">
          <div class="nav-container"><img class="animated fadeInDown" src="assets/img/logo.png" alt="Charlie Taylor Logo">
            <ul class="main-nav">
              <li>Bio</li>
              <li>Skills</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row animated fadeIn">
        <div class="hero-text-box">
          <h1>Charlie Taylor</h1>
          <hr class="animated zoomIn">
          <h3>Web Developer &amp; Graphic Artist</h3>
        </div>
      </div>
      <div class="arrow-box"><i class="arrow animated"></i></div>
    </header>
    <section class="section-bio" id="bio">
      <div class="row">
        <h2>Bio</h2>
        <div class="bio-wrap"><img src="assets/img/profile-pic.jpg" alt="Charlie Taylor">
          <p class="bio-text"><strong>Hello,</strong> my name is Charlie. I'm A front-end web developer and graphic artist from Leeds. I love making well designed responsive websites and interactive applications.</p>
          <div class="bio-icons"><a href="https://codepen.io/chazmcgrill/" aria-hidden="true" target="_blank"><i class="fa fa-codepen"></i></a><a href="https://www.freecodecamp.com/chazmcgrill" aria-hidden="true" target="_blank"><i class="fa fa-free-code-camp"></i></a><a href="https://github.com/chazmcgrill" aria-hidden="true" target="_blank"><i class="fa fa-github"></i></a><a href="https://www.linkedin.com/in/charlie-taylor-941434134/" aria-hidden="true" target="_blank"><i class="fa fa-linkedin"></i></a><a href="https://instagram.com/charlietcoder" aria-hidden="true" target="_blank"><i class="fa fa-instagram"></i></a></div>
        </div>
      </div>
    </section>
    <section class="section-skills" id="skills">
      <div class="row">
        <h2>Skills</h2>
      </div>
      <div class="row">
        <div class="skills-container">
          <div class="skills-box"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <h3>Design</h3>
            <p>For every project I carefully plan ideas using sketches, mind maps and wireframes. I have a strong background in graphic arts and illustration. I'm fluent in many Adobe programs including Photoshop and Illustrator.</p>
          </div>
          <div class="skills-box"><i class="fa fa-desktop" aria-hidden="true"></i>
            <h3>Code</h3>
            <p>I build sites and applications using HTML CSS and Javascript. I keep my code semantic and well documented so it is easy to maintain and understand. I'm also confident in a range of libraries like jQuery and Bootstrap.</p>
          </div>
          <div class="skills-box"><i class="fa fa-server" aria-hidden="true"></i>
            <h3>Build</h3>
            <p>My projects are precompiled from Sass and Pug using CodeKit. I manage changes and version control through GitHub. I'm currently studying backend technologies such as Node, mySQL and PHP.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-portfolio" id="portfolio">
      <div class="row">
        <h2>Portfolio</h2>
      </div>
      <div class="row">
        <div class="portfolio-img-grid">
          <div class="portfolio-item-box"><img src="assets/img/portfolio-analogclock.jpg" alt="Sass Analog Clock" name="pf0">
            <h3>Analog Style Clock</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-calc.jpg" alt="Javascript Calculator" name="pf1">
            <h3>Javascript Calculator</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-hurricanecharlie.jpg" alt="Hurricane Charlie" name="pf2">
            <h3>Hurricane Charlie Website</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-pizzabox.jpg" alt="Pizzabox App" name="pf3">
            <h3>React Pizza Box</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-pomodoro.jpg" alt="Pomodoro App" name="pf4">
            <h3>Pomodoro Timer</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-quote.jpg" alt="Quote Machine" name="pf5">
            <h3>Quote Machine</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-life.jpg" alt="Life App" name="pf6">
            <h3>React Life App</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-simon.jpg" alt="Simon Game" name="pf7">
            <h3>Simon Game</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-tictactoe.jpg" alt="Tictactoe Game" name="pf8">
            <h3>TicTacToe</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-twitch.jpg" alt="Twitch TV App" name="pf9">
            <h3>Twitch TV App</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-weather.jpg" alt="Weather App" name="pf10">
            <h3>Weather App</h3>
          </div>
          <div class="portfolio-item-box"><img src="assets/img/portfolio-leaderboard.jpg" alt="FCC Camper Leaderboard" name="pf11">
            <h3>Camper Leaderboard</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="modal-bg hidden">
      <div class="modal">
        <div class="modal-header">
          <h4>portfolio</h4>
          <div class="close-button">&times;</div>
        </div>
        <div class="modal-content">
          <div class="portfolio-item" id="pf0"><img src="assets/img/portfolio-analogclock.jpg" alt="FCC Camper Leaderboard">
            <h4>Analog Style Clock</h4>
            <p>Analog style clock created using vanilla javascript. Makes use of loops within pug and sass to create the clock.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/mMjVmy/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/analog-clock">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf1">
            <h4>Javascript Calculator</h4><img src="assets/img/portfolio-calc.jpg" alt="FCC Camper Leaderboard">
            <p>Simple arithmetic calculator created using javascript. Includes percentage, decimals and negate functionality.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/QgKvLZ/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/calculator">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf2">
            <h4>Hurricane Charlie Website</h4><img src="assets/img/portfolio-hurricanecharlie.jpg" alt="Hurricane Charlie">
            <p>Personal illustration and art portfolio containing gallery, blog and shop. This was made using bootstrap and jquery.</p><a target="_blank" href="http://www.hurricanecharlie.co.uk">view website</a><a target="_blank" href="https://github.com/chazmcgrill/hurricane-charlie-website">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf3">
            <h4>React Pizza App</h4><img src="assets/img/portfolio-pizzabox.jpg" alt="React Pizza App">
            <p>React app for storing pizza recipes, functionality for adding new recipes and editing or deleting existing recipes. Data is stored locally so when browser is reloaded the information is kept.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/pdOjGm/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/recipe-box">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf4">
            <h4>Pomodoro Timer</h4><img src="assets/img/portfolio-pomodoro.jpg" alt="FCC Camper Leaderboard">
            <p>Pomodoro timer for improving time management and workflow. Animated and coded using css and javascript.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/rwGbVR/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/pomodoro-clock">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf5">
            <h4>Quote Machine</h4><img src="assets/img/portfolio-quote.jpg" alt="Quote Machine">
            <p>App that generates random quotes collected from an external API. New quotes can be generated and can be shared on twitter.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/jBmygM/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/quote-machine">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf6">
            <h4>React Life App</h4><img src="assets/img/portfolio-life.jpg" alt="React Life App">
            <p>React project based on the cellular automaton 'Life' devised by mathematician John Conway.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/QOoOaj/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/game-of-life">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf7">
            <h4>Simon Game</h4><img src="assets/img/portfolio-simon.jpg" alt="Simon Game">
            <p>A javascript version of the 1970s memory skill game simon. Requires user to repeat a random sequence of lights and sound tones.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/dzvPgp/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/simon-game">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf8">
            <h4>TicTacToe</h4><img src="assets/img/portfolio-tictactoe.jpg" alt="TicTacToe">
            <p>Game of noughts and crosses human vs computer. Utilises a minimax algorithm to make the computer unbeatable.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/EwyGOG/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/tic-tac-toe">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf9">
            <h4>TwitchTV App</h4><img src="assets/img/portfolio-twitch.jpg" alt="FCC Camper Leaderboard">
            <p>Application for showing TwitchTV channel data using their API. Shows channel status and links to the video stream.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/oWpVOG/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/twitch-tv">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf10">
            <h4>Weather App</h4><img src="assets/img/portfolio-weather.jpg" alt="FCC Camper Leaderboard">
            <p>Provides current weather status for your current location. Uses geolocation and uses two external API's for location and weather.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/BRKaPB/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/weather">view on github</a>
          </div>
          <div class="portfolio-item filtered" id="pf11">
            <h4>Camper Leaderboard</h4><img src="assets/img/portfolio-leaderboard.jpg" alt="FCC Camper Leaderboard">
            <p>React leaderboard showing the top point scoring campers on freecodecamp. It uses an API to populate the data.</p><a target="_blank" href="https://codepen.io/chazmcgrill/full/NwPBWE/">view on codepen</a><a target="_blank" href="https://github.com/chazmcgrill/camper-leaderboard">view on github</a>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-prev"><i class="fa fa-arrow-left"></i></button>
          <button class="modal-next"><i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    <section class="section-contact" id="contact">
      <div class="row">
        <h2>Contact</h2>
        <div class="form-container" id="form">
          <p><strong>I'm currently available for your projects.</strong> please use this form to get in touch with any ideas.</p>
          <form method="post" action="mailer.php">
            <input type="text" name="name" placeholder="name" id="name" required>
            <input type="email" name="email" placeholder="email" id="email" required>
            <textarea name="message" placeholder="your message" data-new-placeholder="your message" rows="5"></textarea>
            <?php
              if ($_GET['success'] == 1) {
                echo "<div class=\"form-messages success\">Thank you! Your message has been sent.</div>";
              }

              if ($_GET['success'] == -1) {
                echo "<div class=\"form-messages error\">Oops message sending failed.</div>";
              }
            ?>
            <input type="submit" value="send">
          </form>
        </div>
      </div>
    </section>
    <footer>
      <div class="row">
        <div class="footer-container">
          <ul class="footer-nav">
            <li>Bio</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <div class="footer-icons"><a href="https://codepen.io/chazmcgrill/" aria-hidden="true" target="_blank"><i class="fa fa-codepen"></i></a><a href="https://www.freecodecamp.com/chazmcgrill" aria-hidden="true" target="_blank"><i class="fa fa-free-code-camp"></i></a><a href="https://github.com/chazmcgrill" aria-hidden="true" target="_blank"><i class="fa fa-github"></i></a><a href="https://www.linkedin.com/in/charlie-taylor-941434134/" aria-hidden="true" target="_blank"><i class="fa fa-linkedin"></i></a><a href="https://instagram.com/charlietcoder" aria-hidden="true" target="_blank"><i class="fa fa-instagram"></i></a></div>
        </div>
        <p>&copy; 2017 Charlie Taylor All Rights Reserved</p>
      </div>
    </footer>
    <script src="assets/js/functions.js"></script>
  </body>
</html>
