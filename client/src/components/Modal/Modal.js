import React from "react";
import "./modal.css";

// var modal = document.getElementById('modal');
// var modalClose = document.getElementById('modalClose');

// modalClose.onclick( function() {
// 	modal.css("display", "none");
// })

// window.onclick( function(event) {
// 	if (event.target == modal) {
// 		modal.css("display", "none");
// 	}
// })

const defaultState = {
	search: ""
}

export const Modal = () => {
	const state = defaultState;

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	const handleFormSubmit = (event) => {
		event.prevenDefault();
		alert(`email: ${this.state.email} and body: ${this.state.body}`);

		this.setState(defaultState)
	}

		return(
		 	<div className="modal" id="modal" tabindex="-1" role="dialog">
	      <div className="modal-dialog" role="document">
	        <div className="modal-content">
	          <div className="modal-header">
	            <h5 className="modal-title">Modal title</h5>
	            <button type="button" className="close" id="modalClose" data-dismiss="modal" aria-label="Close">
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div className="modal-body">
	            <form>
	              <div className="form-group">
	                <label for="exampleInputEmail1">Email address</label>
	                <input type="email" 
	                			className="form-control" 
	                			value={this.state.email}
	                			id="exampleInputEmail1" 
	                			aria-describedby="emailHelp" 
	                			onChange={this.handleInputChange}
	                			placeholder="Enter email" />
	              </div>
	              <div className="form-group">
	                <label for="exampleInputPassword1">Password</label>
	                <input type="password" 
	                			className="form-control" 
	                			value={this.state.body}
	                			id="exampleInputPassword1"
	                			onChange={this.handleInputChange} 
	                			placeholder="Password" />
	              </div>
	            </form>
	          </div>
	          <div className="modal-footer">
	            <a href="/signUp" id="signUp">Sign Up Here!</a>
	            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
	          </div>
	        </div>
	      </div>
	    </div> 
    )
};

export default Modal;