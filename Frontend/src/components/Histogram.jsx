import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Histogram = () => {
  // Dummy data for the histogram (replace with actual data)
  const salesData = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  // Function to create the histogram chart
  const createHistogramChart = () => {
    const ctx = document.getElementById('histogramChart');

    // Check if a chart instance exists for the canvas element
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      // If a chart instance exists, destroy it before creating a new chart
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
          label: 'Monthly Sales',
          data: salesData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  // Initialize the histogram chart when the component mounts
  useEffect(() => {
    createHistogramChart();
  }, []);

  return (
    <div>
      <h2>Monthly Sales Histogram</h2>
      <canvas id="histogramChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Histogram;
