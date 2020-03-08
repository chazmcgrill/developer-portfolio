<template>
    <header>
        <div class="nav-bar row row_spaced">
            <img class="nav-bar--logo animated fadeInDown" src="../assets/logo.png" alt="Charlie Taylor Logo">
            <Nav v-bind:nav-open="navOpen" />

            <div class="nav-bar-burger" id="burger" v-on:click="toggleNavOpen">
                <div :class="`nav-bar-burger--burger-top${navOpen ? ' open' : ''}`" />
                <div :class="`nav-bar-burger--burger-middle${navOpen ? ' open' : ''}`" />
                <div :class="`nav-bar-burger--burger-bottom${navOpen ? ' open' : ''}`" />
            </div>
        </div>

        <div class="row row_centered">
            <div class="hero col col_center animated fadeIn">
                <h1 class="hero--title">Charlie Taylor</h1>
                <hr class="animated zoomIn">
                <p class="lead">Web Developer &amp; Graphic Artist</p>
            </div>
        </div>

        <div class="arrow">
            <transition name="flash">
                <i v-if="arrowFlash" class="arrow--icon animated" @click="onArrowPress" />
            </transition>
        </div>
    </header>
</template>

<script>
import Nav from './Nav';
import { navClick } from '../utils';

export default {
    name: 'Header',
    components: {
        Nav,
    },
    methods: {
        toggleNavOpen() {
            this.navOpen = !this.navOpen;
        },
        onArrowPress() {
            navClick('bio')
        }
    },
    data() {
        return {
            navOpen: false,
            arrowFlash: false
        }
    },
    created: function() {
        this.navOpen = window.innerWidth > 640

        window.addEventListener('resize', () => {
            this.navOpen = window.innerWidth > 640
        });

        setInterval(() => {
            this.arrowFlash = !this.arrowFlash
        }, 1000);
    },
}
</script>

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

        &-burger
            width: 30px
            height: 23px
            display: none
            position: absolute
            top: 35px
            right: 0
            cursor: pointer

            @media (max-width: 640px)
                display: inline-block

            &--burger-top,
            &--burger-middle,
            &--burger-bottom,
                position: absolute
                left: 0
                right: 0
                width: 30px
                height: 3px
                background-color: $arrow
                transition: transform 0.15s ease-in-out, opacity 0.1s linear

            &--burger-top
                top: 0px
                bottom: 3px
                      
                &.open
                    top: 10px
                    transform: rotate(45deg)

            &--burger-middle
                top: 10px
                bottom: 13px

                &.open
                    transform: translateX(-30px)
                    opacity: 0
            
            &--burger-bottom
                top: 20px
                bottom: 23px

                &.open
                    top: 10px
                    transform: rotate(-45deg)

.arrow
    width: 100%
    text-align: center
    padding-bottom: 40px
    height: 20px
    margin-bottom: 20px

    &--icon
        border: solid $arrow
        border-width: 0 4px 4px 0
        display: inline-block
        padding: 12px
        transform: rotate(45deg)

</style>
