import React from "react";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Dashboard from '../../components/Dashboard';
import Footer from "../../components/Footer";

export default class Choice extends React.Component {
  state = {
    search: '',
    events: [],
  }

  search = () => {
    var url ='https://rest.bandsintown.com/artists/' + this.state.search + '/events?app_id=choice';
    
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      let events = data;
      // .map(event => {
      //   return (
      //     <div key={event.id}>
      //       {event.venue.name}
      //     </div>
      //   )
      // })

      console.log(data)

      this.setState({ events: events })
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.search();
  }

  render() {
    return (
      <div>
        <section>
          <Navi search={this.search} input={this.handleInputChange} form={this.handleFormSubmit} />
          <Modal />
          <Dashboard state={this.state} search={this.search} input={this.handleInputChange} form={this.handleFormSubmit} />
          <Footer />
        </section>
      </div>
    );
  }
}
