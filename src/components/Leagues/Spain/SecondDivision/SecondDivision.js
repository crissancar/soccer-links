import React from "react";

import Team from "../../../Team";

import "./SecondDivision.scss";

export default function SecondDivision() {
  return (
    // <div className="container content" data-spy="scroll" data-target="#main-example" data-offset="0">
    <div className="container content">
      <a 
        href="https://www.sofascore.com/tournament/football/spain/laliga-2/54"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="league-title" id="spain-second-division">Segunda División</h2>
      </a>

      <div className="row row-teams">
        <Team
          name={"Albacete"}
          link={
            "https://www.sofascore.com/team/football/albacete-balompie/2848"
          }
        />
        <Team
          name={"Alcorcón"}
          link={"https://www.sofascore.com/team/football/alcorcon/24322"}
        />
        <Team
          name={"Almería"}
          link={"https://www.sofascore.com/team/football/almeria/2858"}
        />
        <Team
          name={"Cartagena"}
          link={"https://www.sofascore.com/team/football/fc-cartagena/24329"}
        />
        <Team
          name={"Castellón"}
          link={"https://www.sofascore.com/team/football/cd-castellon/5067"}
        />
        <Team
          name={"Espanyol"}
          link={"https://www.sofascore.com/team/football/espanyol/2814"}
        />
        <Team
          name={"Fuenlabrada"}
          link={"https://www.sofascore.com/team/football/cf-fuenlabrada/35097"}
        />
        <Team
          name={"Girona"}
          link={"https://www.sofascore.com/team/football/girona/24264"}
        />
        <Team
          name={"Las Palmas"}
          link={"https://www.sofascore.com/team/football/las-palmas/6577"}
        />
        <Team
          name={"Leganés"}
          link={"https://www.sofascore.com/team/football/leganes/2845"}
        />
        <Team
          name={"Logroñés"}
          link={"https://www.sofascore.com/team/football/ud-logrones/37057"}
        />
        <Team
          name={"Lugo"}
          link={"https://www.sofascore.com/team/football/cd-lugo/24332"}
        />
        <Team
          name={"Málaga"}
          link={"https://www.sofascore.com/team/football/malaga/2830"}
        />
        <Team
          name={"Mallorca"}
          link={"https://www.sofascore.com/team/football/rcd-mallorca/2826"}
        />
        <Team
          name={"Mirandés"}
          link={"https://www.sofascore.com/team/football/mirandes/35092"}
        />
        <Team
          name={"Ponferradina"}
          link={"https://www.sofascore.com/team/football/sd-ponferradina/6195"}
        />
        <Team
          name={"Rayo Vallecano"}
          link={"https://www.sofascore.com/team/football/rayo-vallecano/2818"}
        />
        <Team
          name={"Real Oviedo"}
          link={"https://www.sofascore.com/team/football/real-oviedo/2851"}
        />
        <Team
          name={"Real Zaragoza"}
          link={"https://www.sofascore.com/team/football/real-zaragoza/2815"}
        />
        <Team
          name={"Sabadell"}
          link={"https://www.sofascore.com/team/football/ce-sabadell/24335"}
        />
        <Team
          name={"Sporting Gijón"}
          link={"https://www.sofascore.com/team/football/sporting-gijon/2852"}
        />
        <Team
          name={"Tenerife"}
          link={"https://www.sofascore.com/team/football/tenerife/2822"}
        />
      </div>
    </div>
  );
}
