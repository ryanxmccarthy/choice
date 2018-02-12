import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Choice from "./pages/Choice";
import NoMatch from "./pages/NoMatch";
import Bands from "./pages/Bands";
import Eats from "./pages/Eats";
import SignUp from "./pages/SignUp";
import Background from './components/Background'

class App extends Component {
	render() {
		return (
		  <Router> 
		  	<div>
		      <Route path="/" exact component={Choice} />
		      <Route path="/bands" exact component={Bands} />
		      <Route path="/eats" exact component={Eats} />
		      <Route path="/signUp" exact component={SignUp} />
		    </div>
		  </Router>
  	);
	}
}

export default App;