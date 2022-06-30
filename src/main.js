import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTriangleExclamation,faCalendarDays,faCheck,faPen,faComment,faCloudArrowUp,faPlus,faMagnifyingGlass,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

/* add icons to the library */
library.add(faTriangleExclamation,faCalendarDays,faCheck,faPen,faComment,faCloudArrowUp,faPlus,faMagnifyingGlass,faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
