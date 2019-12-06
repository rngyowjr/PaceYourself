import React from 'react';
import PieChart from "react-minimal-pie-chart";


class MonthlyPie extends React.Component {

  constructor(props){
    super(props)
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
  }

    componentDidMount() {
        this.props.fetchAllIncome();
        this.props.monthlyIncome(this.state);
        this.props.fetchAllExpenses();
        this.props.monthlyExpense(this.state);
    }

    monthlyPie() {
        const { listOfExpense, monthlyIncomeAmount } = this.props;
        const income = parseFloat(monthlyIncomeAmount)
        
        const types = {};
        for (let i = 0; i < listOfExpense.length; i++) {
          let el = listOfExpense[i];

          if (types[el._id.type]) {
            types[el._id.type] += el._id.amount;
          } else {
            types[el._id.type] = el._id.amount
          }
        }

        const color = ['pink', 'red', 'orange', 'grey',
            'maroon', 'blue', 'indigo', 'violet', 'teal']

        const data = [
            {
                title: 'Income',
                value: income,
                color: 'green'
            },
        ];
        let i = 0;

        for (let key in types) {
            const newData = {
                title: key,
                value: types[key],
                color: color[i]
            };
            i++
            data.push(newData)
        }
        return data;
    }

    render() {
        const {
          totalExpenseMonthly,
          listOfExpense,
          monthlyIncomeAmount
        } = this.props;

        if (!listOfExpense) {
            return null;
        }

        return (
          <div className="main-box">
              <h1>{this.state.month}</h1>
              <div>
                Total income
                <input
                  type="number"
                  disabled={true}
                  value={monthlyIncomeAmount}
                />
              </div>

              <div>
                Total expenses
                <input
                  type="text"
                  disabled={true}
                  value={totalExpenseMonthly}
                />
              </div>

              <div className="pie-chart-div">
                <PieChart
                  className='pie-chart-div'
                  data={this.monthlyPie()}
                />
              </div>

            </div>
        );
    }
};

export default MonthlyPie;