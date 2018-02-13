import React from "react";
import "./dashboard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Dashboard extends React.Component {
  state = {
    search: '',
    events: [],
  }

  render() {
    return(
      <div>
        <div id='results'>
          { this.props.state.events.map(event => (
              <a href="/bands" key={event.id}>
                <Card inverse className="grid-item" >
                  <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                  <CardImgOverlay className="imgOverlay">
                    <CardTitle>{event.id}</CardTitle>
                    <CardText>{event.venue.city}</CardText>
                  </CardImgOverlay>
                </Card>
              </a>
            ))}
        </div>

        {/*<div className="container-fluid" id="toggleDiv">
          <div className="row">
            <div id="bands">
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
            </div>
          </div>*/}

          {/*<div className="row">
            <div id="maps">
              <img src="https://developers.google.com/maps/documentation/urls/images/map-no-params.png" alt=" " />
            </div>
          </div>*/}
          
          {/*<div className="row">
            <div id="eats">
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
              <a href="/eats"><Card inverse className="grid-item">
                <CardImg src="https://threecheers.co.uk/assets/Latchmere-battersea-food-4-318x270.jpg" alt="Card image cap" />
                <CardImgOverlay className="imgOverlay">
                  <CardTitle>Name</CardTitle>
                  <CardText>Content</CardText>
                </CardImgOverlay>
              </Card></a>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
};