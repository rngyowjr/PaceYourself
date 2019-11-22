import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../stylesheets/signup.scss'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push("/login");
  //   }

  //   this.setState({ errors: nextProps.errors });
  // }

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
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.props.errors.email}
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <br />
          {this.props.errors.fname}
          <input
            type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            placeholder="First name"
          />
          <br />
          {this.props.errors.lname}
          <input
            type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            placeholder="Last name"
          />
          <br />
          {this.props.errors.password}
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <br />
          {this.props.errors.password2}
          <input
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Submit" />
          <div className="login-alt-container">
            Already a member!
            <Link to="/" className="signup-alt-link"> Log In Here  </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
