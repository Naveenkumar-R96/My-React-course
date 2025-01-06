import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="#" className="navbar-brand">
          <i className="bi bi-camera-reels"></i> Movie App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/top" className="nav-link">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie/upcoming" className="nav-link">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form action="">
            <input
              type="search"
              className="form-control"
              name="search"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
