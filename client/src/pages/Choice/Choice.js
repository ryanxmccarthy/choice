import React from "react";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Dashboard from '../../components/Dashboard';
import Footer from "../../components/Footer";
const request = require('request');

export default class Choice extends React.Component {
  state = {
    search: '',
    events: [],
    lat: 0,
    lon: 0,
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
        lat: precisionRound(data[0].venue.latitude, 2),
        lon: precisionRound(data[0].venue.longitude, 2)
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
        ll: this.state.lat + ',' + this.state.lon,
        query: 'restaurant',
        v: '20170801',
        limit: 1
      }
    }, function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        console.log(body);
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