import React from 'react';
import DonutChart from "react-donut-chart";
import Numeral from "numeral";
import "numeral/locales/pt-br";

class AnnuallyPie extends React.Component {

    annualPie() {
        const { listOfExpense, annualIncomeAmount } = this.props;
        const income = parseFloat(annualIncomeAmount)

        const types = {};
        for (let i = 0; i < listOfExpense.length; i++) {
            let el = listOfExpense[i];

            if (types[el._id.type]) {
                types[el._id.type] += el._id.amount;
            } else {
                types[el._id.type] = el._id.amount
            }
        }

        const color = ['pink', 'orange', 'red',  'grey',
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
        const { listOfExpense, annualIncomeAmount, annualExpenseAmount } = this.props;

        if (!listOfExpense) {
            return <div></div>
        };

        const income = parseFloat(annualIncomeAmount)
        const expense = parseFloat(annualExpenseAmount)

        return (
          <div className='main-box'>
            <h1>Year of {this.props.year}</h1>
            <br />

            <div>Total income: {Numeral(income).format("$0,0.00")}</div>

            <div>Total expenses: {Numeral(expense).format("$0,0.00")}</div>

            <div className='pie-chart-container'>
              <DonutChart className='pie-chart-div' data={this.annualPie()} />
            </div>
          </div>
        );
    }
};

export default AnnuallyPie;