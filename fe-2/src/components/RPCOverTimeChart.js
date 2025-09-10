import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RPCOverTimeChart = () => {
  const data = {
    labels: [
      '07/08', '09/08', '10/08', '11/08', '12/08', '13/08', '14/08',
      '19/08', '20/08', '21/08', '23/08', '25/08', '26/08', '27/08', '28/08',
      '04/09', '05/09'
    ],
    datasets: [
      {
        label: 'RPC',
        data: [0.5, 2.8, 2.1, 1.9, 2.4, 3.2, 2.9, 1.8, 1.5, 1.7, 2.2, 2.6, 2.3, 1.9, 2.1, 1.4, 0.8],
        backgroundColor: 'rgba(169, 169, 169, 0.6)',
        borderColor: 'rgba(169, 169, 169, 1)',
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
        hoverBackgroundColor: 'rgb(117, 180, 121)',
        // hoverBorderColor: 'rgba(169, 169, 169, 1)',
        // hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `RPC: $${context.parsed.y.toFixed(2)}`;
          }
        }
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
        display: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: function(value) {
            return '$' + value.toFixed(1);
          },
        },
      },
    },
    datasets: {
      bar: {
        barPercentage: 0.7,
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

export default RPCOverTimeChart;
