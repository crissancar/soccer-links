import React from "react";
import Header from "../Header";

export default function Menu() {
  return (
      // <div className="container-fluid"></div>
    <div className="container pl-0 pr-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Linkmonazos
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Alemania
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                España
              </a>
            </li> */}
            <Header />
          </ul>
          
        </div>
        
      </nav>
    </div>
  );
}
