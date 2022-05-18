import { createApp } from 'vue'
import App from './App.vue'

import primevue from "primevue/config"


import "primevue/resources/primevue.min.css";//core css
import "primevue/resources/themes/saga-blue/theme.css";  //theme
import "primeflex/primeflex.css"
import "primeicons/primeicons.css";//icons


const app = createApp(App);

app.config.warnHandler = (a) => {
    if (a.includes("Failed to resolve component:")) {
        return
    }
    console.warn(a);
}

app.use(primevue, { ripple: true });
app.mount('#app');