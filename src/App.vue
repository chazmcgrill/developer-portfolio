<template>
  <div id="app">
      <Header />
      <Bio v-bind:social-icons="socialIcons"/>
      <Services v-bind:services="services"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Bio from './components/Bio.vue'
import Services from './components/Services.vue'

export default {
    name: 'app',
    components: {
        Header,
        Bio,
        Services
    },
    data() {
        return {
            socialIcons: [
                {name: 'codepen', url: 'https://codepen.io/chazmcgrill/'},
                {name: 'twitter', url: 'https://twitter.com/charlietcoder'},
                {name: 'github', url: 'https://github.com/chazmcgrill'},
                {name: 'linkedin', url: 'https://www.linkedin.com/in/charlie-taylor-941434134/'},
                {name: 'instagram', url: 'https://instagram.com/charlietcoder'},
            ],
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
            ]
        }
    }
}
</script>

<style lang="sass">

@import './sass/_grid.sass'
@import './sass/_normalize.sass'
@import './sass/_mixins.sass'

// fonts
@import './sass/_variables.sass'
@import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,500|Oswald')

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale


// Core Styles

*
  box-sizing: border-box
  padding: 0
  margin: 0

body
  background: $bg-white
  font-size: 16px
  font-family: $serif-font
  color: $text-color
  -webkit-font-smoothing: antialiased
  -webkit-text-size-adjust: 100%

li, i
  cursor: pointer

  &:hover
    color: $main

hr
  width: 16em
  max-width: 80%
  margin: 10px auto 15px auto
  border-top: 2px solid $bg-white

// Typography

h1, h2, h3, h4, h5, h6
  font-family: $sans-font
  font-weight: 400

h1, h2
  text-transform: uppercase
  margin: 18px 0

h1
  font-size: 48px
  line-height: 1.05
  letter-spacing: 0.1px

h2
  font-size: 36px
  line-height: 1.14
  letter-spacing: 0.1px
  margin-bottom: 40px

  &:after
    display: block
    height: 3px
    background-color: $main
    content: " "
    width: 100px
    margin: 0 auto
    margin-top: 10px

h3
  font-size: 28px
  line-height: 1.38
  letter-spacing: 0.4px

h4
  font-size: 18px
  line-height: 1.38
  letter-spacing: 0.4px
  margin: 10px 0

.lead
  font-family: $sans-font
  font-size: 20px

p
  margin: 10px 0 20px
  line-height: 1.4

em
  font-style: italic

strong
  font-weight: 500

// Links

a
  text-decoration: none
  color: $bg-white
  outline: 0

a:hover
  color: $main

button
  appearance: none

// Selection Colors

::selection
  background: $selection-color
  color: $bg-white

::-moz-selection
  background: $selection-color
  color: $bg-white

img::selection
  background: transparent

img::-moz-selection
  background: transparent

body
  -webkit-tap-highlight-color: $selection-color

// Lists

ul
  padding-left: 0

li
  list-style: none

.icon
  transition: fill 0.3s linear
  cursor: pointer

  &_footer
    fill: $foottext
    @include square-size(1rem)
    
    @media (max-width: 640px)
      @include square-size(1.4rem)

    &:hover
      fill: $main

  &_bio > path
    fill: $greyicon

    &:hover
      fill: black

.icons

  &_footer
    width: 150px
    display: flex
    justify-content: space-between

    @media (max-width: 640px)
      width: 200px
      padding: 10px 0

  &_bio
    width: 180px
    margin: 45px auto 70px auto
    display: flex
    justify-content: space-between

</style>
