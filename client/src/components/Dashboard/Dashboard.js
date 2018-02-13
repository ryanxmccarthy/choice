import React from "react";
import "./dashboard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Moment from 'react-moment';

export default class Dashboard extends React.Component {
  state = {
    search: '',
    events: [],
  }

  render() {
    return(
      <div>
        <div className="container-fluid" id="toggleDiv">
          <div className="row">
            <div id="bands">
              <div id='results'>
                { this.props.state.events.map(event => (
                  <a href="#" key={event.id}>
                    <Card className="grid-item">
                      <CardTitle>{event.venue.name}</CardTitle>
                      <CardText>{event.venue.city}</CardText>
                      <CardText><Moment parse="YYYY-MM-DD HH:mm">{event.datetime}</Moment></CardText>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div id="map">
              <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" alt=" " />
            </div>
          </div>
          
          <div className="row">
            <div id="eats">
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};