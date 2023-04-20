import React from 'react';
import './Product.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
        
      },
      title: {
        display: true,
        text: 'Top product',
        position:'top' ,
        align:'start'
      },
    },
  };

export const data = {
  labels: ['Basic Tees', 'Custom short pantes', 'Shirts'],
  datasets: [
    {
      label: '# of Votes',
      data: [18, 45, 11],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};


function Product() {
  return (
    <div className='chart-product'> <Pie data={data}  options={options}/></div>
  )
}

export default Product;