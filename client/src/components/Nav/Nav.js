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
    document.getElementById('modal-dialog').style.display = "block";
    document.getElementById('modal').style.display = "block";
    console.log("Nav sign in");
  };

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

  render() {
    return (

      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><h1>Choice</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <UncontrolledDropdown className="dropdown">
                  <DropdownToggle nav caret>
                    Dashboard
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem href="/bands">
                      Your Bands
                    </DropdownItem>
                    <DropdownItem href="/eats">
                      Your Eats
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <Form inline className="search">
                  <FormGroup>
                    <Input type="search" 
                            name="search" 
                            id="searchBar" 
                            placeholder="Search"
                            onChange={this.props.input} />
                  </FormGroup>
                  <Button color="success"
                          id="searchBtn"
                          className="search"
                          onClick={this.props.form}>Search</Button>
                  <Button color="link" 
                          onClick={this.navSignIn}>Sign In</Button>
                </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}