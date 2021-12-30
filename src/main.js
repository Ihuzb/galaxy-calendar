import Vue from 'vue'
import App from './App.vue'
import SunCalc from "galaxy-time"
import store from './store'
import './style/element-variables.scss'
import ElementUI from 'element-ui';


Vue.config.productionTip = false
Vue.prototype.$SunCalc = SunCalc
Vue.use(ElementUI);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
