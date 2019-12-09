import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.dropFunction = this.dropFunction.bind(this);
  }

  dropFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
  }

  render() {
    return (
      <div className="navbar">
        {/* <img src="../public/money.jpg"></img>  */}
        <div className="nav-content-container">
          {/* <Link to="/home" className="nav-home-link">Home</Link> */}
          <h1 className="nav-header">Welcome {this.props.currentUser}!</h1>
          <span className="nav-dropdown-button" onClick={this.dropFunction}>
            <img 
              className="nav-icon" 
              src="https://img.icons8.com/color/64/000000/settings.png" 
              alt="gear"
            />
          </span>
            <div id="dropdown-menu" className="dropdown-menu">
              <ul className="options-list">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/income">Monthly income list</Link>
                </li>
                <li>
                  <Link to="/expense">Monthly expense list</Link>
                </li>
                <li className="logout-button" >
                  <button onClick={this.props.logout} >Logout</button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
