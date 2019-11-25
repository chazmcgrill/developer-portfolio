<template>
    <section class="section-contact" id="contact">
        <div class="row row_centered">
            <h2>Contact</h2>
        </div>
        <div class="row row_centered">
            <div class="form col col_center" id="form">
                <p class="form--title"><strong>I'm currently available for your projects,</strong> please use this form to get in touch...</p>
                <form action="onSubmit">
                    <input class="form--input" type="text" name="name" placeholder="name" id="name" required>
                    <input class="form--input" type="email" name="email" placeholder="email" id="email" required>
                    <input class="form--anti-spam" type="text" name="url" />
                    <textarea class="form--input" name="message" placeholder="your message" data-new-placeholder="your message" rows="5"></textarea>

                    <!-- <?php
                    if (isset($_GET['success'])) {
                        $cls = 'is-success';
                        $msg = 'Thank you! Your message has been sent.';
                        if ($_GET['success'] == -1) {
                        $cls = 'is-error';
                        $msg = 'Oops message sending failed.';
                        }
                        echo "<div class=\"form--messages $cls\">$msg</div>";
                    }
                    ?> -->

                    <input class="btn btn_submit" type="submit" value="send message">
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    methods: {
        onSubmit: function () {
            
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/_variables.sass'

.section-contact
    background: $greybg

.form
    margin: 0 auto

    &--title
        margin: 0 10px

    &--input
        display: block
        vertical-align: top
        padding: 13px 15px 
        width: 100%
        margin: 20px auto
        border: none
        border-radius: 5px
        background: $bg-white
        line-height: 1rem
        text-align: left
        font-size: 100%
        resize: none
        outline: none
        font-family: $sans-font

        &:focus
            box-shadow: 0 2px 4px 0 hsla(0,0%,0%,0.09)

    &--messages
        font-size: 0.8rem
        text-align: center
        font-family: $sans-font

    &--anti-spam
        display: none

.btn
    font-family: $sans-font
    padding: 15px 20px
    border: 3px solid $main
    background: $main
    color: $bg-white
    cursor: pointer
    transition: all 0.3s ease-in-out

    &_submit
        display: block
        margin: 20px auto
        border-radius: 5px

    &:hover
        color: $main
        background: $greybg
</style>