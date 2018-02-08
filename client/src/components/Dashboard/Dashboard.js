import React from "react";
import './dashboard.css'

const Dashboard = () => (
	<div className="container-fluid" id="toggleDiv">
    <div className="row">
      <div id="bands">
        <a href="blank"><div className="grid-item"></div></a>
        <a href="blank"><div className="grid-item"></div></a>
        <a href="blank"><div className="grid-item"></div></a>
        <a href="blank"><div className="grid-item"></div></a>
        <a href="blank"><div className="grid-item"></div></a>
        <a href="blank"><div className="grid-item"></div></a>
      </div>

      <div id="maps">
        <button className="toggle">Expand</button>
      </div>
    </div>
    
    <div className="row" id="eats">
      <a href="blank"><div className="grid-item"></div></a>
      <a href="blank"><div className="grid-item"></div></a>
      <a href="blank"><div className="grid-item"></div></a>
      <a href="blank"><div className="grid-item"></div></a>
      <a href="blank"><div className="grid-item"></div></a>
      <a href="blank"><div className="grid-item"></div></a>
    </div>
  </div>
);

export default Dashboard;