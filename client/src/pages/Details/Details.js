import React from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import { Media } from 'reactstrap';

export default class Details extends React.Component {
  render() {
    return (
      <section>
        <Navi />
        <Modal />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Media>
                <Media left href="#">
                  <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}