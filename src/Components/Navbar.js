import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faCircleInfo, faBriefcase, faAddressBook, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './authSlice';
import MenuItems from "./MenuItems";
import LogoImage from '../assets/travel.jpg';
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      this.props.logout();
    }
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={LogoImage} alt="Trip Logo" />
        <h1 className="logo">Tripmania</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <FontAwesomeIcon
                  icon={
                    item.icon === "fa-solid fa-house-user"
                      ? faHouseUser
                      : item.icon === "fa-solid fa-circle-info"
                      ? faCircleInfo
                      : item.icon === "fa-solid fa-briefcase"
                      ? faBriefcase
                      : faAddressBook
                  }
                />
                {item.title}
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <button onClick={this.handleLogout} className="nav-links logout-button">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/signup" className="nav-links signup-button">
                Signup/Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
