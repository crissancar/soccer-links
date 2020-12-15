import React from 'react'

// import { leagueData as LeagueService } from "../../services/LeagueService";
// import Spain from "../../assets/img/png/spain.png";
import './Country.scss';


export default function Country(props) {
  const { name, image } = props;
  console.log(props);
  return (
    <div className="container container-country">
    <div className="row">
    <div className="col-12 country">
      <img className="img-fluid" src={image} alt="España" />
      <h1>{name}</h1>
    </div>
      </div>
  </div>
  );
}
