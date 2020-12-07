import Vue from 'vue'
import App from './App'

function vueRender() {
    return new Vue({
        render: function (h) { return h(App) },
    }).$mount('#app')
}

let app = null

export default function render() {
    if (!app) {
        app = vueRender()
    }
}
