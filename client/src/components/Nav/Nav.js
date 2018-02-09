import React from "react";
import './nav.css';
import '../Modal/modal.css';

var signIn = document.getElementById('signIn');

signIn.onclick( function() {
  modal.css("display", "block");
});

const defaultState = {
  search: ""
}

export const Nav = () => {
  state = defaultState;

  handleInputChange = (event) => {
    const { search, value } = event.target;

    this.setState({
      [search]: value
    })

    console.log("input change here");
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`search: ${this.state.search}`);
    this.setState(defaultState)
    console.log("form submit here");
  }

  signIn = () => {
    document.getElementById("modal").style.display = "block";
    console.log("sign in modal");
  }

  render () {
    return(
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html"><h1>Choice</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Go To...
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Your Bands</a>
                <a className="dropdown-item" href="#">Your Eats</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Map</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input type="search" 
                  value={this.state.search}
                  className="form-control mr-sm-2"
                  onChange={this.handleInputChange}
                  placeholder="Search" 
                  aria-label="Search">
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleFormSubmit} type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" id="signUp" onClick={this.signIn}>Sign In</a>
            </li>
          </ul>
        </div>
      </nav>;
    )
  }
}