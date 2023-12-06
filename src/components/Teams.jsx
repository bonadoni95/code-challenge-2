import React from "react";
import { teams } from "../constant/team";

const Teams = () => {
  return (
    <div className="container">
      <h2>OUR TEAM MEMBERS</h2>
      <h3>
        We believe our customers deserve to interact with the best people, so we
        hire the nicest, most professional people in the whole industry.
      </h3>
      <div className="teams">
        {teams.map((team, teamid) => {
          return (
            <div key={`team-${teamid}`} className="team">
              <div>
                <img src={team.img} />
              </div>
              <span>{team.name}</span>
              <p>{team.position}</p>
              <p>{team.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
