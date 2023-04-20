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
        align:"start",
        fontsize:"20px"
        
      },
    },
  };
  
  const labels = ['week1', 'week2', 'week3', 'week4',"week5","week6"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Guest',
        data:[3,5,2,1,6,7],
        borderColor: 'rgba(155, 221, 124, 1)',
        backgroundColor: 'rgba(155, 221, 124, 1)',
        tension:0.4,
        dateRange: [3,6]
      },
      {
        label: 'User',
        data: [4,3,2,5,7,4],
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