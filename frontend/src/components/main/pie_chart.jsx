import { Pie } from 'react-chartjs-2'; //need to npm install react-chartjs-2
import React from 'react';

class PieChart extends React.Component { //this component is just a backup for the pie chart
  constructor(props){
    super(props)
    this.state = {
      labels: [
        'Income',
        'Bills',
        'Life/Health Insurance',
        'Food',
        'Personal necessities',
        'Grocery',
        'Pet',
        'Vehicle',
        'Vacation',
        'Other'
      ],
      datasets: [{
        data: [
          8, 7, 1, 2, 3, 4, 5, 6, 7, 8
        ], //this will be the value of each types
        backgroundColor: [
          'teal',
          'red', 
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet',
          'grey',
          'maroon'
        ]
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>Income vs Expenses chart</h2>
        <Pie 
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          // height='50%'
        />
      </div>
    )
  }
}

export default PieChart;