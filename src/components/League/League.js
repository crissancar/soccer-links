import React from "react";

// import { leagueData as LeagueService } from "../../services/LeagueService";
import Spain from "../../assets/img/png/spain.png";
import './League.scss';


export default function League(props) {
  // const { name, link } = props;
  return (
    <div className="container container-league">

    <div className="row">
    <div className="col-12 league">
      <img className="img-fluid" src={Spain} alt="España" />
      <h1>España</h1>
    </div>
      </div>
  </div>
  );
}
