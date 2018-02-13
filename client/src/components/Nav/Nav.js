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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const defaultState = {
  search: '',
  events: [],
}

export default class Navi extends React.Component {

  state = defaultState;

  navSignIn = () => {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal-dialog').style.display = "block";
    document.getElementById('modalBox').style.display = "block";
    console.log("Nav sign in");
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><h1>Choice</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav="true" innavbar="true">
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
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Form inline className="search">
                <FormGroup>
                  <Input type="search" 
                          name="search" 
                          id="searchBar" 
                          placeholder="Search for a musician"
                          onChange={this.props.input} />
                </FormGroup>
                <Button color="success"
                        id="searchBtn"
                        className="search"
                        onClick={this.props.form}>Search</Button>
                <Button color="link" 
                        onClick={this.navSignIn}>Sign In</Button>
              </Form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}