import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
// import UpdateIncome from './update_income';

class IncomeIndex extends React.Component {

  constructor(props){
    // debugger
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  handleDelete(incomeId) {
    
    this.props.deleteIncome(incomeId);
    this.props.history.go(0);
  }

  render(){

    // const { deleteIncome } = this.props;
    
    if(!this.props.incomes){
      return null
    }

    let usersIncome = []

    this.props.incomes.map(incomePojo => {
      if (incomePojo.user === this.props.currentUser.id) {
        usersIncome.push(incomePojo);
      }
    })

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
                  {/* <button onClick={() => deleteIncome(income._id)}>Delete</button> */}
                  <button onClick={() => this.handleDelete(income._id)}>Delete</button>
                </td>
              </tr>
            </table>            
          ))}
        </div>
      </div>
    );
  }
}

export default IncomeIndex;