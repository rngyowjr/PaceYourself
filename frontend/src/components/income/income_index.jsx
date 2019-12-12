import React from 'react';
import '../../stylesheets/index.scss';
import Navbar from '../nav/navbar_container';
import DeleteIncome from './delete_income_container';
import UpdateIncome from './update_income';

class IncomeIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      incomeId: '',
      idx: '',
      incomes: this.props.incomes
    }

    this.openDeleteForm = this.openDeleteForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  openDeleteForm(incomeId) {
    this.setState({
      incomeId: incomeId,
    })
    document.querySelector('.avgrund-cover').style.visibility = "visible";
    document.querySelector('.delete-modal').style.visibility = "visible";
  };

  openUpdateForm(key) {
    this.setState({
      idx: key
    })
    document.querySelector('.avgrund-cover').style.visibility = "visible";
    document.querySelector('.update-modal').style.visibility = "visible";
  };

  render(){

    return (
      <div className="income-index">
        <Navbar />
        <div className="income-index-container">
          <div className="income-index-table">
            <table>
              <th>Year</th>
              <th>Month</th>
              <th>Income</th>
              <th>Actions</th>
            </table>
            {this.props.incomes.map((income, key) => (
              <table>
                <tr>
                  <td>{income.year}</td>
                  <td>{income.month}</td>
                  <td>{income.income.toFixed(2)}</td>
                  <td>
                    <div className="income-index-buttons">
                      <button 
                        className="index-button index-edit-button"
                        onClick={() => this.openUpdateForm(key)}
                      >Edit</button>
                      <button 
                        className="index-button index-delete-button"
                        onClick={() => this.openDeleteForm(income._id)}
                      >Delete</button>
                    </div>
                  </td>
                </tr>
              </table>
            ))}
          </div>
        </div>

        <div className="avgrund-cover"></div>
        <div className="update-modal">
          <UpdateIncome 
            idx={this.state.idx} 
            incomes={this.props.incomes}
            updateIncome={this.props.updateIncome}
          />
        </div>
        <div className="delete-modal">
          <DeleteIncome incomeId={this.state.incomeId}/>
        </div>
      </div>
    );
  }
}

export default IncomeIndex;