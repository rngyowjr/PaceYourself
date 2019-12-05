import { connect } from 'react-redux';
import Front from './front';

const mstp = state => {

    return {
        currentUser: state.entities.users,
        
    }
}