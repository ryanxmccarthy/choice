import React from "react";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Dashboard from '../../components/Dashboard';
import Footer from "../../components/Footer";
import { Card, CardSubtitle, CardTitle, CardText } from 'reactstrap';
const request = require('request');

export default class Choice extends React.Component {
  state = {
    search: '',
    events: [],
    lat: 0,
    lon: 0,
    city: '',
    restaurants: [],
  }

  searchBands = () => {
    let url = 'https://rest.bandsintown.com/artists/' + this.state.search + '/events?app_id=choice';
    
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      let events = data;

      function precisionRound(number, precision) {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }

      this.setState({ 
        events: events,
        lat: precisionRound(data[6].venue.latitude, 2),
        lon: precisionRound(data[6].venue.longitude, 2),
        city: data[6].venue.city,
      })    
    })
  }

  returnRestaurants = (lat, lon) => {
    request({
      url: 'https://api.foursquare.com/v2/venues/explore',
      method: 'GET',
      qs: {
        client_id: '3WY24I05XQZA3TMIM3UTLH2TE5GGYJXT4USO53KF4SUPXC0E',
        client_secret: '2FGY4DTK3UILLPPPRJ1VVO5HNULVJPYEY01EISXZ5CECFBDH',
        near: this.state.city,
        radius: '1000',
        query: 'restaurant',
        v: '20170801',
        limit: 6
      }
    }, 
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        var response = JSON.parse(body).response.groups[0].items;

        document.getElementById('eats').innerHTML = '';

        for (var i = 0; i < response.length; i++) {
          var card = document.createElement('div');

          card.className = 'row';

          console.log(response[i])

          card.innerHTML = 
            '<a href="' + response[i].venue.url + '" target="_blank">\
              <Card className="grid-item">\
                <CardTitle>' + response[i].venue.name + '</CardTitle>\
                <CardSubtitle>' + response[i].venue.location.address + '</CardSubtitle>\
                <CardText>' + response[i].venue.categories[0].name + '| Rating/10 </CardText>\
              </Card>\
            </a>';

          document.getElementById('eats').appendChild(card);
        }
      }
    });

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBands();
  }

  render() {
    return (
      <div>
        <section>
          <Navi searchBands={this.searchBands} input={this.handleInputChange} form={this.handleFormSubmit} />
          <Modal />
          <Dashboard state={this.state} eat={this.returnRestaurants} input={this.handleInputChange} form={this.handleFormSubmit} />
          <Footer />
        </section>
      </div>
    );
  }
}