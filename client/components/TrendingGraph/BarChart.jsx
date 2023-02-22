import React from 'react'
import {Bar} from 'react-chartjs-2'
 
const BarChart = () => {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
  return (
    <div>
       <Bar
        data = {{
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
        }}
        height = {400}
        width= {600}
       />
    </div>
  )
}
 
export default BarChart