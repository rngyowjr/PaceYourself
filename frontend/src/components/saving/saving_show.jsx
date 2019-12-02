import React from 'react';


class SavingShow extends React {

    componentDidMount() {
        this.props.savingAnnually({year: 2019})
    }
};

export default SavingShow;