<template>
    <footer class="footer">
        <div class="row row_spaced-aligned">
            <ul class="nav">
                <li class="nav--item">Bio</li>
                <li class="nav--item">Services</li>
                <li class="nav--item">Portfolio</li>
                <li class="nav--item">Contact</li>
            </ul>

            <SocialIcons icon-type="footer" /> 
        </div>

        <div class="row row_centered">
            <p class="footer--copyright">&copy; 2018 Charlie Taylor All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>

import SocialIcons from './SocialIcons'

export default {
    name: 'Footer',
    components: {
        SocialIcons,
    }
}

</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'
@import '../sass/_grid.sass'

.nav
    text-transform: uppercase
    font-family: $sans-font

    &--item
        margin: 0 5px 0 0
        display: inline-block
        letter-spacing: 0.5px
        transition: color 0.3s linear
        
        &:last-child
            margin-right: 0
        
        &:hover
            color: $bluehover

        @media (min-width: 640px)
            margin: 0 3px 3px

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