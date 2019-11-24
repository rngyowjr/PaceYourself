import React from 'react';
import Navbar from '../nav/navbar_container';
import MainContainer from '../main/main_page_container';

class Home extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        return(
            <div>
                <Navbar />
                <MainContainer />
            </div>
        )
    }
}

export default Home;