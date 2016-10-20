$('input#login-submit').on('click', function() {
    var username = $('input#username').val();
    var password = $('input#password').val();
    if ($.trim(username) != '' && $.trim(password) != '') {
        $.post('login.php', {username: username, password: password}, function(data) {
            $('div#login-data).text(data);
        })
    }
    
    alert(username);
})


//function validateForm() {
//	var usernamefield = document.getElementById("usernamefield").value;
//	var passwordfield = document.getElementById("passwordfield").value;
//	if(!usernamefield || !passwordfield){
//		// Do something here
//		return false;
//	} else {
//		return true;
//	}
//}
//
//function loginHandler(){
//	/*var xhttp = new XMLHttpRequest();
//	xhttp.open("GET", "login.php", true);
//	xhttp.setRequestHeader("
//	xhttp.send();*/
//    
//    var username = $('input#usernamefield').val();
//    var password = $('input#passwordfield').val();
//    alert(name);
//}
//
//}

    
