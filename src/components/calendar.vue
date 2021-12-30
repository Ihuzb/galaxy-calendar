<template>
  <div class="calendar">
    <el-calendar>
      <template slot="dateCell"
                slot-scope="{date, data}">
        <div class="timeStyle">
          <div>{{ data.day }}</div>
          <el-tooltip effect="dark" :content="setTimeList(data.day)" placement="top">
            <div class="hours" v-show="getHours(data.day)">{{ getHours(data.day) }}小时</div>
          </el-tooltip>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import galaxy from "galaxy-time"
import {mapState} from "vuex";

export default {
  name: "calendar",
  data() {
    return {
      timeList: {}
    }
  },
  mounted() {
    // console.log(this.timeList, 444)
  },
  computed: {
    ...mapState(["lat", "lng"]),
  },
  watch: {
    timeList: {
      // handler: function (newInfo, oldInfo) {
      //   // this.timeList[newInfo]=galaxyTime(newInfo)
      //   // console.log(newInfo, oldInfo)
      // },
      deep: true
    }
  },
  methods: {
    getHours: function (day) {
      let info = this.timeList[day]
      return info ? info.hours : ""
    },
    setTimeList: function (day) {
      let info = this.galaxyTime(day);
      this.timeList[day] = info;
      if (info) {
        let {start = "", end = ""} = info;
        return `${start.date} ~ ${end.date}`
      }
      return ""
    },
    galaxyTime: function (day) {
      if (this.lat && this.lng) {
        let time = galaxy.getTrueGalaxyTimes(this.lat, this.lng, day)
        return time.code == "1" ? time : ""
      }
    }
  }
}
</script>

<style scoped lang="scss">


.timeStyle {
  text-align: center;
}

.calendar /deep/ {
  .el-calendar__title, .el-button, .el-calendar, .el-calendar-day, .el-calendar-table th {
    //background: #1d1f38;
    //color: white !important;
  }

  .current, .next {
    //pointer-events: none;
    //border-color: #39375e;
  }

  .qujianTime {
    font-size: 12px;
  }

  .hours {
    margin-top: 20px;
  }

}
</style>