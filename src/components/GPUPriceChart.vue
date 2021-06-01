<template>
  <div>
    <canvas id="gpu-price-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import gpuPriceChartData from '../gpu-price-data.js'

export default {
  name: 'GPUPriceChart',
  data() {
    return {
      gpuPriceChartData: gpuPriceChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('gpu-price-chart');
    new Chart(ctx, this.gpuPriceChartData);
  }
}
</script>