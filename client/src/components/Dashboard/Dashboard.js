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
                  <a href={event.url} 
                     target="_blank"                    
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
     
        <div className="row">
          <div id="picture">
          </div>
        </div>

        <hr />
        <hr />
        
        <div className="row">
          <div id="eats">
          </div>
        </div>
      </div>
    );
  }
};