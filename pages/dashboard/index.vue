<template>
  <div class="container">
    <chart :data="barChartData" :options="barChartOptions" :height="200" />
  </div>
</template>

<script>
import Chart from '~/plugins/vue-chart'

export default {
  name: 'Dashboard',

  middleware: ['authenticated'],

  components: {
    Chart
  },

  data () {
    return {
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#1ab394'],
            data: [10, 15, 20]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Top Receive'
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
  }
}
</script>

<style></style>
