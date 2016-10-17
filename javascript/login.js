function validateForm(){
	var usernamefield = document.getElementById("usernamefield").value;
	var passwordfield = document.getElementById("passwordfield").value;
	if(!usernamefield OR !passwordfield){
		// Do something here
		return false;
	} else {
		return true;
	}
}