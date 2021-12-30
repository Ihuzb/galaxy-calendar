import Vue from 'vue'
import App from './App.vue'
import SunCalc from "galaxy-time"
import store from './store'
import './plugins/element.js'
import './style/element-variables.scss'

Vue.config.productionTip = false
Vue.prototype.$SunCalc = SunCalc

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
