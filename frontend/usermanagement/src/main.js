import App from '@/App.vue'
import {createApp} from 'vue'
import axios from 'axios'
import process from 'process'; // Import the 'process' package

axios.defaults.baseURL=process.env.NODE_ENV==='production'?'/api':'http://localhost:8080/api';

import {registerPlugins} from '@/plugins'
const app = createApp(App)
registerPlugins(app)
app.mount('#app')