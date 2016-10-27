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
    
    $.post('ajax/checklogin.php', {sessionID: sessionID}, function (data) {
        var retdata = data.split(';');
        if (retdata[0] === "1") {
            if (retdata[2] === "staff") { //If logged in user is staff rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button> <button onclick='opencart()' type='button'>Go to cart</button> <button onclick='addproducts()' type='button'>Add Products</button>";
                document.write("test");
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
        $.post('ajax/login.php', {username: username, password: password}, function (data) {
            $('div#login-data').text(data);
        });
        location.reload();
    }
}

function edituserdetails() {
    "use strict";
    //document.write("I get into the function"); Gets here
    var outputhtml = 'Username: <input type="text" id="username"> Old password: <input type="password" id="oldpassword"> New password: <input type="password" id="newpassword"> Name: <input type="text" id="name"> Contact Number: <input type="text" id="contactnumber"> Address: <input type="text" id="address"> Email: <input type="text" id="email"> <button type="button" id="edituserbutton">Submit details</button> ',
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
    //document.write("I should have outputted the html"); Gets here
    $('button#edituserbutton').on("click", function () {
        username = $('input#username').val();
        oldpassword = $('input#oldpassword').val();
        newpassword = $('input#newpassword').val();
        name = $('input#name').val();
        contactnumber = $('input#contactnumber').val();
        address = $('input#address').val();
        email = $('input#email').val();
        
        $.post('ajax/checkpassword.php', {sessionID: sessionID}, function (data) {
            var retdata = data.split(';');
            if (retdata[0] === "1" && retdata[1] === oldpassword) {
                $.post('ajax/updateuserdetails.php', {username: username, password: newpassword, name: name, contactnumber: contactnumber, address: address, email: email, sessionID: sessionID}, function (data) {
                    location.reload();
                })
            }
        });
    });
}

function addproducts() {
    "use strict";
    //document.write("I get into the function"); Gets here
    var outputhtml = 'Name: <input type="text" id="name"> Price: <input type="text" id="price"> Description: <input type="text" id="description"> Genre: <input type="text" id="genre"> Quantity: <input type="text" id="quantity"> Rating: <input type="text" id="rating"> Image: <input type="text" id="image"> Tags: <input type="text" id="tags"> <button type="button" id="addproductsbutton">Submit details</button> ',
        editarray,
        name,
        price,
        description,
        genre,
        quantity,
        rating,
        image,
        tags;
    
    $('section#mainCont').html(outputhtml);
    //document.write("I should have outputted the html"); Gets here
    $('button#addproductsbutton').on("click", function () {
        name = $('input#name').val();
        price = $('input#price').val();
        description = $('input#description').val();
        genre = $('input#genre').val();
        quantity = $('input#quantity').val();
        rating = $('input#rating').val();
        image = $('input#image').val();
        tags = $('input#tags').val();
        
        $.post('ajax/addproduct.php', {name: name, price: price, description: description, genre: genre, quantity: quantity, rating: rating, image: image, tags: tags}, function (data) {
            document.reload();   
        });
    });    
}