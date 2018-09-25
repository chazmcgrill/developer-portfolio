<?php

  $site_urls = [
    'codepen' => 'https://codepen.io/chazmcgrill/full/',
    'github' => 'https://github.com/chazmcgrill/',
    'website' => ''
  ];

  $portfolio = [
    [
      'img' => 'portfolio-analogclock.jpg', 
      'title' => 'Analog Style Clock',
      'id' => 'pf0',
      'text' => 'Analog style clock created using vanilla javascript. Makes use of loops within pug and sass to create the clock.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'mMjVmy/' ],
        [ 'site' => 'github', 'url' => 'analog-clock' ]
      ]
    ],
    [
      'img' => 'portfolio-calc.jpg', 
      'title' => 'Javascript Calculator',
      'id' => 'pf1',
      'text' => 'Simple arithmetic calculator created using javascript. Includes percentage, decimals and negate functionality.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'QgKvLZ/' ],
        [ 'site' => 'github', 'url' => 'calculator' ]
      ]
    ],
    [
      'img' => 'portfolio-hurricanecharlie.jpg', 
      'title' => 'Hurricane Charlie Website',
      'id' => 'pf2',
      'text' => 'Personal illustration portfolio contains gallery, contact and shop. key technologies React, React-router, Node, Express and CSS grid.',
      'links' => [
        [ 'site' => 'website', 'url' => 'https://www.hurricanecharlie.co.uk' ],
        [ 'site' => 'github', 'url' => 'hurricane-charlie-website' ]
      ]
    ],
    [
      'img' => 'portfolio-pizzabox.jpg', 
      'title' => 'React Pizza Box',
      'id' => 'pf3',
      'text' => 'React app for storing pizza recipes, functionality for adding new recipes and editing or deleting existing recipes. Info is stored locally so when browser is reloaded the data persists.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'pdOjGm/' ],
        [ 'site' => 'github', 'url' => 'recipe-box' ]
      ]
    ],
    [
      'img' => 'portfolio-pomodoro.jpg', 
      'title' => 'Pomodoro Timer',
      'id' => 'pf4',
      'text' => 'Pomodoro timer for an app for improving time management and workflow. Animated and coded using css and javascript.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'rwGbVR/' ],
        [ 'site' => 'github', 'url' => 'pomodoro-clock' ]
      ]
    ],
    [
      'img' => 'portfolio-quote.jpg', 
      'title' => 'Quote Machine',
      'id' => 'pf5',
      'text' => 'App that generates random quotes collected from an external API. New quotes can be generated and can be shared on twitter.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'jBmygM/' ],
        [ 'site' => 'github', 'url' => 'quote-machine' ]
      ]
    ],
    [
      'img' => 'portfolio-life.jpg', 
      'title' => 'Life App',
      'id' => 'pf6',
      'text' => 'React project based on the cellular automaton \'Life\' devised by mathematician John Conway.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'QOoOaj/' ],
        [ 'site' => 'github', 'url' => 'game-of-life' ]
      ]
    ],
    [
      'img' => 'portfolio-bugsweeper.jpg', 
      'title' => 'Bugsweeper',
      'id' => 'pf7',
      'text' => 'Recreation of the classic windows desktop game minesweeper. Built using React javascript, it utilises an \'flood fill\' algorithm.', 
      'links' => [
        [ 'site' => 'website', 'url' => 'https://charlietaylorcoder.com/bugsweeper' ],
        [ 'site' => 'github', 'url' => 'bugsweeper' ]
      ]
    ],
    [
      'img' => 'portfolio-tictactoe.jpg', 
      'title' => 'Tictactoe Game',
      'id' => 'pf8',
      'text' => 'Game of noughts and crosses human vs computer. Utilises a minimax algorithm to make the computer unbeatable.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'EwyGOG/' ],
        [ 'site' => 'github', 'url' => 'tic-tac-toe' ]
      ]
    ],
    [
      'img' => 'portfolio-twitchtv.jpg', 
      'title' => 'TwitchBox',
      'id' => 'pf9',
      'text' => 'Application for showing TwitchTV channel data using their API. Shows channel status and links to the video stream.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'oWpVOG/' ],
        [ 'site' => 'github', 'url' => 'twitch-tv' ]
      ]
    ],
    [
      'img' => 'portfolio-weather.jpg', 
      'title' => 'Weather App',
      'id' => 'pf10',
      'text' => 'Provides current weather status for your current location. Uses geolocation and uses two external API\'s for location and weather.',
      'links' => [
        [ 'site' => 'codepen', 'url' => 'BRKaPB/' ],
        [ 'site' => 'github', 'url' => 'weather' ]
      ]
    ],
    [
      'img' => 'portfolio-coinage.jpg', 
      'title' => 'Coinage App',
      'id' => 'pf11',
      'text' => 'Simple cryptocurrency price tracking app. Built using react test driven development. Data is pulled from cryptocompare api via multiple AJAX requests.',
      'links' => [
        [ 'site' => 'website', 'url' => 'https://charlietaylorcoder.com/coinage' ],
        [ 'site' => 'github', 'url' => 'coinage' ]
      ]
    ]
  ];

  $skills = [
    'html5', 'css3', 'sass', 'javascript', 
    'jasmine', 'react', 'mysql', 'php', 
    'wordpress', 'git', 'github', 'npm',
    'nodejs', 'webpack', 'express', 'heroku',
    'illustrator', 'photoshop'
  ];

  $social_icons = [
    ['name' => 'codepen', 'url' => 'https://codepen.io/chazmcgrill/'],
    ['name' => 'free-code-camp', 'url' => 'https://www.freecodecamp.com/chazmcgrill'],
    ['name' => 'github', 'url' => 'https://github.com/chazmcgrill'],
    ['name' => 'linkedin', 'url' => 'https://www.linkedin.com/in/charlie-taylor-941434134/'],
    ['name' => 'instagram', 'url' => 'https://instagram.com/charlietcoder'],
  ];

?>