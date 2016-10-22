/*global $, checklogin*/
/*jslint plusplus: true*/

function deletecookie() {
    "use strict";
    var outputhtml = 'Username: <input type="text" id="username"> Password: <input type="password" id="password"> <input type="submit" value="Login" id="login-submit" onclick="login()"> <div id="login-data"></div> <script login()></script>';
    Cookies.remove('sessionID');
    $('div#login-form').html(outputhtml)
}

function checklogin() {
    "use strict";
    var sessionID = Cookies.get('sessionID');
    
    $.post('checklogin.php', {sessionID: sessionID}, function (data) {
                    var retdata = data.split(';');
                    if (retdata[0] === "1") {
                        var outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button>";
                        
                        $('div#login-form').html(outputhtml); //removes the login forms and replaces it with a greeting message, logout button and link to user account page
                    }
                });    
}

function login() {
    "use strict";
        var username = $('input#username').val(),
            password = $('input#password').val();
        
        if (($.trim(username) !== '') && ($.trim(password) !== '')) {
            $.post('login.php', {username: username, password: password}, function (data) {
                $('div#login-data').text(data);
            });
            location.reload();
        }
}