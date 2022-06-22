import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

//vue js
import { createApp } from 'vue';
import router from './router';

const app = createApp({

}).use(router).mount('#app');