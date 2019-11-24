import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../stylesheets/signup.scss'
import FooterComponent from '../footer/footer';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
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
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-background-container"></div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="signup-header-container">
            <h1 className="signup-header"> Ready to Start Saving! </h1>
            <h1 className="signup-header"> Please Fillout This Form </h1>
          </div>
          <div className="signup-errors-container">
            {this.props.errors.email}
          </div>
          <input
            className="signup-input"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <br />
          <div className="signup-errors-container">
            {this.props.errors.fname}
          </div>
          <input
            className="signup-input"
            type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            placeholder="First name"
          />
          <br />
          <div className="signup-errors-container">
            {this.props.errors.lname}
          </div>
          <input
            className="signup-input"
            type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            placeholder="Last name"
          />
          <br />
          <div className="signup-errors-container">
            {this.props.errors.password}
          </div>
          <input
            className="signup-input"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <br />
          <div className="signup-errors-container">
            {this.props.errors.password2}
          </div>
          <input
            className="signup-input"
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input 
            className="signup-submit"
            type="submit" 
            value="Submit" 
          />
          <div className="login-pillow"></div>
          <div className="signup-alt-container">
            Already a member?
            <Link 
              to="/" 
              className="signup-alt-link"
              onClick={this.props.clearErrors}
            > Log In Here  </Link>
          </div>
        </form>
      <FooterComponent />
      </div>
    );
  }
}

export default withRouter(SignupForm);
