<template>
    <section class="section-skills" id="skills">
        <h3>Technologies used:</h3>
        <div class="row">
            <div class="col col_full skills">
                <div
                    v-bind:key="skill"
                    v-for="skill in skills"
                    v-bind:class="'skill skill--' + skill"
                    v-bind:tool-title="skill">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    props: ['skills']
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

.section-skills
  background: $main

  h3
    color: $greybg
    text-align: center
    margin-bottom: 20px

  .skills
    padding: 20px 40px
    display: grid
    grid-gap: 20px
    grid-template-columns: repeat(3, 1fr)

    @media screen and (min-width: 740px)
      grid-template-columns: repeat(6, 1fr)
    @media screen and (min-width: 960px)
      grid-template-columns: repeat(9, 1fr)

.skill
  display: inline-block
  background-repeat: no-repeat
  background-image: url(../assets/sprite.svg)
  zoom: 150%
  justify-self: center
  width: 32px
  height: 32px
  position: relative
  cursor: pointer

  &:before, &:after
    display: block
    position: absolute
    opacity: 0
    pointer-events: none
    transform: translateY(-10px)
    transition: all .30s cubic-bezier(0.42, 0, 0.52, 1.41)

  &:after
    border-right: 6px solid transparent
    border-bottom: 6px solid rgba(0,0,0,.75)
    border-left: 6px solid transparent
    content: ''
    top: 26px
    left: 10px
  
  &:before
    background: rgba(black,.75)
    border-radius: 4px
    color: $bg-white
    content: attr(tool-title)
    font-family: $sans-font
    font-size: 0.4em
    color: white
    padding: 10px 15px
    top: 30px
    z-index: 1
    
  &:hover:after,
  &:hover:before
    opacity: 1
    transform: translateY(0)
      
  &--css3
    background-position: -32px 0

  &--express
    background-position: -64px 0

  &--git
    background-position: -96px 0

  &--github
    background-position: -128px 0

  &--heroku
    background-position: 0 -32px

  &--html5
    background-position: -32px -32px

  &--illustrator
    background-position: -64px -32px

  &--jasmine
    background-position: -96px -32px

  &--javascript
    background-position: -128px -32px

  &--mysql
    background-position: 0 -64px

  &--nodejs
    background-position: -32px -64px

  &--npm
    background-position: -64px -64px

  &--photoshop
    background-position: -96px -64px

  &--php
    background-position: -128px -64px

  &--react
    background-position: 0 -96px

  &--sass
    background-position: -32px -96px

  &--webpack
    background-position: -64px -96px

  &--wordpress
    background-position: -96px -96px

</style>