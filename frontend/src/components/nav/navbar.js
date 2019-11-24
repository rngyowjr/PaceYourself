import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/navbar.scss";

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar-div">
        {/* <img src="../public/money.jpg"></img>  */}
        <Link to="/home">Home</Link>
        <h1>Welcome {this.props.currentUser}</h1>
        <span className="dropdown">
          <img className="icon" src="https://img.icons8.com/color/64/000000/settings.png" alt="gear"/>
          <div className="dropdown-content">
            <ul className="options-list">
              <li>
                <Link to="/income">Monthly income list</Link>
              </li>
              <li>
                <Link to="/postincome">Monthly income</Link>
              </li>
              <li>
                <Link to="/postexpense">Monthly expense/s</Link>
              </li>
              <li>
              {/* <li>
                <Link to="/main">Main</Link>
              </li> */}
                <button onClick={this.props.logout}>Logout</button>
              </li>
            </ul>
          </div>
        </span>
      </div>
    );
  }
}

export default NavBar;
