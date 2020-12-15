import React from "react";
import Header from "../Header";
import logoWeb from "../../assets/img/png/monkey2.png";
// import SearchField from "react-search-field";

import "./Menu.scss";

export default function Menu() {

  return (
    <div className="menu-container container-fluid" id="menuu">
      <div className="row">
        <div className="col-12">
          <div className="container pl-0 pr-0">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="#">
                Linkmonazos
              </a>

              <a className="navbar-brand logo">
                <img src={logoWeb} alt="Putos monos con links" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse pl-0 pr-0"
                id="navbarNav"
              >
                <Header />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
