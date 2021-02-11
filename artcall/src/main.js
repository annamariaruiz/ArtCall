import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

// Vue.config.productionTip = false;

createApp(App).use(router).mount('#app')