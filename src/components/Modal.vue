<template>
    <div class="modal-bg" v-if="selectedProject">
  <div class="modal">

    <div class="modal-header">
      <h4 class="modal-header--title">portfolio</h4>
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="modal-header--cross"
        size="lg"
        @click="$emit('select-project', null)"
    />
    </div>

    <div class="modal-content">
        <div class="portfolio-item" :id="selectedProject.id" :key="selectedProject.id">
            <img class="modal-content--img" :src="getImageUrl(selectedProject.img)" :alt="selectedProject.title">
            <h4 class="modal-content--title">{{selectedProject.title}}</h4>
            <p class="modal-content--text">{{selectedProject.text}}</p>
            
            <a
                v-for="link in selectedProject.links"
                :key="link.url"
                class="modal-content--link"
                target="_blank"
                :href="sites[link.site] + link.url"
            >
                {{`view on ${link.site}`}}
            </a>
        </div>
    </div>

    <div class="modal-footer">
        <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="modal-footer--arrow"
            size="lg"
            @click="$emit('select-project', selectedProject.id - 1)"
        />
        <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="modal-footer--arrow"
            size="lg"
            @click="$emit('select-project', selectedProject.id + 1)"
        />
    </div>

  </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['selected-project'],
    methods: {
        getImageUrl(pic) {
            return require('../assets/' + pic);
        }
    },
    data() {
        return {
            sites: {
                codepen: 'https://codepen.io/chazmcgrill/full/',
                github: 'https://github.com/chazmcgrill/',
                website: ''
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'
@import '../sass/_mixins.sass'

.modal-bg
    height: 100%
    width: 100%
    background: rgba($black, 0.8)
    position: fixed
    overflow: auto
    top: 0
    left: 0
    z-index: 3

    .modal
        background: $bg-white
        max-width: 80%
        margin: 5% auto
        border-radius: 3px
        opacity: 1

        @media screen and (min-width: 480px)
            max-width: 300px

        &-header
            display: flex
            justify-content: space-between
            align-items: center
            background: $greybg
            padding: 1px 10px
            text-transform: uppercase

            &--cross
                fill: $arrow
                margin-top: 5px
                @include square-size(1rem)
                cursor: pointer

            &--title
                color: $greyicon

        &-content
            position: relative
            padding: 20px 30px
            text-align: center
            
            &--img
                margin: 20px 20px 10px
                border-radius: 100%
                max-width: 150px

            &--text
                margin: 10px 0 20px

            &--link
                color: $main
                display: block
                margin-bottom: 5px
                font-family: $sans-font

        &-footer
            border-top: 1px solid grey
            padding: 10px 15px
            display: flex
            justify-content: space-between

            &--arrow
                cursor: pointer
                fill: $main

                &:hover
                    fill: darken($main,10%)
</style>