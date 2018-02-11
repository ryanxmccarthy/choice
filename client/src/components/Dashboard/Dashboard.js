import React from "react";
import "./dashboard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Dashboard extends React.Component{

  render() {
    return(
    	<div className="container-fluid" id="toggleDiv">
        <div className="row">
          <div id="bands">
            <a href="#"><Card inverse className="grid-item" className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
          </div>
        </div>

        <div className="row">
          <div id="maps">
            <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" />
          </div>
        </div>
        
        <div className="row">
          <div id="eats">
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Name</CardTitle>
                <CardText>Content</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="#"><Card inverse className="grid-item">
              <CardImg width="100%" src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><h3>Name</h3></CardTitle>
                <CardText><p>Content</p></CardText>
              </CardImgOverlay>
            </Card></a>
          </div>
        </div>
      </div>
    );
  }
};