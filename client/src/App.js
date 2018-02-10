import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Choice from "./pages/Choice";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Modal from "./components/Modal"
import Dashboard from './components/Dashboard'
import Saved from "./components/Saved"
import Footer from "./components/Footer"

const App = () =>
  <Router> 
    <div>
      <Nav />
      <Modal />
      <Saved />
      <Footer />
    </div>
  </Router>

export default App;