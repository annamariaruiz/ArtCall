import { createApp } from 'vue'
import router from './routes';

const app = createApp({});
app.use(router);
app.mount('#app')