import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAllIncome } from '../../actions/income_actions';
import Home from "./home";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllIncome: () => dispatch(fetchAllIncome())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
