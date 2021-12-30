<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <el-row :gutter="20" type="flex" align="middle" justify="center">
      <el-col :span="4">
        <div class="selectButton">
          <el-popover width="800"
                      trigger="click">
            <MapSelect/>
            <el-button slot="reference">获取定位</el-button>
          </el-popover>
        </div>
      </el-col>
      <el-col :span="20">
        <span class="latLng" v-show="lat">纬度：{{ lat }} 经度：{{ lng }}</span>
      </el-col>
    </el-row>
    <Calendars/>
  </div>
</template>

<script>
import Calendars from './components/calendar'
import MapSelect from './components/MapSelect'
import {mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState(["lat", "lng"]),
  },
  components: {
    Calendars, MapSelect
  }
}
</script>

<style scoped lang="scss">
.latLng {
  text-align: center;
}

#app {
  padding: 10px;
}

.selectButton {
  margin: 10px;
}
</style>
