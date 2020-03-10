import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../images/logo-circle.svg";

const Header = ({ siteTitle }) => {
  const [collapsed, setCollapse] = useState(true);
  return (
    <>
      <section className="py-3 d-none d-sm-block"></section>
      <nav className="navbar navbar-expand-sm navbar-light sticky-top bg-white px-md-5 py-sm-0">
        <Link
          to="/"
          className="navbar-brand d-flex flex-row align-items-center ml-lg-5"
        >
          <img src={logo} className="img-fluid pr-1 pl-sm-3" alt="MDS" />
          <p className="font-weight-semibold my-auto mx-1">Blog</p>
        </Link>

        <button
          className={`navbar-toggler border-0${collapsed ? " collapsed" : ""}`}
          type="button"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={evt => setCollapse(!collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse py-sm-3 pr-sm-1 mr-lg-5${
            !collapsed ? " show" : ""
          }`}
          id="navbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/tips/">
                Tips and Tricks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn/">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/">
                News & Updates
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
