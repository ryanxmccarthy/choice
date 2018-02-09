
// Animation Script

var expand = false;
function toggle() {
  expand = !expand;

  var toggleDiv = document.getElementById('toggleDiv');
  toggleDiv.classList.toggle('expand');

};

function signIn(){
	document.getElementById("modal").style.display = "block";
}