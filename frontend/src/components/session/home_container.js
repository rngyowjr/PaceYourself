import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
// import { fetchAllIncome, totalAnnualIncome } from '../../actions/income_actions';
import Home from "./home";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // fetchAllIncome: () => dispatch(fetchAllIncome())
  // totalAnnualIncome: (year) => dispatch(totalAnnualIncome(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
