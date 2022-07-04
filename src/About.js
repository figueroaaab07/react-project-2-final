import React from "react";

function About() {
  const sojourner = require('./images/sojourner.png'); // with require
  const spirit_opportunity = require('./images/spirit-opportunity.png'); // with require
  const curiosity = require('./images/curiosity.png'); // with require
  const perseverance = require('./images/perseverance.png'); // with require
  const cameras = require('./images/rover-cameras.png')
  return (
    <>
      <h2>Rover Cameras</h2>
        <img id="rover-cameras" alt="Rover Cameras" src={cameras} width="75%"/> 
      <h2>Rover Misions</h2>
      <div className="row">
        <div className="column">
          <img id="sojourner" alt="Mars Rover" src={sojourner} width="100%"/> 
        </div>
        <div className="column">
          <img id="spirit-opportunity" alt="Mars Rover" src={spirit_opportunity} width="100%"/> 
        </div>
        <div className="column">
          <img id="curiosity" alt="Mars Rover" src={curiosity} width="100%"/> 
        </div>
        <div className="column">
          <img id="perseverance" alt="Mars Rover" src={perseverance} width="100%"/> 
        </div>
      </div>
    </>
  );
}

export default About;
