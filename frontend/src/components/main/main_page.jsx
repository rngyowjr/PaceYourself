import React from 'react';
import '../../stylesheets/main.scss';
import PieChart from "react-minimal-pie-chart";
import Navbar from "../nav/navbar_container";
// import PieChart2 from './pie_chart';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.getMonthlyIncome = this.getMonthlyIncome.bind(this);
  }

  componentDidMount() {
    let d = new Date();
    let yr = d.getFullYear();

    this.props.totalAnnualIncome({ year: yr });
    this.props.fetchAllIncome();
    this.props.fetchAllExpenses(); //for displaying the monthly expenses
    this.props.totalAnnualExpense({ year: yr }); //for annual expenses
  }

  getMonthlyIncome(month) {
    let monthlyIncome
    if (this.props.incomes) {
      this.props.incomes.map(incomePojo => (
        incomePojo.month === month ? monthlyIncome = incomePojo.income : null
      ))
      return monthlyIncome;
    }
  }


  render() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();

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
    ]

    let monthlyIncome = this.getMonthlyIncome(months[month])

    if (!this.props.incomes) {
      return null
    }

    return (
      <div className="main-page-div">
        <Navbar />
        <div className="container">
          <div className="box">
            <h1>{months[month]}</h1>
            <div>
              Income
              <input type="text" disabled={true} value={monthlyIncome} />
            </div>

            <div>
              Expenses
              <input type="text" disabled={true} />
            </div>

            <div className="pie-chart-div">
              <PieChart
                className="pie-chart"
                data={[
                  { title: "Income", value: 8, color: "green" }, // value: {monthlyIncome} this will be basically the savings?
                  { title: "Bills", value: 7, color: "#C13C37" }, //need to iterate through all of the expenses list with their types and get the value of each
                  { title: "Life/Health Insurance", value: 1, color: "red" },
                  { title: "Food", value: 2, color: "orange" },
                  { title: "Personal necessities", value: 3, color: "grey" },
                  { title: "Grocery", value: 4, color: "maroon" },
                  { title: "Pet", value: 5, color: "blue" },
                  { title: "Vehicle", value: 6, color: "indigo" },
                  { title: "Vacation", value: 7, color: "violet" },
                  { title: "Other", value: 8, color: "teal" }
                ]}
              />
              {/* <PieChart2 /> */}
            </div>
          </div>

          <div className="box">
            <h1>Year of {year}</h1>
            <div>
              Total income
              <h2>{this.props.annualIncome}</h2>
            </div>

            <div>
              Total expenses
              <input type="text" disabled={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;