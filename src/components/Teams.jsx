import React from "react";
import { teams } from "../constant/team";

const Teams = () => {
  return (
    <div className="container">
      <div className="teams">
        {teams.map((team) => {
          return (
            <div className="team">
              <div>
                <img src={team.img} />
              </div>
              <span>{team.name}</span>
              <p>{team.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
