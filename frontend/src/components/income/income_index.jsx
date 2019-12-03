import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';

class IncomeIndex extends React.Component {
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }


  componentDidMount() {
    this.props.fetchAllIncome();
  }

  handleDelete(incomeId){
    this.props.deleteIncome(incomeId);
  }

  render(){
    if(!this.props.incomes){
      return null
    }

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
          {this.props.incomes.map(income => (
            <table>
              <tr>
                <td>{income.year}</td>
                <td>{income.month}</td>
                <td>{income.income}</td>
                <td>
                  <button>Edit</button>
                  {/* <button>Delete</button> */}
                  <button onClick={() => this.handleDelete({_id: income._id})}>Delete</button>
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