import React from "react";
import { teams } from "../constant/team";

const About = () => {
  return (
    <div className="container">
      <section className="about-us">
        <div className="building"></div>
        <h2>HISTORY</h2>
        <p>History 1: Lorem Ipsum</p>
        <h2>OUR CULTURE</h2>
        <p>Values</p>
      </section>
      <section className="section-teams">
        <div className="container">
          <h2>OUR TEAM MEMBERS</h2>
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
      </section>
    </div>
  );
};

export default About;
