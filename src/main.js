import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faPhone, faBars, faCartShopping, faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'





/* add icons to the library */
library.add(faEnvelope, faPhone, faBars, faCartShopping, faTrash,faWhatsapp, faFacebook, faPlus, faMinus)

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(pinia)
.use(router)

app.mount('#app')




