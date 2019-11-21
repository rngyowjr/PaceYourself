import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../../stylesheets/login.scss';
import Particles from 'react-particles-js';
import LoginParticle from '../../assets/login_particle_config';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/home");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  demo(e) {
    e.preventDefault();
    const user = { email: "tim@gmail.com", password: "timtimtim" };
    this.props.demologin(user);
  }

  render() {
    return (
      <div className="login-content-container">
        <div className="login-particle-container">
          <Particles
            params={LoginParticle}
          />
        </div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-header-container">
            <h1 className="login-header"> Welcome to Our App! </h1>
            <h1 className="login-header"> Please Log In to Continue </h1>
          </div>
          <div className="login-errors-container">
            <div className="rainbow-text">
              {this.props.errors.email}
            </div>
          </div>
            <input
              className="login-email-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          <div className="login-errors-container">
            {this.props.errors.password}
          </div>
            <input
              className="login-password-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input 
              className="login-submit"
              type="submit" 
              value="Log In" />
          <div className="alt-container">
            <Link to="/signup" className="session-alt-link"> Sign Up here.  </Link>
          </div>
          <div className="demo-container">
            <button className="demo-button" type="button" onClick={this.demo}>
              Demo Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
