import React from 'react';
import '../../stylesheets/main.scss';
import PieChart from "react-minimal-pie-chart";
import Navbar from "../nav/navbar_container";

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.totalAnnualIncome({ year: (new Date()).getFullYear() });
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

    if(!this.props.incomes){
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
              <input type="text" disabled={true} />
            </div>

            <div>
              Expenses
              <input type="text" disabled={true} />
            </div>

            <div className="pie-chart-div">
              <PieChart
                className="pie-chart"
                data={[
                  // { title: "Income", value: 20, color: "#E38627" },
                  { title: "Expenses", value: 15, color: "#C13C37" },
                  { title: "Savings", value: 5, color: "#6A2135" }
                ]}
              />
            </div>
          </div>

          <div className="box">
            <h1>Year of {year}</h1>
            <div>
              Total income
              <h2>{this.props.totalAmount}</h2>
            </div>

            <div>
              Total savings
              <input type="text" disabled={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;