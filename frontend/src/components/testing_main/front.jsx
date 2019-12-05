import React from 'react';
import PieChart from "react-minimal-pie-chart";


class Front extends React.Component {

    constructor(props) {
        super(props);
        this.makeRandomColor = this.makeRandomColor.bind(this);
    }

    componentDidMount() {
        const month = [
            "January",
            "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();

        this.props.fetchAllExpenses();

        this.props.monthlyExpense({
            user: this.props.currentUser.id,
            month: month[d.getMonth()],
            year: d.getFullYear()
        });

        this.props.annualExpense({
            year: d.getFullYear()
        })
    }

    makeRandomColor() {
        let c = '';
        while (c.length < 7) {
            c += (Math.random()).toString(16).substr(-6).substr(-1)
        }
        return '#' + c;
    }

    monthlyPie() {
        const { listOfExpense } = this.props;
        
        const types = {};
        listOfExpense.forEach(el => types[el._id.type] = el._id.amount);

        const color = ['yellow', 'red', 'orange', 'grey',
            'maroon', 'blue', 'indigo', 'violet', 'teal']

        const data = [
            {
                title: 'Income',
                value: 30003,
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
        const { totalExpenseMonthly, 
                totalExpenseAnnually, 
                listOfExpense } = this.props;

        if (!listOfExpense) {
            return null;
        }

        return (
          <div className='main-page-div'>
            <div className='container'>
              <div className='box'>
                <div>
                  Income
                  {/* <input type="text" disabled={true} value={monthlyIncome} /> */}
                </div>

                <div>
                  Expenses
                  {/* <input
                                type="text"
                                disabled={true}
                                value={this.getTotalExpense(months[month], year)}
                            /> */}
                </div>

                <div className='chart-month-div'>
                  <PieChart
                    className='pie-chart-div'
                    data={

                      this.monthlyPie()
                    }
                    // data={[{
                    //     title: 'Income',
                    //     value: 30003,
                    //     color: 'green'
                    // },
                    //     this.monthlyPie()]}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default Front;