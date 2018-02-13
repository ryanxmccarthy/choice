import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";

export default class Bands extends React.Component {
  render() {
    return (
      <section>
        <Navi />
        <Modal />
        <div className="container-fluid">
          <div className="row list">
            <div className="col">
              <div className="card-columns">
                <div className="card">
                  <img className="card-img-top" alt="" src="https://cdn.baeblemusic.com/images/bblog/1-16-2017/allstarsmashmouthblog-580.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Smash Mouth</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>                    
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" alt="" src="https://image.redbull.com/rbcom/010/2015-09-03/1331745288284_2/0010/1/1600/1067/1/grimes.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Grimes</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>                  
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" alt="" src="https://cdn3.whatculture.com/images/2015/03/peter-dinklage-bolivar-trask-600x400.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Peter Dinklage</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>                    
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" alt="" src="https://cdn.baeblemusic.com/images/bblog/1-16-2017/allstarsmashmouthblog-580.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Smash Mouth</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>                    
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" alt="" src="https://image.redbull.com/rbcom/010/2015-09-03/1331745288284_2/0010/1/1600/1067/1/grimes.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Grimes</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>                  
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" alt="" src="https://cdn3.whatculture.com/images/2015/03/peter-dinklage-bolivar-trask-600x400.jpg" />
                  <div className="card-body">
                    <a href="/bands/details"><h5 className="card-title" id="artistName">Peter Dinklage</h5></a>
                    <p className="card-text" id="smolBio">Bio</p>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}