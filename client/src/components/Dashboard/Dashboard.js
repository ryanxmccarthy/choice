import React from "react";
import "./dashboard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Dashboard extends React.Component{

  render() {
    return(
    	<div className="container-fluid" id="toggleDiv">
        <div className="row">
          <div id="bands">
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/bands/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Band Name</CardTitle>
                <CardText>Genre</CardText>
              </CardImgOverlay>
            </Card></a>
          </div>
        </div>

        <div className="row">
          <div className='map'>
            <img alt="" src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1-1200x630-e1479510841629.jpg" />
          </div>
        </div>
        
        <div className="row">
          <div id="eats">
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
            <a href="/eats/details"><Card inverse className="grid-item">
              <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
              <CardImgOverlay className="imgOverlay">
                <CardTitle>Restaurant</CardTitle>
                <CardText>Food Type</CardText>
              </CardImgOverlay>
            </Card></a>
          </div>
        </div>
      </div>
    );
  }
};