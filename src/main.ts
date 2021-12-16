import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { StartSave, LoadSave } from './save'

import { useResourcesStore } from './stores/ResourcesStore'
import { resources, categories } from './resources/resources'

import App from './components/App.vue'

import './index.css'

const piniaInstance = createPinia()

const resourceStore = useResourcesStore(piniaInstance)
resourceStore.loadResources(categories, resources)
LoadSave()
StartSave()

const app = createApp(App)
app.use(piniaInstance)
app.mount('#app')