/*global $, Cookies*/
/*jslint plusplus: true*/

function deletecookie() {
    "use strict";
    var outputhtml = 'Username: <input type="text" id="username"> Password: <input type="password" id="password"> <input type="submit" value="Login" id="login-submit" onclick="login()"> <div id="login-data"></div> <script login()></script>';
    Cookies.remove('sessionID');
    $('div#login-form').html(outputhtml);
}

function checklogin() {
    "use strict";
    var sessionID = Cookies.get('sessionID'),
        outputhtml;
    
    $.post('checklogin.php', {sessionID: sessionID}, function (data) {
        var retdata = data.split(';');
        if (retdata[0] === "1") {
            if (retdata[2] === "staff") { //If logged in user is staff rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button> <button onclick='opencart()' type='button'>Go to cart</button> <button onclick='staffmenu()' type='button'>Access staff menu</button>";
            }
            if (retdata[2] === "user") { //If logged in user is user rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button> <button onclick='opencart()' type='button'>Go to cart</button>";
            }
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

function edituserdetails() {
    "use strict";
    var outputhtml = 'Username: <input type="text" id="username"> Old password: <input type="password" id="oldpassword"> New password: <input type="password" id="newpassword"> Name: <input type="text" id="name"> Contact Number: <input type="text" id="contactnumber"> Address: <input type="text" id="address"> Email: <input type="text" id="email"> <button type="button" id="edituserbutton"> ',
        editarray,
        username,
        oldpassword,
        newpassword,
        name,
        contactnumber,
        address,
        email,
        sessionID = Cookies.get('sessionID');
    
    $('section#mainCont').html(outputhtml);
    $('button#edituserbutton').on("click", function () {
        username = $('input#username').val();
        oldpassword = $('input#oldpassword').val();
        newpassword = $('input#newpassword').val();
        name = $('input#name').val();
        contactnumber = $('input#contactnumber').val();
        address = $('input#address').val();
        email = $('input#email').val();
        
        $.post('checkpassword.php', {sessionID: sessionID}, function (data) {
            var retdata = data.split(';');
            if (retdata[0] === "1" && retdata[1] === oldpassword) {
                $.post('updateuserdetails.php', {username: username, password: newpassword, name: name, contactnumber: contactnumber, address: address, email: email, sessionID: sessionID}, function (data) {
                    $('div#login-data').text(data);
                })
            }
        });
    });
}