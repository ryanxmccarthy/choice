import React from "react";

const Dashboard = () => (
	<div className="container-fluid" id="toggleDiv">
    <div className="row">
      <div id="bands">
        <a href="#"><div className="grid-item"></div></a>
        <a href="#"><div className="grid-item"></div></a>
        <a href="#"><div className="grid-item"></div></a>
        <a href="#"><div className="grid-item"></div></a>
        <a href="#"><div className="grid-item"></div></a>
        <a href="#"><div className="grid-item"></div></a>
      </div>

      <div id="maps">
        <button className="toggle" onclick="toggle()">Expand</button>
      </div>
    </div>
    
    <div className="row" id="eats">
      <a href="#"><div className="grid-item"></div></a>
      <a href="#"><div className="grid-item"></div></a>
      <a href="#"><div className="grid-item"></div></a>
      <a href="#"><div className="grid-item"></div></a>
      <a href="#"><div className="grid-item"></div></a>
      <a href="#"><div className="grid-item"></div></a>
    </div>
  </div>;
);

export defaults Dashboard;