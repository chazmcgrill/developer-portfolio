<template>
    <footer class="footer">
        <div class="row row_spaced-aligned">
            <Nav v-bind:nav-open="true" />
            <SocialIcons icon-type="footer" /> 
        </div>

        <div class="row row_centered">
            <p class="footer--copyright">&copy; 2018 Charlie Taylor All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>

import SocialIcons from './SocialIcons'
import Nav from './Nav'

export default {
    name: 'Footer',
    components: {
        SocialIcons,
        Nav,
    }
}

</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'
@import '../sass/_grid.sass'

.footer
    padding: 20px
    background: $footbg
    font-size: 0.8rem
    height: 140px
    color: $foottext

    @media (max-width: 640px)
        height: auto

    &--copyright
        font-family: $sans-font


</style>