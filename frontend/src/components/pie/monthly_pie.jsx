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
        // const month = [
        //     "January",
        //     "February", "March", "April", "May", "June",
        //     "July", "August", "September", "October", "November", "December"
        // ];
        const d = new Date();
        this.props.fetchAllIncome();
        this.props.monthlyIncome(this.state);
        this.props.fetchAllExpenses();
        this.props.monthlyExpense(this.state);
    }

    monthlyPie() {
        const { listOfExpense, monthlyIncome } = this.props;
        // const income = parseFloat(monthlyIncome)
        console.log(monthlyIncome)
        
        const types = {};
        listOfExpense.forEach(el => types[el._id.type] = el._id.amount);

        const color = ['yellow', 'red', 'orange', 'grey',
            'maroon', 'blue', 'indigo', 'violet', 'teal']

        const data = [
            {
                title: 'Income',
                value: 23432, // need to ask eliott how come income is undefined but show in console
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
          // totalExpenseAnnually,
          listOfExpense,
          incomes,
          monthlyIncome
        } = this.props;

        if (!listOfExpense || !incomes) {
            return null;
        }
        if (!monthlyIncome) {
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