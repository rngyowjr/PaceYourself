import React from "react";
import { withRouter } from "react-router-dom";
import '../../stylesheets/login.scss';
import Particles from 'react-particles-js';

const particle = {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom-left",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 8917.368350444682,
        "rotateY": 9075.197878771136
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

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
        <div className="login-particle-container">
          <Particles
            params={particle}
          />
        </div>
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
    );
  }
}

export default withRouter(LoginForm);
