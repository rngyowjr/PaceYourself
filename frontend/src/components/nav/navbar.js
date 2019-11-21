import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/navbar.scss";

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="navbar-div">
        {/* <img src="../public/money.jpg"></img>  */}
        <h1>Welcome {this.props.currentUser}</h1>
        <span className="dropdown">
          <img className="icon" src="https://img.icons8.com/color/64/000000/settings.png" alt="gear"/>
          <div className="dropdown-content">
            <ul className="options-list">
              <li>
                <Link>Monthly income</Link>
              </li>
              <li>
                <Link>Monthly expenses</Link>
              </li>
              <li>
                <Link>Annual income</Link>
              </li>
              <li>
                <Link>Annual expenses</Link>
              </li>
              <li>
                <Link onClick={this.props.logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </span>
      </div>
    );
  }
}

export default NavBar;
