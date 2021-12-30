<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import {mapMutations} from "vuex"

export default {
  name: "MapSelect",
  created() {
    let that = this;
    AMapLoader.load({
      "key": "630f85d138afbb973b5cac38bdde4083",              // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      "AMapUI": {             // 是否加载 AMapUI，缺省不加载
        "version": '1.1',   // AMapUI 缺省 1.1
        "plugins": [],       // 需要加载的 AMapUI ui插件
      },
      "Loca": {                // 是否加载 Loca， 缺省不加载
        "version": '1.3.2'  // Loca 版本，缺省 1.3.2
      },
    }).then((AMap) => {
      let maps = new AMap.Map('container');
      maps.setDefaultCursor("crosshair");
      maps.on('click', (e) => {
        that.setGps({lat: e.lnglat.getLat(), lng: e.lnglat.getLng()});
        console.log(e.lnglat.getLng() + ',' + e.lnglat.getLat())
      });
    }).catch(e => {
      console.log(e);
    })
  },
  methods: {
    ...mapMutations(["setGps"]),
  }
}
</script>

<style scoped>
#container {
  height: 600px;
  width: 100%;
}
</style>