<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    legend: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    data: {
      type: Object,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: this.legend,
          position: 'top'
        },
        title: {
          display: !!this.title,
          text: this.title
        },
        scale: {
          angleLines: {
            display: true
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            maxTicksLimit: 7
          }
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          callbacks: {
            title: () => null,
            label: (ctx) => this.labels[ctx.index] + ' : ' + ctx.value + '%'
          }
        }
      }
    }
  },
  watch: {
    data () {
      // Somehow required for smooth update transition
      this.$data._chart.data.datasets[0].data = this.data.datasets[0].data
      // Update graph when data changes | Ref.: https://vue-chartjs.org/guide/#own-watcher
      this.$data._chart.update()
    }
  },
  mounted () {
    // Make labels multiline on mobile
    if (this.$device.isMobile) {
      this.data.labels = this.data.labels.map(label => label.split(' '))
    }
    this.renderChart(this.data, this.options)
  }
}
</script>
