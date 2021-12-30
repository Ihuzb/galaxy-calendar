<template>
  <div class="calendar">
    <div class="latLng" v-show="lat">纬度：{{ lat }} 经度：{{ lng }}</div>
    <el-calendar>
      <template slot="dateCell"
                slot-scope="{date, data}">
        <div class="timeStyle">
          <div>{{ data.day }}</div>
          <div>{{ setTimeList(data.day) }}</div>
          {{(<i class="el-icon-star-on"></i>)*3}}
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import {Calendar} from "element-ui"
import galaxy from "galaxy-time"
import {mapState} from "vuex"

export default {
  name: "calendar",
  data() {
    return {
      timeList: {}
    }
  },
  computed: {
    ...mapState(["lat", "lng"]),
  },
  mounted() {
    console.log(this.timeList, 444)
  },
  components: {
    "el-calendar": Calendar
  },

  watch: {
    timeList: {
      handler: function (newInfo, oldInfo) {
        // this.timeList[newInfo]=galaxyTime(newInfo)
        console.log(newInfo, oldInfo)
      },
      deep: true
    }
  },
  methods: {
    setTimeList: function (day) {
      this.timeList[day] = this.galaxyTime(day)
      return this.timeList[day]
    },
    galaxyTime: function (day) {
      if (this.lat && this.lng) {
        let time = galaxy.getTrueGalaxyTimes(this.lat, this.lng, day)
        return time.hours || ""
      }
    }
  }
}
</script>

<style scoped lang="scss">
.latLng {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.timeStyle {
  text-align: center;
}

.calendar /deep/ {
  .el-calendar__title, .el-button, .el-calendar, .el-calendar-day, .el-calendar-table th {
    background: #1d1f38;
    color: white !important;
  }

  .current, .next {
    pointer-events: none;
    border-color: #39375e;
  }

}
</style>