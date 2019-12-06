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
        const { listOfExpense, annualIncomeAmount, annualExpenseAmount } = this.props;

        if (!listOfExpense) {
            return null;
        };

        return (
            // <div className='chart-month-div'>
            //     <PieChart
            //         className='pie-chart-div'
            //         data={this.annualPie()}
            //     />
            // </div>

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

export default AnnuallyPie;