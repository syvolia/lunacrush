import React from 'react'
import { Bar } from 'react-chartjs-2';
import './Graph.css'
function Graph({open,high,low}) {
    return (
        <Bar
            className='graph'
            data={{
                labels: ['Open', 'High', 'Low'],
                datasets: [
                    {
                        label: 'Price',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [open, high, low]
                    },
                ],
            }}
            options={{
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                },
            }}
        />
    )
}

export default Graph
