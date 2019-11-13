<template>
    <section class="section-bio" id="bio">
        <h2>Bio</h2>
        <div class="row row_centered">
            <div class="bio col col_center">
            <div>
                <img class="bio--img" src="../assets/profile-pic.jpg" alt="Charlie Taylor">
                <p class="bio--text"><strong>Hello,</strong> I'm Charlie A front-end developer and graphic artist from Leeds. I love making well designed responsive websites and interactive applications.</p>
                <div class="icons_bio">
                    <a v-bind:key="icon.name" v-for="icon in socialIcons" v-bind:href="icon.url" aria-hidden="true" target="_blank">
                        <font-awesome-icon :icon="['fab', icon.name]" class="icon_bio" size="lg" />
                    </a>                
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Header',
  props: ['socialIcons']
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

.section-bio
  text-align: center

  .bio
    text-align: center

    &--img
      display: block
      width: 150px
      border-radius: 50%
      margin: 0 auto 30px
      transition: opacity 0.2s

      &:hover
        opacity: 0.8

    &--text
      font-size: 1.3rem
      color: $main
      text-align: center
      line-height: 1.6
</style>