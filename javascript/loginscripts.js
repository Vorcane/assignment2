/*global $, checklogin*/
/*jslint plusplus: true*/

function deletecookie(name) {
    "use strict";
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function checklogin() {
    "use strict";
    var sessionID = Cookies.get('sessionID');
    
    $.post('checklogin.php', {sessionID: sessionID}, function (data) {
                    var retdata = data.split(';');
                    //$('div#login-form').html(retdata[0]);
                    if (retdata[0] === true) {
                        $('div#login-form').html("<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie(\x22sessionID\x22)' type='button'>Log out</button>"); //removes the login forms and replaces it with a greeting message, logout button and link to user account page
                    }
                });    
}

function login() {
    "use strict";
    //$('input#login-submit').on('click', function () {
        $('div#login-data').text("test");
        var username = $('input#username').val(),
            password = $('input#password').val();
        
        if (($.trim(username) !== '') && ($.trim(password) !== '')) {
            $.post('login.php', {username: username, password: password}, function (data) {
                $('div#login-data').text(data);
            });
            checklogin();
        }
    //});
}