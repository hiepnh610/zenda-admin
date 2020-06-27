<template>
  <chart
    v-if="loaded"
    :data="barChartData"
    :options="barChartOptions"
    :height="200"
  />
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
      loaded: false,
      barChartData: {
        labels: [],
        datasets: []
      },

      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Top Points Receive'
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
      topPoints: GETTER.TOP_POINTS
    })
  },

  watch: {
    topPoints (users) {
      if (users) {
        this.loaded = true
        this.barChartData = {
          labels: users.rows.map(user => user.display_name),
          datasets: [{
            label: 'Points',
            backgroundColor: '#1ab394',
            data: users.rows.map(user => user.receive_bag)
          }]
        }
      }
    }
  },

  mounted () {
    this.$store.dispatch(ACTION.TOP_POINTS)
  }
}
</script>

<style></style>
