<template>
    <section class="section-bio" id="bio">
        <h2>Bio</h2>
        <div class="row row_centered">
            <div class="bio col col_center">
            <div>
                <img class="bio--img" src="../assets/profile-pic.jpg" alt="Charlie Taylor">
                <p class="bio--text"><strong>Hello,</strong> I'm Charlie A front-end developer and graphic artist from Leeds. I love making well designed responsive websites and interactive applications.</p>
                <SocialIcons icon-type="bio"  />
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import SocialIcons from './SocialIcons'

export default {
    name: 'Header',
    components: {
        SocialIcons,
    }
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