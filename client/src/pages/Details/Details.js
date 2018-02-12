import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";

export default class Details extends React.Component {
  render() {
    return (
      <section>
        <Navi />
        <Modal />
        <Detail />
        <Footer />
      </section>
    );
  }
}