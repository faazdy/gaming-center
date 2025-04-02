import React from "react";
import "../../styles/navbar.scss";

const socialMedia = [
  {
    id: 1,
    user: "GamingCenter",
    icon: "facebook",
  },
  {
    id: 2,
    user: "gaming-center",
    icon: "instagram",
  },
  {
    id: 3,
    user: "gamingcenter1",
    icon: "twitter-x",
  },
];
const optionsNav = [
  {
    id: 1,
    option: "About Us",
    route: "#about-section",
  },
  {
    id: 2,
    option: "Services",
    route: "#services-section",
  },
];
function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./icons/logo.png" alt="" />
            Gaming Center
          </a>
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
              {optionsNav.map((option) => {
                return (
                  <li className="nav-item" key={option.id}>
                    <a className="nav-link" href={option.route}>
                      {option.option}
                    </a>
                  </li>
                );
              })}
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
                  {socialMedia.map((social) => {
                    return (
                      <li key={social.id}>
                        <a className="dropdown-item" href="#">
                          <i className={`bi bi-${social.icon}`}></i>
                          {social.user}
                        </a>
                      </li>
                    );
                  })}
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
