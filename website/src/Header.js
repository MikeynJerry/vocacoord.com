import React, { Component } from "react";
import logo from "./assets/VCLogo.png";
import { Button } from "reactstrap";
import "./VocaCoord.css";
import { Link } from "react-router-dom";
import { logOutUser } from "./actions/index.js";
import { connect } from "react-redux";

const logoStyle = {
  color: "white"
};

class Header extends Component {
  handleLogOut() {
    this.props.dispatch(logOutUser());
  }

  render() {
    return (
      <div className="App-header">
        <Link to="/" style={logoStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-logo-text">ocaCoord</h1>
        </Link>
        {this.props.authenticated ? (
          <div className="App-header-info">
            <Link to="/classrooms">
              <Button color="primary">Your Classes</Button>
            </Link>{" "}
            <Button color="primary" outline onClick={() => this.handleLogOut()}>
              Log Out
            </Button>
          </div>
        ) : (
          <div className="App-login-buttons">
            <Link to="/login">
              <Button color="primary">Log In</Button>
            </Link>{" "}
            <Link to="/signup">
              <Button color="primary" outline>
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Header);
