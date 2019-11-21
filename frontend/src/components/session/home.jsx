import React from 'react';
import Navbar from '../nav/navbar_container';
import IncomeContainer from '../income/income_container';

class Home extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    componentDidMount() {
        this.props.fetchAllIncome();
    }

    render() {
        return(
            <div>
                <Navbar />
                <IncomeContainer />
            </div>
        )
    }
}

export default Home;