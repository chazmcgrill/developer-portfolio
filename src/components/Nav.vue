<template>
    <ul class="nav">
        <li class="nav--item">Bio</li>
        <li class="nav--item">Services</li>
        <li class="nav--item">Portfolio</li>
        <li class="nav--item">Contact</li>
    </ul>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

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
</style>