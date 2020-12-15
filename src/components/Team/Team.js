import React from "react";

import { teamData as TeamService } from "../../services/TeamService";
import Twitter from "../SocialMedia/Twitter";

import "./Team.scss";

export default function Team(props) {
  const { name, link, twitterLink } = props;
  console.log(twitterLink);

  return (
    <div className="team col-md-3 align-middle">
      <div className="row">
        <div className="col-10 name">
          <TeamService name={name} link={link} />
        </div>
        {twitterLink !== undefined ? (
          <div className="col-2">
            <Twitter twitterLink={twitterLink} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
