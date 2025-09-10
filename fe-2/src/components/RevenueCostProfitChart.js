import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Plugin để vẽ đường ngang nét đứt
const dashedGridPlugin = {
  id: 'dashedGrid',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const yAxis = chart.scales.y;
    
    if (!yAxis || !yAxis.ticks) return;
    
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    // Vẽ đường ngang nét đứt tại mỗi tick
    yAxis.ticks.forEach((tick) => {
      if (tick && typeof tick.y === 'number') {
        const y = tick.y;
        ctx.beginPath();
        ctx.moveTo(yAxis.left, y);
        ctx.lineTo(yAxis.right, y);
        ctx.stroke();
      }
    });
    
    ctx.restore();
  }
};






const RevenueCostProfitChart = () => {
  // Sample positive data for the last 7 days
  const data = {
    labels: ['09/08', '10/08', '11/08', '12/08', '13/08', '14/08', '15/08'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [1200, 1350, 1100, 1450, 1600, 1800, 1750],
        backgroundColor: 'rgba(128, 128, 128, 0.6)',
        borderColor: 'rgba(128, 128, 128, 1)',
        borderWidth: 1,
        yAxisID: 'y',
        hoverBackgroundColor: 'rgb(117, 180, 121)',
        // hoverBorderColor: 'rgb(135, 240, 140)',
        // hoverBorderWidth: 3,
      },
      {
        type: 'bar',
        label: 'Cost',
        data: [800, 900, 750, 950, 1000, 1100, 1050],
        backgroundColor: 'rgba(169, 169, 169, 0.4)',
        borderColor: 'rgba(169, 169, 169, 1)',
        borderWidth: 1,
        yAxisID: 'y',
        hoverBackgroundColor: 'rgb(175, 202, 162)',
        // hoverBorderColor: 'rgb(204, 238, 194)',
        // hoverBorderWidth: 3,
      },
      {
        type: 'line',
        label: 'Profit',
        data: [400, 450, 350, 500, 600, 700, 700],
        borderColor: '#3dec66',
        backgroundColor: '#3dec66',
        borderWidth: 3,
        fill: false,
        tension: 0.1,
        pointBackgroundColor: '#3dec66',
        pointBorderColor: '#3dec66',
        pointRadius: 6,
        pointHoverRadius: 12,
        pointHoverBackgroundColor: '#2bc653',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 4,
        hoverBorderColor: '#2bc653',
        hoverBorderWidth: 5,
        yAxisID: 'y',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      dashedGrid: dashedGridPlugin,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: function(value) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    datasets: {
      bar: {
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    },
  };



  return (
    <div className="chart-container">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default RevenueCostProfitChart;
