import React from 'react';
import '../../stylesheets/main.scss';

class Main extends React.Component {
  render() {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    return (
      <div className="main-page-div">
        <div className="container">

          <div className="box">
            <h1>{months[d.getMonth()]}</h1>
            <div>
              Income
              <input type="text" disabled={true}/>
            </div>

            <div>
              Expenses
              <input type="text" disabled={true}/>
            </div>
          </div>

          <div className="box">
            <h1>Year of {d.getFullYear()}</h1>
            <div>
              Total income
              <input type="text" disabled={true} />
            </div>

            <div>
              Total savings
              <input type="text" disabled={true }/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Main;