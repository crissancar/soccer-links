import React from "react";

// import {Team} from '../../services/TeamService';
// import Team from '../Team';

import SpainFirstDivision from "../Leagues/Spain/FirstDivision";
import SpainSecondDivision from "../Leagues/Spain/SecondDivision";
import SpainSecondDivisionB from "../Leagues/Spain/SecondDivisionB";
import SpainThirdDivision from "../Leagues/Spain/ThirdDivision";
import ScrollUp from "react-scroll-up";
import spainImg from "../../assets/img/png/spain.png";
import upArrow from "../../assets/img/png/arrowup.png";

import "./Body.scss";
import Country from "../Country";

export default function Body() {
  return (
    <div className="main-content">
      {/* ESPAÑA */}
      <Country name={"España"} image={spainImg} />
      <hr />
      <SpainFirstDivision />
      <hr />
      <SpainSecondDivision />
      <hr />
      <SpainSecondDivisionB/>
      <hr />
      <SpainThirdDivision />

      <ScrollUp showUnder={250}>
        <div className="scroll-up">
          <span>Ir arriba</span>
          <img src={upArrow} />
        </div>
      </ScrollUp>
    </div>
  );
}
