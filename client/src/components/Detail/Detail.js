import React from "react";
import "./detail.css";
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row } from 'reactstrap';

export default class Detail extends React.Component{
	render() {
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Card>
							<div className="imgWrap">
			        	<CardImg top width="100%" src="https://image.redbull.com/rbcom/010/2015-09-03/1331745288284_2/0010/1/1600/1067/1/grimes.jpg" alt=" " />
			        </div>
			        <CardBody>
			          <CardTitle><h2>Card Title</h2></CardTitle>
			          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
			          <CardText>
			            <small className="text-muted">Last updated 3 mins ago</small>
			          </CardText>
			        </CardBody>
			      </Card>
		      </div>
	      </div>
      </div>
		)
	}
}