import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import UpdateIncome from './update_income';

class IncomeIndex extends React.Component {
  // constructor(props){
  //   super(props)
  // }


  componentDidMount() {
    this.props.fetchAllIncome();
  }
  
  render(){

    const { deleteIncome } = this.props;
    
    if(!this.props.incomes){
      return null
    }

    let usersIncome = []

    this.props.incomes.map(incomePojo => {
      if (incomePojo.user === this.props.currentUser.id) {
        usersIncome.push(incomePojo);
      }
    })

    const updateForm = this.state.selectedIncomeId ?
      <UpdateIncome
        incomeId={this.state.selectedIncomeId}
        fetchAllIncome={this.props.fetchAllIncome}
        updateIncome={this.props.updateIncome}
      />
      : ""

    return (
      <div>
        <Navbar />
        <div className="main-div">
          <table>
            <th>Year</th>
            <th>Month</th>
            <th>Income</th>
            <th>Actions</th>
          </table>
          {usersIncome.map(income => (
            <table>
              <tr>
                <td>{income.year}</td>
                <td>{income.month}</td>
                <td>{income.income.toFixed(2)}</td>
                <td>
                  <Link to={`/updateincome/${income._id}`}>Edit</Link>
                  <button onClick={() => deleteIncome(income._id)}>Delete</button>
                </td>
              </tr>
            </table>            
          ))}
         {
           updateForm
         }
        </div>
      </div>
    );
  }
}

export default IncomeIndex;