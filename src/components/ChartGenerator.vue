<template>
  <PolarArea
    ref="canvasChart"
    :chart-options="configCharts.options"
    :chart-data="chartData"
    :plugins="configCharts.plugins"
    :css-classes="configCharts.cssClasses"
  />
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const canvasChart = ref(null);

const propsVue = defineProps({
  dataset: Array,
});

const configCharts = reactive({
  options: {
    responsive: true,
    aspectRatio: 2,
    maintainAspectRatio: false,

    scales: {
      // Settings for radial angles
      r: {
        backgroundColor: "#f9fafb20",
        min: 0,
        max: 10,
        grid: {
          color: "white",
        },
        ticks: {
          color: "#fdf4ff",
          backdropColor: "#c026d3",
          padding: 8,
          backdropPadding: 8,
          z: 50,
          size: 15,
        },
      },
    },
  },

  chartId: "bar-polar-area",
  cssClasses: "mx-auto w-full h-[70vh]",

  plugins: [],
});

const chartData = reactive({
  // We're creating the labels based on questions' titles
  labels: propsVue.dataset.map((row) => row.title),

  datasets: [
    {
      label: "Su evaluación",
      borderJointStyle: "round",
      borderColor: "#FAFAFA",
      // For each column received by our dataset, we'll setup a single color
      backgroundColor: propsVue.dataset.map((row) => row.customColor),
      data: propsVue.dataset.map((row) => row.answer),
    },
  ],
});

onMounted(() => {
  /**
   * Since we can't replace legend settings in construction, we must
   * use some sort of overrides. Here, we opted by using a data object
   * and override these values on mounted hook
   *
   * @see https://www.chartjs.org/docs/latest/configuration/legend.html
   */
  ChartJS.overrides.polarArea.plugins.legend.position = "right";
  ChartJS.overrides.polarArea.plugins.legend.align = "start";
  ChartJS.overrides.polarArea.plugins.legend.labels.color = "#fdf4ff";
  ChartJS.overrides.polarArea.plugins.legend.labels.textAlign = "left";
  ChartJS.overrides.polarArea.plugins.legend.labels.padding = 15;
});
</script>
