function validateForm(){
	var usernamefield = document.getElementById("usernamefield").value;
	var passwordfield = document.getElementById("passwordfield").value;
	if(!usernamefield || !passwordfield){
		// Do something here
		return false;
	} else {
		return true;
	}
}

/*function login(){
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "login.php", true);
	xhttp.setRequestHeader("
	xhttp.send();
}*/