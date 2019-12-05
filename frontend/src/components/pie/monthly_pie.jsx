import React from 'react';
import PieChart from "react-minimal-pie-chart";


class MonthlyPie extends React.Component {

    componentDidMount() {
        const month = [
            "January",
            "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();

        this.props.fetchAllIncome();
        this.props.monthlyIncome({
          user: this.props.currentUser.id,
          month: month[d.getMonth()],
          year: d.getFullYear()
        });

        this.props.fetchAllExpenses();
        this.props.monthlyExpense({
            user: this.props.currentUser.id,
            month: month[d.getMonth()],
            year: d.getFullYear()
        });
    }

    monthlyPie() {
        const { listOfExpense, monthlyIncome } = this.props;
        const income = parseFloat(monthlyIncome).floor
        
        const types = {};
        for (let i = 0; i < listOfExpense.length; i++) {
          let el = listOfExpense[i];

          if (types[el._id.type]) {
            types[el._id.type] += el._id.amount;
          } else {
            types[el._id.type] = el._id.amount
          }
        }

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
          <div className='main-page-div'>
            <div className='container'>
              <div className='box'>
                <div>Income</div>

                <div>Expenses: {totalExpenseMonthly}</div>

                <div className='chart-month-div'>
                  <PieChart
                    className='pie-chart-div'
                    data={this.monthlyPie()}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default MonthlyPie;