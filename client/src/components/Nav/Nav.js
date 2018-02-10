import React from "react";
import './nav.css';
import '../Modal/modal.css';
import "../Modal";
import {
  Collapse,
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
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  Your Bands
                </DropdownItem>
                <DropdownItem>
                  Your Eats
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Dashboard
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}