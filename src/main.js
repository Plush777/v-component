import { createApp } from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue3-highlightjs'
import VueClipboard from 'vue3-clipboard'

const app = createApp(App)
app.use(VueHighlightJS)
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})
app.mount('#app');

