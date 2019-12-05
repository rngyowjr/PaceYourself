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
        const { listOfExpense, annualIncome } = this.props;
        console.log(annualIncome)
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
        const { listOfExpense, annualIncome } = this.props;

        if (!listOfExpense) {
            return null;
        };
        if (!annualIncome) {
            return null;
        };

        return (
            <div className='chart-month-div'>
                <PieChart
                    className='pie-chart-div'
                    data={this.annualPie()}
                />
            </div>

        );

    }

};

export default AnnuallyPie;