<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <chart
        v-if="isTopReceiveLoaded"
        :data="topReceivePointsData"
        :options="barChartOptions"
        :height="200"
      />
    </div>

    <div class="col-12 col-md-6">
      <chart
        v-if="isTopGiveLoaded"
        :data="topGivePointsData"
        :options="barChartOptions"
        :height="200"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'
import Chart from '~/plugins/vue-chart'

export default {
  name: 'Dashboard',

  middleware: ['authenticated'],

  components: {
    Chart
  },

  data () {
    return {
      isTopReceiveLoaded: false,
      isTopGiveLoaded: false,
      topReceivePointsData: {
        labels: [],
        datasets: []
      },
      topGivePointsData: {
        labels: [],
        datasets: []
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      topReceivePoints: GETTER.TOP_RECEIVE_POINTS,
      topGivePoints: GETTER.TOP_GIVE_POINTS
    })
  },

  watch: {
    topReceivePoints (users) {
      if (users) {
        this.isTopReceiveLoaded = true
        this.topReceivePointsData = {
          labels: users.rows.map(user => user.display_name),
          datasets: [{
            label: 'Points',
            backgroundColor: '#1ab394',
            barThickness: 10,
            data: users.rows.map(user => user.receive_bag)
          }]
        }
        this.barChartOptions.title.text = 'Top Receive Points'
      }
    },

    topGivePoints (users) {
      if (users) {
        this.isTopGiveLoaded = true
        this.topGivePointsData = {
          labels: users.map(user => user.display_name),
          datasets: [{
            label: 'Points',
            backgroundColor: '#1ab394',
            barThickness: 10,
            data: users.map(user => user.amount)
          }]
        }
        this.barChartOptions.title.text = 'Top Give Points'
      }
    }
  },

  mounted () {
    this.$store.dispatch(ACTION.TOP_RECEIVE_POINTS)
    this.$store.dispatch(ACTION.TOP_GIVE_POINTS)
  }
}
</script>

<style></style>
