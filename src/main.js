import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import naive from 'naive-ui'
import "@/assets/styles/custom.scss"
createApp(App).use(store).use(naive).use(router).mount('#app')
