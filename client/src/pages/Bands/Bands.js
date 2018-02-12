import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Dashboard from '../../components/Dashboard';
import Footer from "../../components/Footer";

export default class Bands extends React.Component {
  render() {
    return (
      <section>
        <Navi />
        <Modal />
        <Dashboard />
        <Footer />
      </section>
    );
  }
}