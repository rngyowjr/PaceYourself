import React from "react";
import { withRouter } from "react-router-dom";
import '../../stylesheets/login.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="login-content-container">
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h1 className="login-header"> Welcome to Our App! </h1>
            <h1 className="login-header"> Please Log In to Continue </h1>
              <input
                className="login-email-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
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
              {this.renderErrors()}
            <div className="demo-container">
              <button className="demo-button" type="button" onClick={this.demo}>
                Demo Login
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
