import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  // logoutUser(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

  // Selectively render links dependent on whether the user is logged in
  // getLinks() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div>
  //         {/* <Link to={"/tweets"}>All Tweets</Link>
  //         <Link to={"/profile"}>Profile</Link>
  //         <Link to={"/new_tweet"}>Write a Tweet</Link> */}
          
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to={"/signup"}>Signup</Link>
  //         <Link to={"/login"}>Login</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <h1>I'm a navbar</h1>
        <button onClick={this.props.logout}>Logout</button>
        <a href="">
          <img src="https://img.icons8.com/color/64/000000/settings.png"></img>
        </a>
      </div>
    );
  }
}

export default NavBar;
