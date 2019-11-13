<template>
    <section class="section-services" id="services">
        <div class="row row_centered">
            <h2>Services</h2>
        </div>
        <div class="row row_spaced">
            <div v-bind:key="service.title" v-for="service in services" class="col service">
                <!-- <i v-bind:class="'fas ' + service.icon + ' fa-3x service--icon'" aria-hidden="true"></i> -->
                <h3 class="service--title">{{service.title}}</h3>
                <p class="service--text">{{service.text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Services',
        props: ['services']
    }
</script>

<style lang="sass" scoped>

@import '../sass/_variables.sass'

.section-services
    background: $greybg

.service
  max-width: 400px
  text-align: center
  padding: 40px
  margin: 0 0 10px
  background-color: $bg-white
  border-radius: 5px
  box-shadow: 2px 2px 10px 0px #dadada

  &--text
    text-align: left

  &--icon
    font-size: 3em
    cursor: default
    margin-bottom: 5px

  &--title
    color: $main
    margin: 10px 0
    font-weight: bold

</style>