import Vue from 'vue'
import App from './App.vue'

import 'semantic-ui-css/semantic.css'
import routes from './routes.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App),
}).$mount('#app')
