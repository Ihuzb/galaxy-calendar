<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <div class="selectButton">
      <el-popover width="800"
                  trigger="click">
        <MapSelect/>
        <el-button slot="reference">获取定位</el-button>
      </el-popover>
    </div>
    <Calendars/>
  </div>
</template>

<script>
import Calendars from './components/calendar'
import MapSelect from './components/MapSelect'
import {Popover, Button} from "element-ui"

export default {
  name: 'App',
  components: {
    Calendars, MapSelect, "el-popover": Popover, "el-button": Button
  }
}
</script>

<style scoped lang="scss">
#app {
  padding: 10px;
}

.selectButton {
  margin: 20px;
}
</style>
