import Vue from 'vue'
import App from './App'

let app = null

export default function render({ loading }) {
    if (!app) {
        app = new Vue({
            el: '#app',
            data() {
                return {
                    loading,
                }
            },
            render(h) {
                return h(App, {
                    props: {
                        loading: this.loading
                    }
                })
            }
        });
    } else {
        app.loading = loading
    }
}
