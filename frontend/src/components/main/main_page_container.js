import { connect } from 'react-redux';
import Main from './main_page';

const mapStateToProps = (state, ownProps) => ({
  // total monthly expenses and income
})

const mapDispatchToProps = dispatch => {
  return {
    // edit monthly expenses and/or income? (patch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)