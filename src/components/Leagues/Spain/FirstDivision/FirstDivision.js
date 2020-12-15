import React from "react";

import Team from "../../../Team";

import "./FirstDivision.scss";

export default function FirstDivision() {
  return (
    <div className="container content">
      <a href="https://www.sofascore.com/tournament/football/spain/laliga/8" target="_blank" rel="noopener noreferrer">
        <h2 className="league-title" id="spain-first-division">Primera División</h2>
      </a>

      <div className="row row-teams">
        <Team
          name={"Alavés"}
          link={"https://www.sofascore.com/team/football/deportivo-alaves/2885"}
        />
        <Team
          name={"Athletic Bilbao"}
          link={"https://www.sofascore.com/team/football/athletic-bilbao/2825"}
        />
        <Team
          name={"Atlético de Madrid"}
          link={"https://www.sofascore.com/team/football/atletico-madrid/2836"}
        />
        <Team
          name={"Barcelona"}
          link={"https://www.sofascore.com/team/football/barcelona/2817"}
        />
        <Team
          name={"Cádiz"}
          link={"https://www.sofascore.com/team/football/cadiz/4488"}
        />
        <Team
          name={"Celta Vigo"}
          link={"https://www.sofascore.com/team/football/celta-vigo/2821"}
        />
          <Team
            name={"Eibar"}
            link={"https://www.sofascore.com/team/football/eibar/2839"}
          />
        <Team
          name={"Elche"}
          link={"https://www.sofascore.com/team/football/elche-cf/2846"}
        />
        <Team
          name={"Getafe"}
          link={"https://www.sofascore.com/team/football/getafe/2859"}
        />
        <Team
          name={"Granada"}
          link={"https://www.sofascore.com/team/football/granada/33779"}
        />
        <Team
          name={"Huesca"}
          link={"https://www.sofascore.com/team/football/huesca/24265"}
        />
        <Team
          name={"Levante"}
          link={"https://www.sofascore.com/team/football/levante/2849"}
        />
        <Team
          name={"Osasuna"}
          link={"https://www.sofascore.com/team/football/osasuna/2820"}
        />
        <Team
          name={"Real Betis"}
          link={"https://www.sofascore.com/team/football/real-betis/2816"}
        />
        <Team
          name={"Real Madrid"}
          link={"https://www.sofascore.com/team/football/real-madrid/2829"}
        />
        <Team
          name={"Real Sociedad"}
          link={"https://www.sofascore.com/team/football/real-sociedad/2824"}
        />
        <Team
          name={"Real Valladolid"}
          link={"https://www.sofascore.com/team/football/real-valladolid/2831"}
        />
        <Team
          name={"Sevilla"}
          link={"https://www.sofascore.com/team/football/sevilla/2833"}
        />
        <Team
          name={"Valencia"}
          link={"https://www.sofascore.com/team/football/valencia/2828"}
        />
        <Team
          name={"Villarreal"}
          link={"https://www.sofascore.com/team/football/villarreal/2819"}
        />
      </div>
    </div>
  );
}
