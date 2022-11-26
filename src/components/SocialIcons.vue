<template>
    <div :class="'icons icons_' + iconType">
        <a v-bind:key="icon.name" v-for="icon in socialIcons" v-bind:href="icon.url" aria-hidden="true" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', icon.name]" :class="'icon_' + iconType" size="lg" />
        </a>                
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['iconType'],
    data() {
        return {
            socialIcons: [
                { name: 'codepen', url: 'https://codepen.io/chazmcgrill/' },
                { name: 'twitter', url: 'https://twitter.com/charlietcoder' },
                { name: 'github', url: 'https://github.com/chazmcgrill' },
                { name: 'linkedin', url: 'https://www.linkedin.com/in/charlie-taylor-941434134/' },
                { name: 'instagram', url: 'https://instagram.com/charlietcoder' },
            ],
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'
@import '../sass/_mixins.sass'

.icon
    transition: fill 0.3s linear
    cursor: pointer

    &_footer > path
        fill: $foottext
        // @include square-size(1rem)
        
        // @media (max-width: 640px)
        //     @include square-size(1.4rem)

        &:hover
            fill: $main

    &_bio > path
        fill: $greyicon

        &:hover
            fill: black

.icons
    &_footer
        width: 150px
        display: flex
        justify-content: space-between

        @media (max-width: 640px)
            width: 200px
            padding: 10px 0

    &_bio
        width: 180px
        margin: 45px auto 70px auto
        display: flex
        justify-content: space-between
</style>