import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// createApp(App).use(router).use(createPinia()).mount('#app')

const mount = (el:Element, baseRouter='')=>{
    const app = createApp(App)
    app.use(router(baseRouter)).use(createPinia()).mount(el)
}

if (process.env.NODE_ENV === 'development'){
    const devRoot = document.getElementById('app');
    if (devRoot){
        mount(devRoot)
    }
}
export {mount}