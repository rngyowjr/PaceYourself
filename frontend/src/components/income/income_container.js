import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    userFname: state.session.user.fname,
    income :{
        month: "",
        year: "",
        income: ""
    }
})

const mapDispatchToProps = dispatch => {
    
}
