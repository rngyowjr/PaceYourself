import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
import MonthlyChart from '../pie/monthly_pie_container';
import AnnualChart from '../pie/annually_pie_container';
import IncomeForm from '../income/income_container'
import ExpenseForm from '../expense/create_expense_form_container';
import Navbar from '../nav/navbar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.setState({
      show: !this.state.show
    });
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.income-modal').style.visibility = "visible"
  };

  render() {

    return (
      <div className="main-page">
        <div className="main-page-content">
          <Navbar />
          <button className="income-modal-button" onClick={this.openForm}>Make an Income</button>
          <div className="main-content-container">

            <div className="chart-month-div">
              <MonthlyChart />
            </div>

            <div className="chart-month-div">
              <AnnualChart />
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