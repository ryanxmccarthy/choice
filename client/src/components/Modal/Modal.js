import React from "react";
import "./modal.css";

var modal = document.getElementById('modal');
var modalClose = document.getElementById('modalClose');

modalClose.onclick( function() {
	modal.css("display", "none");
})

window.onclick( function(event) {
	if (event.target == modal) {
		modal.css("display", "none");
	}
})

const Modal = () => (
	
	);

export default Modal;