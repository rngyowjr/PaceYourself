import React from 'react';
import Navbar from '../nav/navbar_container';
import IncomeContainer from '../income/income_container';

class Home extends React.Component {

    render() {
        return(
            <div className="home-container">
                <Navbar />
                <IncomeContainer />
            </div>
        )
    }
}

export default Home;