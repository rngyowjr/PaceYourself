import React from 'react';
import Navbar from '../nav/navbar_container';
import IncomeContainer from '../income/income_container';

class Home extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        return(
            <div>
                <Navbar />
                <IncomeContainer />
                {/* <h1>Welcome</h1>
                <button onClick={this.props.logout}>Logout</button> */}
            </div>
        )
    }
}

export default Home;