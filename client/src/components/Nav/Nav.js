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
  search: ''
}

export default class Navi extends React.Component {

  state = defaultState;

  handleInputChange = (event) => {
    const { name, value }= event.target;
    this.setState({ [name]: value });
    console.log("search input change");
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`search: ${this.state.search}`);
    this.setState(defaultState);
  };

  navSignIn = () => {
    document.getElementById('modalBox').style.display = "block";
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

  state = { events: [] };

  componentDidMount = () => {
    fetch('https://rest.bandsintown.com/artists/watain/events?app_id=lost&ffound')
    .then(results => {
      return results.json();
      console.log(results.json());
    }).then(data => {
      console.log(data)
    //   let events = data.results.map(event => {
    //     console.log(event.json());
    //   })

    //   this.setState({events: events});
    //   console.log('state', this.state.events);
    })
  };

  render() {
    return (
      <div>
        <div className='container2'>
          <div className='container1'>
            {this.state.pictures}
          </div>
        </div>

        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><h1>Choice</h1></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <UncontrolledDropdown className="dropdown" nav inNavbar>
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
                              onChange={this.handleInputChange} />
                    </FormGroup>
                    <Button color="success"
                            id="searchBtn"
                            className="search"
                            onClick={this.handleFormSubmit}>Search</Button>
                    <Button color="link" 
                            onClick={this.navSignIn}>Sign In</Button>
                  </Form>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}