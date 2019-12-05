import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';
import UpdateIncome from './update_income';

class IncomeIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {      
      selectedIncomeId: null
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    
  }


  componentDidMount() {
    this.props.fetchAllIncome();
  }

  handleUpdate(incomeId) {
    this.setState({selectedIncomeId: incomeId  })
    // <UpdateIncome 
    //   incomeId={incomeId} 
    //   fetchAllIncome={this.props.fetchAllIncome} 
    //   updateIncome={this.props.updateIncome}
    // />
  }

  handleDelete(incomeId){
    this.props.deleteIncome(incomeId);
  }


  render(){
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
                  <button onClick={() => this.handleUpdate(income._id)}>Edit</button>
                  {/* <button>Delete</button> */}
                  <button onClick={() => this.handleDelete({_id: income._id})}>Delete</button>
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