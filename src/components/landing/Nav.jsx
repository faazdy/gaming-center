import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.scss";

const socialMedia = [
  {
    id: 1,
    user: "GG Nexus",
    icon: "facebook",
  },
  {
    id: 2,
    user: "gg.nexus",
    icon: "instagram",
  },
  {
    id: 3,
    user: "ggnexus7",
    icon: "twitter-x",
  },
];
const optionsNav = [
  {
    id: 1,
    option: "About Us",
    route: "#about-section",
    isPage: false
  },
  {
    id: 2,
    option: "Services",
    route: "#services-section",
    isPage: false
  },
  {
    id: 3,
    option: "Reviews",
    route: "/reviews",
    isPage: true
  },
];
function Nav() {
  const location = useLocation();
  const isReview = location.pathname === '/reviews';
  return (
    <header>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          {isReview ? (<Link className="navbar-brand" to="/">
            <img src="./icons/logo.png" alt="" />
            GG Nexus
          </Link>) : (<a className="navbar-brand" href="#">
            <img src="./icons/logo.png" alt="" />
            GG Nexus
          </a>)}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {isReview ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/reviews">
                    Reviews
                  </Link>
                </li>
              ) : (
                optionsNav.map((option) => (
                  <li className="nav-item" key={option.id}>
                    {option.isPage ? (
                      <Link className="nav-link" to={option.route}>
                        {option.option}
                      </Link>
                    ) : (
                      <a className="nav-link" href={option.route}>
                        {option.option}
                      </a>
                    )}
                  </li>
                ))
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Media
                </a>
                <ul className="dropdown-menu">
                  {socialMedia.map((social) => (
                    <li key={social.id}>
                      <a className="dropdown-item" href="#">
                        <i className={`bi bi-${social.icon}`}></i>
                        {social.user}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
