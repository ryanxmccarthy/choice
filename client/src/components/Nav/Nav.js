import React from "react";
import './nav.css';
import '../Modal/modal.css';
import "../Modal";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const defaultState = {
  state: ""
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  state = defaultState;

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })

    console.log("input change here");
  };

  handleFormSubmit(event) {
    event.preventDefault();
    alert(`search: ${this.state.name}`);
    this.setState(defaultState)
    console.log("form submit here");
  };

  signIn() {
    document.getElementById("modal").style.display = "block";
    console.log("sign in modal");
  };
  render() {
  return (
   <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">Choice</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <UncontrolledDropdown className="dropdown" nav inNavbar>
                <DropdownToggle nav caret>
                  Dashboard
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Your Bands
                  </DropdownItem>
                  <DropdownItem>
                    Your Eats
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <Form className="search">
                <FormGroup>
                  <Input type="search" 
                          name="search" 
                          id="searchBar" 
                          placeholder="Search"
                          onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Button color="success"
                          type="">Search</Button>
                </FormGroup>
                <FormGroup>
                  <Button color="link" 
                          onClick={this.signIn}>Sign In</Button>
                </FormGroup>
              </Form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}