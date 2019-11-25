import React from 'react';
import PieChart from "react-minimal-pie-chart";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.getValueOfType = this.getValueOfType.bind(this);
  }



  getValueOfType(type, month, year) {
    let value = 0;

    this.props.expenses.map(expensePojo =>
      expensePojo.month === month &&
      expensePojo.year === year &&
      expensePojo.type === type
        ? (value += expensePojo.amount)
        : null
    );

    return value;
  }

  

  render() {

    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <div className="pie-chart-div">
        <PieChart
          className="pie-chart"
          data={[
            {
              title: "Income",
              value: this.props.monthlyIncome,
              color: "green"
            },
            {
              title: "Bills",
              value: this.getValueOfType("Bills", months[month], year),
              color: "#C13C37"
            },
            {
              title: "Life/Health Insurance",
              value: this.getValueOfType("Life/Health Insurance", months[month], year),
              color: "red"
            },
            {
              title: "Food",
              value: this.getValueOfType("Food", months[month], year),
              color: "orange"
            },
            {
              title: "Personal necessities",
              value: this.getValueOfType("Personal necessities", months[month], year),
              color: "grey"
            },
            {
              title: "Grocery",
              value: this.getValueOfType("Grocery", months[month], year),
              color: "maroon"
            },
            {
              title: "Pet",
              value: this.getValueOfType("Pet", months[month], year),
              color: "blue"
            },
            {
              title: "Vehicle",
              value: this.getValueOfType("Vehicle", months[month], year),
              color: "indigo"
            },
            {
              title: "Vacation",
              value: this.getValueOfType("Vacation", months[month], year),
              color: "violet"
            },
            {
              title: "Other",
              value: this.getValueOfType("Other", months[month], year),
              color: "teal"
            }
          ]}
        />
      </div>
    );
  }
}

export default Chart;