import React from "react";
import "./modal.css";

const defaultState = {
	email: " ",
	pass: " ",
}

export default class Dashboard extends React.Component{
	state = defaultState;

	handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	handleFormSubmit = (event) => {
		event.prevenDefault();
		alert(`email: ${this.state.email} and pass: ${this.state.pass}`);

		this.setState(defaultState)
	}

	getInitialState() {
		return { showModal: false };
	}

	modalSignIn = () => {
		document.getElementById('modalBox').style.display = "none";
		console.log("Modal sign in");
	}

	closeBtn = () => {
		document.getElementById('modalBox').style.display = "none";
		document.getElementById('modal').style.display = "none";
		console.log("Modal close btn");
	}

	windowClose = (event) => {
		if (event.target === document.getElementById('modalBox')) {
			document.getElementById('modalBox').style.display = 'none';
			document.getElementById('modal').style.display = 'none';
		}		
		console.log("Window close");
	}

	render() {
		return(
			<div id="modalBox"
					 onClick={this.windowClose}>
			 	<div className="modal" 
			 			id="modal" 
			 			tabIndex="-1" 
			 			role="dialog">
		      <div className="modal-dialog" role="document">
		        <div className="modal-content">
		          <div className="modal-header">
		            <h5 className="modal-title">Modal title</h5>
		            <button type="button" 
		            				className="close" 
		            				id="modalClose" 
		            				data-dismiss="modal" 
		            				aria-label="Close"
		            				onClick={this.closeBtn}>
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		          <div className="modal-body">
		            <form>
		              <div className="form-group">
		                <label for="exampleInputEmail1">Email address</label>
		                <input type="email" 
		                			className="form-control" 
		                			// value={this.state.email}
		                			id="exampleInputEmail1" 
		                			aria-describedby="emailHelp" 
		                			onChange={this.handleInputChange}
		                			placeholder="Enter email" />
		              </div>
		              <div className="form-group">
		                <label for="exampleInputPassword1">Password</label>
		                <input type="password" 
		                			className="form-control" 
		                			value={this.state.pass}
		                			id="exampleInputPassword1"
		                			onChange={this.handleInputChange} 
		                			placeholder="Password" />
		              </div>
		            </form>
		          </div>
		          <div className="modal-footer">
		            <a href="/signUp" 
		            	 id="signUp">Sign Up Here!</a>
		            <button type="button" 
		            				className="btn btn-primary" 
		            				data-dismiss="modal"
		            				onClick={this.signInBtn}>Sign In</button>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
	  )
	}
};