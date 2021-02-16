import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DonutGraph = ({ active, recovered, deaths}) => {
    const data = {
        labels: ['active', 'decreased','recovered'],
        datasets: [
            {
                data: [active, deaths, recovered],
                backgroundColor: [
                    'rgba(38, 135, 191, 1)',
                    'rgba(71, 82, 69, 1)',
                    'rgba(56, 191, 38, 1)',
                ]
            }
        ]
    }

    const options = {
        responsive: true,
        cutoutPercentage: 50,
        title: {
            display: true,
        }
    }

    return <Doughnut data={data} options={options} />
}



export default DonutGraph
