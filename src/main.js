import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import StartScreen from './components/StartScreen'
import MainScreen from './components/MainScreen'
import ResultScreen from './components/ResultScreen'


const app = createApp(App)
const store = createStore({
    state() {
        return {
            selectedArray: []
        }
    },
    mutations: {
        pushToArray(state, party) {
            state.selectedArray.push(party)
        },
        deleteFromArray(state, party) {
          state.selectedArray.splice(state.selectedArray.indexOf(party),1)
        }
    }
})

const routes = [
    { path: '/', component: StartScreen },
    { path: '/main', component: MainScreen },
    { path: '/result', component: ResultScreen }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active'
})

app.use(store)
app.use(router)

app.mount('#app')
