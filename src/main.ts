import { createApp } from 'vue'
import { createPinia } from 'pinia';
import {googleApi} from './googleMaps/googleApi.js';

import './style.css'
import App from './App.vue'
import router from './router';

const pinia = createPinia()
const app = createApp(App);

googleApi();

app.use(router);
app.use(pinia);
app.mount('#app');

