<template>
    <div class="nav--container">
        <transition name="nav-slide">
            <ul class="nav" v-if="navOpen">
                <li class="nav--item" @click="onNavClick('bio')">Bio</li>
                <li class="nav--item" @click="onNavClick('services')">Services</li>
                <li class="nav--item" @click="onNavClick('portfolio')">Portfolio</li>
                <li class="nav--item" @click="onNavClick('contact')">Contact</li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { navClick } from '../utils';

export default {
    name: 'Nav',
    props: ['nav-open'],
    methods: {
        onNavClick(id) {
            navClick(id);
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

.nav
    text-transform: uppercase
    font-family: $sans-font

    &--container
        height: 20px

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