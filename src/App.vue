<template>
  <div id="app">
      <Header />
      <Bio />
      <Services v-bind:services="services" />
      <Skills v-bind:skills="skills" />
      <Portfolio v-bind:projects="projects" v-on:select-project="setSelectedProject" />
      <Contact />
      <Footer />
      <Modal v-bind:project-count="projects.length" v-bind:selected-project="selectedProject" v-on:select-project="setSelectedProject" v-bind:show-modal="showModal" />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Bio from './components/Bio.vue'
import Services from './components/Services.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import data from './data'

export default {
    name: 'app',
    components: {
        Header,
        Bio,
        Services,
        Skills,
        Portfolio,
        Contact,
        Footer,
        Modal,
    },
    methods: {
        setSelectedProject: function (id) {
            const idTruthy = id === 0 || Boolean(id);
            this.showModal = idTruthy;
            this.selectedProject = this.projects.find(project => project.id === id);
            idTruthy ? document.body.classList.add('is-fixed') : document.body.classList.remove('is-fixed');
        },
    },
    data() {
        return {
            selectedProject: null,
            showModal: false,
            ...data
        }
    },
    created: function() {
        fetch('https://ct-core-api.herokuapp.com/')
    }
}
</script>

<style lang="sass">

@import './sass/_grid.sass'
@import './sass/_normalize.sass'
@import './sass/_variables.sass'
@import './sass/_animation.sass'
@import './sass/_state.sass'

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

</style>
