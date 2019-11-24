import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';

class IncomeIndex extends React.Component {
  // constructor(props){
  //   super(props)
  // };

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  // handleDelete(pojo){

  // }

  render(){
    if(!this.props.incomes){
      return null
    }

    return (
      <div>
        <Navbar />
        <div className="main-div">
          <table>
            <th>Month</th>
            <th>Income</th>
          </table>
          {this.props.incomes.map(income => (
            <table>
              <tr>
                <td>{income.month}</td>
                <td>{income.income}</td>
                {/* <button onCLick={this.handleDelete({_id: income.id})}></button> */}
              </tr>
            </table>
          ))}
        </div>
      </div>
    );
  }
}

export default IncomeIndex;