import { connect } from 'react-redux';
import { savingAnnually } from '../../actions/saving_actions';
import SavingShow from './saving_show';

const mstp = state => {
    return {
      totalSavingAnnual: state.entites.savings.annual,
      currentUser: state.entities.users[state.session.user]
    };
};

const mdtp = dispatch => {
    savingAnnually: data => dispatch(savingAnnually(data))
};
