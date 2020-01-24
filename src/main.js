import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faInstagram, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faTwitter, faInstagram, faLinkedin, faCodepen, faTimes, faArrowRight, faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
