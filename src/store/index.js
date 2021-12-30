import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lat: "",// 纬度
        lng: "",// 经度
    },
    mutations: {
        setGps: (state, info) => {
            console.log(info)
            let {lat, lng} = info
            state.lat = lat
            state.lng = lng
        }
    },
    actions: {},
    modules: {}
})
