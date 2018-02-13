import React from "react";
import "./dashboard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Dashboard extends React.Component {
  state = {
    search: '',
    events: [],
  }

  render() {
    return(
    	<div className="container-fluid" id="toggleDiv">
        <div className="row">
          <div id="bands">
            <div id='results'>
              { this.props.state.events.map(event => (
                  <a href="/bands" key={event.id}>
                    <Card inverse className="grid-item" >
                      <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                      <CardImgOverlay className="imgOverlay">
                        <CardTitle>{event.id}</CardTitle>
                        <CardText>{event.venue.city}</CardText>
                      </CardImgOverlay>
                    </Card>
                  </a>
                ))}
            </div>
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
          </div>
        </div>
      </div>
    );
  }
};