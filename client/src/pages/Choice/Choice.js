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

      console.log(data)

      function precisionRound(number, precision) {
        let factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }

      this.setState({ 
        events: events,
        city: data[0].venue.city,
      })    
    })
  }

  returnRestaurants = () => {
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

          card.innerHTML = 
            '<a href="' + response[i].venue.url + '" target="_blank">\
              <div class="grid-item card">\
                <h5 class="card-title">' + response[i].venue.name + '</h5>\
                <h6 class="card-subtitle">' + response[i].venue.location.address + '</h6>\
                <p class="card-text">' + response[i].venue.categories[0].name + '</p></div></a>';

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