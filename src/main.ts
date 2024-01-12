import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)

import ThrottleDebounce from 'throttle-debounce'
app.use(ThrottleDebounce)
app.mount('#app')
