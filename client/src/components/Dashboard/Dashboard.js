import React from "react";
import "./dashboard.css";

const expand = false;

export const Dashboard = () => {

  const toggle = () => {
    let expand = !expand;
    document.getElementById('toggleDiv').classList.toggle('expand');
  };

  return(
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
          <button className="toggle" onClick={this.toggle()}>Expand</button>
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
    </div>
  );
};