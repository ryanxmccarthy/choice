import { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Nav from '../../components/Nav'

class Choice extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  render() {
    return (
      Nav
    );
  }
}

export default Choice;
