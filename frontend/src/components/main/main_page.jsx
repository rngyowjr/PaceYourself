import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
import PieChart from "react-minimal-pie-chart";
import Chart from './pie_chart';
import IncomeForm from '../income/income_container'
import Navbar from '../nav/navbar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.getMonthlyIncome = this.getMonthlyIncome.bind(this);
    this.getTotalExpense = this.getTotalExpense.bind(this);
    this.getAnnualExpense = this.getAnnualExpense.bind(this);
    this.openIncome = this.openIncome.bind(this);
  }

  componentDidMount() {
    let d = new Date();
    let yr = d.getFullYear();

    this.props.totalAnnualIncome({ year: yr });
    this.props.fetchAllIncome();
    this.props.fetchAllExpenses(); //for displaying the monthly expenses
    this.props.totalAnnualExpense({ year: yr }); //for annual expenses
  }

  openIncome() {
    this.setState({
      show: !this.state.show
    });
    document.querySelector('.avgrund-cover').style.visibility = "visible"
  };

  getMonthlyIncome(month, year) {
    let monthlyIncome = 0;
    if (this.props.incomes) {
      this.props.incomes.map(incomePojo =>
        incomePojo.month === month && incomePojo.year === year && incomePojo.users === this.props.currentUser.id
          ? (monthlyIncome = incomePojo.income)
          : null
      );
      return monthlyIncome;
    }
  }

  getTotalExpense(month, year) {
    let sumExpense = 0;
    if (this.props.expenses) {
    this.props.expenses.map(expensePojo =>
      expensePojo.month === month && expensePojo.year === year
        ? (sumExpense += expensePojo.amount)
        : null
    );
      return sumExpense;
    }
  }

  getAnnualExpense(year) {
    let annualExpense = 0;
    if (this.props.expenses) {
      this.props.expenses.map(expensePojo => 
        expensePojo.year === year ? annualExpense += expensePojo.amount : null
      )
      return annualExpense;
    }
  }

  handleChart(monthlyIncome) {
    if (this.props.expenses){
      return <Chart monthlyIncome={monthlyIncome} expenses={this.props.expenses} />
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
    ];

    let monthlyIncome = this.getMonthlyIncome(months[month], year);
    let annualIncome = this.props.annualIncome;

    if (!this.props.incomes) {
      return null;
    }

    return (
      <div className="top-dog">
        <div className="main-page">
          <Navbar />
          <button className="income-modal-button" onClick={this.openIncome}>Make an Income</button>
          <div className="main-content-container">
            <div className="main-box">
              <h1>{months[month]}</h1>
              <div>
                Income
                <input 
                type="text"
                disabled={true} value={monthlyIncome} />
              </div>

              <div>
                Expenses
                <input
                  type="text"
                  disabled={true}
                  value={this.getTotalExpense(months[month], year)}
                />
              </div>

              <div className="chart-month-div">
                {this.handleChart(monthlyIncome)}
              </div>
            </div>

            <div className="main-box">
              <h1>Year of {year}</h1>
              <div>
                Total income
                <input
                  type="number"
                  disabled={true}
                  value={annualIncome}
                />
              </div>

              <div>
                Total expenses
                <input
                  type="text"
                  disabled={true}
                  value={this.getAnnualExpense(year)}
                />
              </div>

              <div className="pie-chart-div">
                <PieChart 
                  className="pie-chart"
                  totalValue={annualIncome}
                  data={[
                    { 
                      title: "Income",
                      value: annualIncome,
                      color: "green"
                    },
                    { 
                      title: "Expense",
                      value: this.getAnnualExpense(year),
                      color: "red"
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="avgrund-cover"></div>
        
        <div className="income-modal">
          <IncomeForm closeIncome={this.openIncome} show={this.state.show} />
        </div>
      </div>
    );
  }
}

export default Main;