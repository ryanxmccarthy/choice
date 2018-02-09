
// Animation Script

var expand = false;
function toggle() {
  expand = !expand;

  var toggleDiv = document.getElementById('toggleDiv');
  toggleDiv.classList.toggle('expand');

};

function signIn(){
	var signIn = document.getElementById('signIn');
	var modal = document.getElementById('modal');
	modal.css("display", "block");
}