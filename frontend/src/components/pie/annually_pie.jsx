import React from 'react';
import PieChart from "react-minimal-pie-chart";

class AnnuallyPie extends React.Component {

    componentDidMount() {
        const d = new Date();
        
        this.props.fetchAllIncome();
        this.props.annualIncome({ year: d.getFullYear()})

        this.props.fetchAllExpenses();
        this.props.annualExpense({year: d.getFullYear()})
    }

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

        const color = ['yellow', 'red', 'orange', 'grey',
            'maroon', 'blue', 'indigo', 'violet', 'teal'];
        
        const data = [
            {
                title: 'Income',
                value: income, // need to ask eliott how come income is undefined but show in console
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
        const { listOfExpense, annualIncomeAmount } = this.props;

        if (!listOfExpense) {
            return null;
        };
        if (!annualIncomeAmount) {
            return null;
        };

        return (
            <div className='chart-month-div'>
             <h1>Total Annual Income: {annualIncomeAmount}</h1>
             <h1>Total Annual Expense: {annualIncomeAmount}</h1>
                <PieChart
                    className='pie-chart-div'
                    data={this.annualPie()}
                />
            </div>

        );

    }

};

export default AnnuallyPie;