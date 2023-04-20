import React from 'react'
import './chart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
        align :"end"
        
      },
      title: {
        display: true,
        text: 'company demo data',
        position:'top',
        align:"start"
        
      },
    },
  };
  
  const labels = ['week1', 'week2', 'week3', 'week4'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Guest',
        data:[300,200,400,500],
        borderColor: 'rgba(155, 221, 124, 1)',
        backgroundColor: 'rgba(155, 221, 124, 1)',
        tension:0.4
      },
      {
        label: 'User',
        data: [500,300,700,100],
        borderColor: 'rgba(233, 160, 160, 1)',
        backgroundColor: 'rgba(233, 160, 160, 1)',
        tension:0.4
      },
    ],
  };
function Chart() {

   
    return (
        <div className='chart'>
            <Line
                data={data}
                options={options}></Line>
        </div>
    )
}

export default Chart;