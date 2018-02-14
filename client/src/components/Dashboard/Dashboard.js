import React from "react";
import "./dashboard.css";
import { Card, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import Moment from "react-moment";

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
                <a href="#" 
                   key={event.id}>
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

        <div className="row">
          <div className='map'>
            <img alt="" src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1-1200x630-e1479510841629.jpg" />
          </div>
        </div>
        
        <div className="row">
          <div id="eats">
            <a href="#">  
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