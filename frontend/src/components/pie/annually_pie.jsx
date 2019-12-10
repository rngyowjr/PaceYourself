import React from 'react';
import PieChart from "react-minimal-pie-chart";

class AnnuallyPie extends React.Component {
    constructor(props){
        super(props)
        const d = new Date();
        this.state = {year: d.getFullYear()}
    }

    componentDidMount() {
        this.props.fetchAllIncome();
        this.props.annualIncome(this.state)

        this.props.fetchAllExpenses();
        this.props.annualExpense(this.state)
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

        const color = ['pink', 'orange', 'red',  'grey',
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
        const { listOfExpense, annualIncomeAmount, annualExpenseAmount } = this.props;

        if (!listOfExpense) {
            return null;
        };

        return (
            <div className="main-box">

                <h1>Year of {this.state.year}</h1>
                
                <div>
                    Total income
                    <input
                        type="number"
                        disabled={true}
                        value={annualIncomeAmount}
                    />
                </div>

                <div>
                    Total expenses
                    <input
                        type="text"
                        disabled={true}
                        value={annualExpenseAmount}
                    />
                </div>

                <div className="pie-chart-div">
                    <PieChart
                        className='pie-chart-div'
                        totalValue={annualIncomeAmount}
                        data={this.annualPie()}
                    />
                </div>

            </div>
        );
    }
};

export default AnnuallyPie;