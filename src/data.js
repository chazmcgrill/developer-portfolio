export default {
    services: [
        {
            title: 'Design',
            icon: 'fa-pencil-alt',
            text: 'Every project is carefully planned using sketches, mind maps and wireframes. I come from a graphic arts background so I really enjoy a design challenge.'
        },
        {
            title: 'Code',
            icon: 'fa-desktop',
            text: 'I\'m confident in a range of technologies and love learning new ones. I like to keep my code semantic and well documented so it\'s easy to maintain and understand.'
        },
        {
            title: 'Build',
            icon: 'fa-server',
            text: 'Your project is always built with optimisation, accessibility and security in mind. If required I can also provide hosting and domain services.'
        }
    ],
    skills: [
        'html5',
        'css3',
        'sass',
        'javascript',
        'jasmine',
        'react',
        'mysql',
        'php',
        'wordpress',
        'git',
        'github',
        'npm',
        'nodejs',
        'webpack',
        'express',
        'heroku',
        'illustrator',
        'photoshop'
    ],
    projects: [
        {
            img: 'portfolio-analogclock.jpg',
            title: 'Analog Style Clock',
            id: 0,
            text: 'Analog style clock created using vanilla javascript. Makes use of loops within pug and sass to create the clock.',
            links: [
                { 'site': 'codepen', 'url': 'mMjVmy/' },
                { 'site': 'github', 'url': 'analog-clock' }
            ]
        },
        {
            img: 'portfolio-calc.jpg',
            title: 'Javascript Calculator',
            id: 1,
            text: 'Simple arithmetic calculator created using javascript. Includes percentage, decimals and negate functionality.',
            links: [
                { 'site': 'codepen', 'url': 'QgKvLZ/' },
                { 'site': 'github', 'url': 'calculator' }
            ]
        },
        {
            img: 'portfolio-hurricanecharlie.jpg',
            title: 'Hurricane Charlie Website',
            id: 2,
            text: 'Personal illustration portfolio contains gallery, contact and shop. key technologies React, React-router, Node, Express and CSS grid.',
            links: [
                { 'site': 'website', 'url': 'https://www.hurricanecharlie.co.uk' },
                { 'site': 'github', 'url': 'hurricane-charlie-website' }
            ]
        },
        {
            img: 'portfolio-pizzabox.jpg',
            title: 'React Pizza Box',
            id: 3,
            text: 'React app for storing pizza recipes, functionality for adding new recipes and editing or deleting existing recipes. Info is stored locally so when browser is reloaded the data persists.',
            links: [
                { 'site': 'codepen', 'url': 'pdOjGm/' },
                { 'site': 'github', 'url': 'recipe-box' }
            ]
        },
        {
            img: 'portfolio-pomodoro.jpg',
            title: 'Pomodoro Timer',
            id: 4,
            text: 'Pomodoro timer for an app for improving time management and workflow. Animated and coded using css and javascript.',
            links: [
                { 'site': 'codepen', 'url': 'rwGbVR/' },
                { 'site': 'github', 'url': 'pomodoro-clock' }
            ]
        },
        {
            img: 'portfolio-quote.jpg',
            title: 'Quote Machine',
            id: 5,
            text: 'App that generates random quotes collected from an external API. New quotes can be generated and can be shared on twitter.',
            links: [
                { 'site': 'codepen', 'url': 'jBmygM/' },
                { 'site': 'github', 'url': 'quote-machine' }
            ]
        },
        {
            img: 'portfolio-life.jpg',
            title: 'Cell Automaton',
            id: 6,
            text: 'React project based on the cellular automaton \'Game of Life\' devised by mathematician John Conway.',
            links: [
                { 'site': 'website', 'url': 'https://cell-automaton.charlietaylorcoder.com' },
                { 'site': 'github', 'url': 'game-of-life' }
            ]
        },
        {
            img: 'portfolio-bugsweeper.jpg',
            title: 'Bugsweeper',
            id: 7,
            text: 'Recreation of the classic windows desktop game minesweeper. Built using React javascript, it utilises an \'flood fill\' algorithm.',
            links: [
                { 'site': 'website', 'url': 'https://bugsweeper.charlietaylorcoder.com' },
                { 'site': 'github', 'url': 'bugsweeper' }
            ]
        },
        {
            img: 'portfolio-tictactoe.jpg',
            title: 'Tictactoe Game',
            id: 8,
            text: 'Game of noughts and crosses human vs computer. Utilises a minimax algorithm to make the computer unbeatable.',
            links: [
                { 'site': 'codepen', 'url': 'EwyGOG/' },
                { 'site': 'github', 'url': 'tic-tac-toe' }
            ]
        },
        {
            img: 'portfolio-twitchtv.jpg',
            title: 'TwitchBox',
            id: 9,
            text: 'Application for showing TwitchTV channel data using their API. Shows channel status and links to the video stream.',
            links: [
                { 'site': 'codepen', 'url': 'oWpVOG/' },
                { 'site': 'github', 'url': 'twitch-tv' }
            ]
        },
        {
            img: 'portfolio-weather.jpg',
            title: 'Weather App',
            id: 10,
            text: 'Provides current weather status for your current location. Uses geolocation and uses two external API\'s for location and weather.',
            links: [
                { 'site': 'codepen', 'url': 'BRKaPB/' },
                { 'site': 'github', 'url': 'weather' }
            ]
        },
        {
            img: 'portfolio-coinage.jpg',
            title: 'Coinage App',
            id: 11,
            text: 'Simple cryptocurrency price tracking app. Built using react test driven development. Data is pulled from cryptocompare api via multiple AJAX requests.',
            links: [
                { 'site': 'website', 'url': 'https://coinage.charlietaylorcoder.com' },
                { 'site': 'github', 'url': 'coinage' }
            ]
        }
    ]
}
