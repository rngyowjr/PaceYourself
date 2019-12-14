import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
import MonthlyPie from '../pie/monthly_pie';
import AnnualPie from '../pie/annually_pie';
import IncomeForm from '../income/income_form_container'
import ExpenseForm from '../expense/create_expense_form_container';
import Navbar from '../nav/navbar_container';
import Numeral from "numeral";
import "numeral/locales/pt-br";



class Main extends React.Component {
  constructor(props) {
    super(props);
    const months = [
      "January",
      "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();

    this.state = ({
      user: this.props.currentUser.id,
      month: months[d.getMonth()],
      year: d.getFullYear(),
    })
    
    this.openIncomeForm = this.openIncomeForm.bind(this);
    this.openExpenseForm = this.openExpenseForm.bind(this);
  }

  componentDidMount() {
    this.props.monthlyIncome(this.state);
    this.props.annualIncome(this.state.year)
    this.props.monthlyExpense(this.state);
    this.props.annualExpense(this.state.year)
  }

  openIncomeForm() {
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.income-modal').style.visibility = "visible"
  };

  openExpenseForm() {
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.expense-modal').style.visibility = "visible"
  };



  render() {

    return (
      <div className="main-page">
        <Navbar />
        <div className="main-page-content">
          <div className="main-button-container">
            <button className="income-modal-button" onClick={this.openIncomeForm}>Make an Income</button>
            <button className="expense-modal-button" onClick={this.openExpenseForm}>Make An expense</button>
          </div>

          <div className="main-content-container">

            <div className="chart-month-div">
              <MonthlyPie
                data={this.state}
                listOfExpense={this.props.listOfExpenseMonthly}
                monthlyIncomeAmount={this.props.monthlyIncomeAmount}
                // monthlyIncomeAmount={Numeral(parseFloat(this.props.monthlyIncomeAmount)).format('0,0')}
                currentUser={this.props.currentUser}
                totalExpenseMonthly={this.props.totalExpenseMonthly}
              />
            </div>

            <div className="chart-month-div">
              <AnnualPie 
                year={this.state.year}
                listOfExpense={this.props.listOfExpenseAnnually}
                annualIncomeAmount={this.props.annualIncomeAmount}
                annualExpenseAmount={this.props.annualExpenseAmount}
              />
            </div>

          </div>
        </div>

        
        <div className="avgrund-cover"></div>
        
        {/* <div className="flip-container">
          <div className="flipper"> */}
        <div className="income-modal">
          <IncomeForm/>
        </div>
        <div className="expense-modal">
          <ExpenseForm/>
        </div>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Main;