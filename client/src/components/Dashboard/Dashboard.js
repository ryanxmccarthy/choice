import React from "react";
import "./dashboard.css";
import { Card, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import Moment from "react-moment";

export default class Dashboard extends React.Component {
  state = {
    search: '',
    events: [],
    restaurants: [],
  }

  render() {
    return(
        <div className="container-fluid">
          <div className="row">
            <div id="bands">
              <div id='results'>
                { this.props.state.events.map(event => (
                  <a href='javascript:;'
                     key={event.id}
                     onClick={this.props.eat}>
                    <Card className="grid-item">
                      <CardTitle>{event.lineup[0]}</CardTitle>
                      <CardSubtitle><Moment format="DD/MM/YY HH:mm">{event.datetime}</Moment></CardSubtitle>
                      <CardText>{event.venue.name} | {event.venue.city}</CardText>
                    </Card>
                  </a>
                  ))}
              </div>
            </div>
          </div>
        }
      
        <div className="row">
          <div id="map">
            <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" alt=" " />
          </div>
        </div>
        
        <div className="row">
          <div id="eats">
            <a href="eats">  
              <Card className="grid-item">
                <CardTitle>Restaurant</CardTitle>
                <CardSubtitle>Address</CardSubtitle>
                <CardText>Food Type | Rating/10 </CardText>
              </Card>
            </a>
          </div>
        </div>
      </div>
    );
  }
};