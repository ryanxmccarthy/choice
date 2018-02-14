import React from "react";
import "./modal.css";

const defaultState = {
	email: "",
	pass: "",
}

export default class Modal extends React.Component{
	state = defaultState;

	handleInputChange = (event) => {
		const { name, value }= event.target;
		this.setState({ [name]: value });
		console.log("modal input change");
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(`email: ${this.state.email} and pass: ${this.state.pass}`);
		this.setState(defaultState);
	}

	closeBtn = () => {
		document.getElementById('modalBox').style.display = "none";
		document.getElementById('modal').style.display = "none";
		document.getElementById('modal-dialog').style.display = "none";
		document.getElementById('modalBox').style.display = "none";
		console.log("Modal close btn");
	}

	render() {
		return(
		 	<div className="modal"
		 			id="modal" 
		 			tabIndex="-1" 
		 			role="dialog">
		 		<div id="modalBox" 
		 				 className="modalBox"
		 				 onClick={this.closeBtn}>
	 			</div>
	      <div className="modal-dialog" id="modal-dialog" role="document">
	        <div className="modal-content">
	          <div className="modal-header">
	            <h2 className="modal-title">Sign In</h2>
	            <button type="button" 
	            				className="close" 
	            				data-dismiss="modal" 
	            				aria-label="Close"
	            				onClick={this.closeBtn}>
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div className="modal-body">
	            <form>
	              <div className="form-group">
	                <label htmlFor="exampleInputEmail1">Email address</label>
	                <input type="email" 
	                			className="form-control" 
	                			name="email"
	                			id="exampleInputEmail1" 
	                			aria-describedby="emailHelp" 
	                			onChange={this.handleInputChange}
	                			placeholder="example@example.com" />
	              </div>
	              <div className="form-group">
	                <label htmlFor="exampleInputPassword1">Password</label>
	                <input type="password" 
	                			className="form-control" 
	                			name="pass"
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
	            				onClick={this.handleFormSubmit}>Sign In</button>
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
};