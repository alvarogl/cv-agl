import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.config.globalProperties.head = {
  fontLink: 'https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic'
}

app.mount('#app')