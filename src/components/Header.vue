<template>
<header>
  <div class="nav-bar row row_spaced">
    <img class="nav-bar--logo animated fadeInDown" src="../assets/logo.png" alt="Charlie Taylor Logo">
    <Nav />

    <span class="nav-bar-burger" id="burger">
      <span class="nav-bar-burger--inner"></span>
    </span>

  </div>

  <div class="row row_centered">
    <div class="hero col col_center animated fadeIn">
      <h1 class="hero--title">Charlie Taylor</h1>
      <hr class="animated zoomIn">
      <p class="lead">Web Developer &amp; Graphic Artist</p>
    </div>
  </div>

  <div class="arrow">
    <i class="arrow--icon animated"></i>
  </div>
</header>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'Header',
    components: {
        Nav,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

header
  background:
    image: linear-gradient(rgba(0, 0, 15, 0.8), rgba(0, 0, 15, 0.8)), url(../assets/hero-image.jpg)
    size: cover
    position: center
    attachment: fixed
  color: $bg-white
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100vh
  padding: 0 20px

  .hero
    text-align: center
    width: 400px

    &--title

      @media (max-width: 347px)
        font-size: 40px

    @media (max-width: 480px)
      width: calc(100% - 10px)

.nav-bar
  align-items: center
  padding: 20px 0
  position: relative
  overflow: hidden

  &--logo
    height: 50px
    width: 50px

    @media (max-width: 640px)
      margin-bottom: 20px

  &--nav
    opacity: 1

    @media (max-width: 640px)
      opacity: 0

  &-burger
    width: 30px
    height: 22px
    display: none
    position: absolute
    top: 35px
    right: 0
    cursor: pointer

    @media (max-width: 640px)
      display: inline-block

    &--inner
      display: block
      top: 50%
      margin-top: -1.5px
      
      &,
      &::before,
      &::after
        width: 30px
        height: 3px
        background-color: $arrow
        position: absolute
        transition: transform 0.15s ease-in-out, opacity 0.1s linear

      &::before,
      &::after
        content: ""
        display: block

      &::before
        top: -10px

      &::after
        bottom: -10px

</style>
