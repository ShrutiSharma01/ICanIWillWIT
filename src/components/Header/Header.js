import React from "react";
import logo from "../../images/logos/logo.PNG";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: " #321818 ", paddingLeft: "5px" }}
      >
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
            style={{ marginRight: "10px", marginLeft: "20px", width: "50px" }}
          />
          {/* <span style={{ fontWeight: "bold", color: "#914121" }}>
            Women In Technology
          </span> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginRight: "5px" }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse my-2 my-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <span className="fas fa-home" style={{ color: "white" }}>
                  &nbsp;
                </span>
                <span style={{ fontWeight: "bold", color: "#914121" }}>
                  Home
                </span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                color="black"
              >
                <span
                  className="fa fa-graduation-cap"
                  style={{ color: "white" }}
                >
                  &nbsp;
                </span>
                <span style={{ fontWeight: "bold", color: "#914121" }}>
                  Resources
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/organisation">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Organisation
                  </span>
                </a>
                <a className="dropdown-item" href="/scholarship">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Scholarships
                  </span>
                </a>
                {/* <a className="dropdown-item" href="/infographics">
                  Infographics
                </a> */}
                <a className="dropdown-item" href="/resources">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Study Resources
                  </span>
                </a>
                <a className="dropdown-item" href="/events">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Events Programs
                  </span>
                </a>
                <a className="dropdown-item" href="/interview">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Interview Experience
                  </span>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="fa fa-users" style={{ color: "white" }}>
                  &nbsp;
                </span>
                <span style={{ fontWeight: "bold", color: "#914121" }}>
                  Community
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/community">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    About Community
                  </span>
                </a>
                <a className="dropdown-item" href="/inspirations">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Inspirations
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  href="https://instagram.com/women__in__tech?igshid=MzMyNGUyNmU2YQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Join Instagram
                  </span>
                </a>
                {/* <a className="dropdown-item" href="/contributors">
                  Contributers
                </a>
                <a className="dropdown-item" href="/founder">
                  Founder
                </a> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className=" fa fa-cogs" style={{ color: "white" }}>
                  &nbsp;{" "}
                </span>
                <span style={{ fontWeight: "bold", color: "#914121" }}>
                  Contribute
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/contributing">
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Guidelines
                  </span>
                </a>
                <a
                  className="dropdown-item"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/ShrutiSharma01/ICanIWillWIT"
                >
                  <span style={{ fontWeight: "bold", color: "#914121" }}>
                    Github Repo
                  </span>
                </a>
              </div>
            </li>
            {/*  <DarkMode/>   */}
            {/* Some dummy code below to create space around Contribute Dropdown */}
            {/* <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li> */}
            {/* Dummy code ends */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
