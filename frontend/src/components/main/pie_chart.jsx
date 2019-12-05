import React from 'react';
import PieChart from "react-minimal-pie-chart";
import { expenseByType } from '../../util/expense_util';
// import { threadId } from 'worker_threads';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    // this.getValueOfType = this.getValueOfType.bind(this);
  


  // getValueOfType(type, month, year) {
  //   // let value = 0;

  //   this.props.expenseByType({
  //     month: month, 
  //     type: type,
  //     year: year
  //   }).then( result => this.setState)

    // this.props.expenses.map(expensePojo =>
    //   expensePojo.month === month &&
    //   expensePojo.year === year &&
    //   expensePojo.type === type
    //     ? (value += expensePojo.amount)
    //     : null 
    // );
  }

  makeRandomColor() {
  let c = '';
  while (c.length < 7) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#' + c;
}



  getValueOfTypes() {
    const { expenseByType } = this.props;
    const types = {};

    expenseByType.forEach(el => types[el.type] += el.amount);

    const data = Object.keys(types).map(key => {
      return {
        title: key,
        amount: types[key],
        color: this.makeRandomColor()
      }
    })
    return data;
  }

  render() {
    const { expenses } = this.props;

   return(
      <div className="pie-chart-div">
        <PieChart
          className="pie-chart"
          totalValue={this.props.monthlyIncome}
          data={[
            {
              title: "Income",
              value: this.props.monthlyIncome,
              color: "green"
            },
          
              this.getValueOfTypes()
           
          ]}
        />
      </div>
    );
  }

}

export default Chart;



    // let d = new Date();
    // let month = d.getMonth();
    // let year = d.getFullYear();

    // let months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December"
    // ];
  // return(
      // <div className="pie-chart-div">
      //   <PieChart
      //     className="pie-chart"
      //     data={[
      //       {
      //         title: "Income", types.keys[0]
      //         value: this.props.monthlyIncome,
      //         color: "green"
      //       },
      //       {
      //         title: "Bills",
      //         value: this.getValueOfType("Bills", months[month], year),
      //         color: "#C13C37"
      //       },
      //       {
      //         title: "Life/Health Insurance",
      //         value: this.getValueOfType("Life/Health Insurance", months[month], year),
      //         color: "red"
      //       },
      //       {
      //         title: "Food",
      //         value: this.getValueOfType("Food", months[month], year),
      //         color: "orange"
      //       },
      //       {
      //         title: "Personal necessities",
      //         value: this.getValueOfType("Personal necessities", months[month], year),
      //         color: "grey"
      //       },
      //       {
      //         title: "Grocery",
      //         value: this.getValueOfType("Grocery", months[month], year),
      //         color: "maroon"
      //       },
      //       {
      //         title: "Pet",
      //         value: this.getValueOfType("Pet", months[month], year),
      //         color: "blue"
      //       },
      //       {
      //         title: "Vehicle",
      //         value: this.getValueOfType("Vehicle", months[month], year),
      //         color: "indigo"
      //       },
      //       {
      //         title: "Vacation",
      //         value: this.getValueOfType("Vacation", months[month], year),
      //         color: "violet"
      //       },
      //       {
      //         title: "Other",
      //         value: this.getValueOfType("Other", months[month], year),
      //         color: "teal"
      //       }
      //     ]}
      //   />
      // </div>
    // );
  // }