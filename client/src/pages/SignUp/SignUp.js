import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navi from "../../components/Nav";
import Modal from "../../components/Modal";
import Dashboard from '../../components/Dashboard';
import Footer from "../../components/Footer";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends React.Component {
  render() {
    return (
      <section>
        <Navi />
        <Modal />
				<div className="container-fluid">
          <Jumbotron>
            <h1 className="display-3">Hello there!</h1>
            <p className="lead">We're happy you like our app. Create an account below to personalize your content.</p>
            <hr className="my-2" />
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="example@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
            </FormGroup>
            <Button onClick={this.handleFormSubmit}>Submit</Button>
          </Jumbotron>
        </div>
        <Footer />
      </section>
    );
  }
}