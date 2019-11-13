<template>
    <section class="section-portfolio" id="portfolio">
        <div class="row row_centered">
            <h2>Portfolio</h2>
        </div>
        <div class="row row_centered">
            <div class="projects">

                <div v-for="project in projects" :key="project.title" class="project" :id="project.id" :style="{backgroundImage: 'url(' + require('../assets/'+ project.img) + ')' }">
                    <div class="project--overlay"></div>
                    <h3 class="project--title">{{project.title}}</h3>
                </div>
            
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',
    props: ['projects']
}
</script>

<style lang="sass" scoped>

.section-portfolio
  // overflow: auto

.projects
  width: 100%
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-auto-rows: 1fr

  @media (max-width: 760px)
    grid-template-columns: repeat(2, 1fr)
  @media (max-width: 480px)
    grid-template-columns: repeat(1, 1fr)

  &::before
    content: ""
    width: 0
    padding-bottom: 100%
    grid-row: 1 / 1
    grid-column: 1 / 1

.project
  position: relative
  background:
    size: cover
    position: center
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  padding: 30px
  
  &:first-child
    grid-row: 1 / 1
    grid-column: 1 / 1

  &--overlay
    position: absolute
    top: 0
    left: 0
    background: black
    height: 100%
    width: 100%
    opacity: 0
    transition: opacity 0.3s ease-in-out
    pointer-events: none

  &--title
    opacity: 0
    color: white
    font-size: 1rem
    z-index: 1
    transform: scale(0.1)
    transition: all 0.3s ease-in-out
    pointer-events: none

  &:hover .project--title
    opacity: 1
    transform: scale(1)

  &:hover .project--overlay
    opacity: 0.8

</style>