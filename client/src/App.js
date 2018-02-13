import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Choice from "./pages/Choice";
// import NoMatch from "./pages/NoMatch";
// import Bands from "./pages/Bands";
// import Eats from "./pages/Eats";
// import Details from "./pages/Details";
// import SignUp from "./pages/SignUp";

class App extends Component {
	render() {
		return (
		  <Router> 
		  	<Switch>
		      <Route path="/" exact component={Choice} />
		      {/*<Route path="/bands" exact component={Bands} />
		      <Route path="/bands/details" exact component={Details} />
		      <Route path="/eats" exact component={Eats} />
		      <Route path="/eats/details" exact component={Details} />
		      <Route path="/signUp" exact component={SignUp} />
		      <Route component={NoMatch} />*/}
		    </Switch>
		  </Router>
  	);
	}
}

export default App;