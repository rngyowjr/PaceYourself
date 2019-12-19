import React from 'react';
// import PieChart from "react-minimal-pie-chart";
import DonutChart from "react-donut-chart";

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

        return (
          <div className='main-box'>
            <h1>Year of {this.props.year}</h1>
            <br />
            <div>
              Total income: ${annualIncomeAmount}
              {/* <input type='number' disabled={true} value={annualIncomeAmount} /> */}
            </div>

            <div>
              Total expenses: ${annualExpenseAmount}
              {/* <input type='text' disabled={true} value={annualExpenseAmount} /> */}
            </div>

            <div className='pie-chart-container'>
              <DonutChart className='pie-chart-div' data={this.annualPie()} />
            </div>
          </div>
        );
    }
};

export default AnnuallyPie;