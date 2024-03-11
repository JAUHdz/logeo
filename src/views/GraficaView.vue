<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <TopBar></TopBar>
        <span class="navbar-brand">Water Monitor</span>
      </nav>
      <div class="row mt-4">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="chart">
                <canvas id="waterChart"></canvas>
              </div>
              <div class="details mt-4">
                <h5>Datos de consumo de agua</h5>
                <p>Consumo actual: {{ currentConsumption }} litros</p>
                <p>Consumo máximo diario: {{ maxDailyConsumption }} litros</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="simulation">
                <h5>Simulación de consumo</h5>
                <button @click="simulateConsumption" class="btn btn-primary">Simular consumo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
import Chart from 'chart.js';
  
  export default {
    name: 'WaterMonitor',
    data() {
      return {
        currentConsumption: 0,
        maxDailyConsumption: 2000, // Litros
        waterChart: null,
      };
    },
    mounted() {
      this.initializeChart();
    },
    methods: {
      initializeChart() {
        const ctx = document.getElementById('waterChart').getContext('2d');
        this.waterChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Consumido', 'Restante'],
            datasets: [{
              data: [0, this.maxDailyConsumption],
              backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)'
              ],
              borderWidth: 0
            }]
          }
        });
      },
      simulateConsumption() {
        const simulatedConsumption = Math.floor(Math.random() * 100) + 1; // Simula consumo entre 1 y 100 litros
        this.currentConsumption += simulatedConsumption;
        this.updateChart(simulatedConsumption);
      },
      updateChart(amount) {
        this.waterChart.data.datasets[0].data[0] += amount;
        this.waterChart.data.datasets[0].data[1] -= amount;
        this.waterChart.update();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>