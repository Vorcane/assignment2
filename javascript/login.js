function validateForm() {
	var usernamefield = document.getElementById("usernamefield").value;
	var passwordfield = document.getElementById("passwordfield").value;
	if(!usernamefield || !passwordfield){
		// Do something here
		return false;
	} else {
		return true;
	}
}

function loginHandler(){
	/*var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "login.php", true);
	xhttp.setRequestHeader("
	xhttp.send();*/

}

    
$('input#loginsubmit').on('click', function() {
    var username = $('input#usernamefield').val();
    var password = $('input#passwordfield').val();
    alert(name);
});