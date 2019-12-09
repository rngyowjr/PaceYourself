import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
// import PieChart from "react-minimal-pie-chart";
import Chart from '../pie/monthly_pie_container';
import IncomeForm from '../income/income_container'
import ExpenseForm from '../expense/create_expense_form_container';
import Navbar from '../nav/navbar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    // this.getMonthlyIncome = this.getMonthlyIncome.bind(this);
    // this.getTotalExpense = this.getTotalExpense.bind(this);
    // this.getAnnualExpense = this.getAnnualExpense.bind(this);
    // this.handleChart = this.handleChart.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  // componentDidMount() {
  //   let d = new Date();
  //   let yr = d.getFullYear();

  //   this.props.totalAnnualIncome({ year: yr });
  //   this.props.fetchAllIncome();
  //   this.props.fetchAllExpenses(); 
  //   this.props.totalAnnualExpense({ year: yr }); 
  // }

  openForm() {
    this.setState({
      show: !this.state.show
    });
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.income-modal').style.visibility = "visible"
  };

  // getMonthlyIncome(month, year) {
  //   let monthlyIncome = 0.00;
  //   if (this.props.incomes) {
  //     this.props.incomes.map(incomePojo =>
  //       ((incomePojo.month === month) && (incomePojo.year === year) && (incomePojo.user === this.props.currentUser.id))
  //         ? (monthlyIncome = incomePojo.income)
  //         : null
  //     );
  //     return monthlyIncome.toFixed(2);
  //   }
  // }

  // getTotalExpense(month, year) {
  //   let sumExpense = 0.00;
  //   if (this.props.expenses) {
  //   this.props.expenses.map(expensePojo =>
  //     expensePojo.month === month && expensePojo.year === year
  //       ? (sumExpense += expensePojo.amount)
  //       : null
  //   );
  //     return sumExpense.toFixed(2);
  //   }
  // }

  // getAnnualExpense(year) {
  //   let annualExpense = 0.00;
  //   if (this.props.expenses) {
  //     this.props.expenses.map(expensePojo => 
  //       expensePojo.year === year ? annualExpense += expensePojo.amount : null
  //     )
  //     return annualExpense.toFixed(2);
  //   }
  // }

  // handleChart(monthlyIncome) {
  //   if (this.props.expenses){
  //     return <Chart monthlyIncome={monthlyIncome} expenses={this.props.expenses} />
  //   }
  // }

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

    // let monthlyIncome = this.getMonthlyIncome(months[month], year);
    // let annualIncome = this.props.annualIncome;

    return (
      <div className="top-dog">
        <div className="main-page">
          <Navbar />
          <button className="income-modal-button" onClick={this.openForm}>Make an Income</button>
          <div className="main-content-container">

              <div className="chart-month-div">
                <Chart />
              </div>

            <div className="main-box">
              <h1>Year of {year}</h1>
              <div>
                Total income
                <input
                  type="number"
                  disabled={true}
                  // value={annualIncome}
                />
              </div>

              <div>
                Total expenses
                <input
                  type="text"
                  disabled={true}
                  // value={this.getAnnualExpense(year)}
                />
              </div>

              {/* <div className="pie-chart-div">
                <PieChart 
                  className="pie-chart"
                  // totalValue={annualIncome}
                  data={[
                    { 
                      title: "Income",
                      // value: annualIncome,
                      color: "green"
                    },
                    { 
                      title: "Expense",
                      // value: this.getAnnualExpense(year),
                      color: "red"
                    }
                  ]}
                />
              </div> */}

            </div>
          </div>
        </div>

        
        <div className="avgrund-cover"></div>
        
        {/* <div className="flip-container">
          <div className="flipper"> */}
            <div className="income-modal">
              <IncomeForm closeForm={this.openForm} show={this.state.show} />
            </div>
            <div className="expense-modal">
              <ExpenseForm closeForm={this.openForm} show={this.state.show}/>
            </div>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Main;