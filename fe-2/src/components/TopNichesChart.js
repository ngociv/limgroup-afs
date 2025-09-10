import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopNichesChart = () => {
  const data = {
    labels: ['Healthy', 'Home', 'Other'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(128, 128, 128, 0.8)',
          'rgba(169, 169, 169, 0.6)',
          'rgba(200, 200, 200, 0.4)',
        ],
        borderColor: [
          'rgba(128, 128, 128, 1)',
          'rgba(169, 169, 169, 1)',
          'rgba(200, 200, 200, 1)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(128, 128, 128, 1)',
          'rgba(169, 169, 169, 0.8)',
          'rgba(200, 200, 200, 0.6)',
        ],
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
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
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}%`;
          }
        }
      },
    },
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
  };

  // Dữ liệu cho labels bên dưới
  const nicheData = [
    { label: 'Healthy', value: '$180.5', percentage: '45%' },
    { label: 'Home', value: '$140.3', percentage: '35%' },
    { label: 'Other', value: '$80.2', percentage: '20%' },
  ];

  return (
    <div className="top-niches-chart">
      <div className="chart-container" style={{ height: '250px', width: '100%', position: 'relative' }}>
        <Doughnut data={data} options={options} />
      </div>
      
      <div className="niche-labels">
        {nicheData.map((item, index) => (
          <div key={index} className="niche-item">
            <div className="niche-label">{item.label}</div>
            <div className="niche-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNichesChart;
