import React from 'react';
import DonutChart from "react-donut-chart";
import Numeral from "numeral";
import "numeral/locales/pt-br";


class MonthlyPie extends React.Component {

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
                label: 'Income',
                value: income,
                color: 'green'
            },
        ];
        let i = 0;

        for (let key in types) {
            const newData = {
                label: key,
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

        if (!listOfExpense || !monthlyIncomeAmount) {
            return <div></div>
        }

        const income = parseFloat(monthlyIncomeAmount)
        const expense = parseFloat(totalExpenseMonthly)

        return (
          <div className='main-box'>
            <h1>{this.props.data.month}</h1>
            <br />
            <div>Total income: {Numeral(income).format("$0,0.00")}</div>

            <div>Total expenses: {Numeral(expense).format("$0,0.00")}</div>

            <div className='pie-chart-container'>
              <DonutChart className='pie-chart-div' data={this.monthlyPie()} />
            </div>
          </div>
        );
    }
};

export default MonthlyPie;