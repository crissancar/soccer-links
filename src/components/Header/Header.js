import React from "react";
import Menu from "../Menu";

import "./Header.scss";

export default function Header() {

  return (

    <div className="main-banner" id="main-example">
      <div className="container-fluid main-banner__text">
        <div className="row" id="accordion">
          <div className="col-lg-3 league" id="headingOne">
            <div
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <a href="#">Alemania</a>
            </div>
            <div
              className="collapse"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <a className="sublink" href="#">Primera</a>
              <br />
              <a className="sublink" href="#">Segunda</a>
              <br />
              <a className="sublink" href="#">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingTwo">
            <div
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <a href="#headingTwo">España</a>
            </div>
            <div
              className="collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <a href="#spain-first-division">Primera</a>
              <br />
              <a href="#spain-second-division">Segunda</a>
              <br />
              <a href="#spain-third-division">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingThree">
            <div
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <a href="#">Inglaterra</a>
            </div>
            <div
              className="collapse"
              id="collapseThree"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <a href="#">Primera</a>
              <br />
              <a href="#">Segunda</a>
              <br />
              <a href="#">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingFour">
            <div
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <a href="#">Francia</a>
            </div>
            <div
              className="collapse"
              id="collapseFour"
              aria-labelledby="headingFour"
              data-parent="#accordion"
            >
              <a href="#">Primera</a>
              <br />
              <a href="#">Segunda</a>
              <br />
              <a href="#">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingFive">
            <div
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              <a href="#">Bélgica</a>
            </div>
            <div
              className="collapse"
              id="collapseFive"
              aria-labelledby="headingFive"
              data-parent="#accordion"
            >
              <a href="#">Primera</a>
              <br />
              <a href="#">Segunda</a>
              <br />
              <a href="#">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingSix">
            <div
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              <a href="#">Holanda</a>
            </div>
            <div
              className="collapse"
              id="collapseSix"
              aria-labelledby="headingSix"
              data-parent="#accordion"
            >
              <a href="#">Primera</a>
              <br />
              <a href="#">Segunda</a>
              <br />
              <a href="#">Tercera</a>
            </div>
          </div>

          <div className="col-lg-3 league" id="headingSeven">
            <div
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              <a href="#">Holanda</a>
            </div>
            <div
              className="collapse"
              id="collapseSeven"
              aria-labelledby="headingSeven"
              data-parent="#accordion"
            >
              <a href="#">Primera</a>
              <br />
              <a href="#">Segunda</a>
              <br />
              <a href="#">Tercera</a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
