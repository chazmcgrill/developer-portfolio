<template>
    <section class="section-contact" id="contact">
        <div class="row row_centered">
            <h2>Contact</h2>
        </div>
        <div class="row row_centered">
            <div class="form col col_center" id="form">
                <p class="form--title"><strong>I'm currently available for your projects,</strong> please use this form to get in touch...</p>
                <form v-on:submit="onSubmit" action="#">
                    <input class="form--input" type="text" name="name" placeholder="name" v-model="name" required>
                    <input class="form--input" type="email" name="email" placeholder="email" v-model="email.value" required>
                    <input class="form--anti-spam" type="text" name="url" />
                    <textarea class="form--input" name="message" placeholder="your message" rows="5" v-model="message.text"></textarea>

                    <div :class="`form--messages ${messageClass}`" v-if="submissionMessage">{{submissionMessage}}</div>

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
        onSubmit: async function (event) {
            event.preventDefault();
            const { name, email, message } = this;
            const data = { name, email: email.value, message: message.text };
            
            const messageResponse = await fetch('https://ct-core-api.herokuapp.com/dp-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const { ok } = messageResponse;

            this.submissionMessage = ok
                ? 'Thank you! Your message has been sent.'
                : 'Oops message sending failed.';

            this.messageClass = ok ? 'is-success' : 'is-error';

            this.submitted = true;
        }
    },
    data() {
        return {
            name: '',
            email: {
                value: '',
                valid: true
            },
            message: {
                text: '',
                maxlength: 255
            },
            submissionMessage: '',
            messageClass: '',
            submitted: false
        };
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
    outline: none

    &_submit
        display: block
        margin: 20px auto
        border-radius: 5px

    &:hover
        color: $main
        background: $greybg
</style>