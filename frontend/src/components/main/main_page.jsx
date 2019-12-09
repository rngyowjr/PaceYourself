import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
import MonthlyChart from '../pie/monthly_pie_container';
import AnnualChart from '../pie/annually_pie_container';
import IncomeForm from '../income/income_container'
import Navbar from '../nav/navbar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.openIncome = this.openIncome.bind(this);
  }

  openIncome() {
    this.setState({
      show: !this.state.show
    });
    document.querySelector('.avgrund-cover').style.visibility = "visible"
  };

  render() {

    return (
      <div className="top-dog">
        <div className="main-page">
          <Navbar />
          <button className="income-modal-button" onClick={this.openIncome}>Make an Income</button>
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
        
        <div className="income-modal">
          <IncomeForm closeIncome={this.openIncome} show={this.state.show} />
        </div>
      </div>
    );
  }
}

export default Main;