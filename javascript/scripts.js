/*global $, Cookies*/
/*jslint plusplus: true*/


function loadcart() {
    "use strict";
    var currentcart = Cookies.get('cart'),
        splitcart;
    if (currentcart) {
        splitcart = currentcart.split("*");
        splitcart.forEach(function (productID) {
            $.post('ajax/cart.php', {productID: productID}, function (data) {
                $('div#cart').append('<li><a href="#">' + data + "</a></li>");
                location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
            });
        });
    }
}

function searchproduct() {
    "use strict";
    var search = $("input#search").val();
    Cookies.set('lastsearch', search);
    if ($.trim(search)) {
        $.post("ajax/product.php", {search: search}, function (data) {
            $("div#search-data").html(data);
            location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
        });
    }
    return false;
}

function searchbar() {
    "use strict";
    var lastsearch = Cookies.get('lastsearch');
    if (!lastsearch) {
        lastsearch = "Enter product name";
    }
    $("input#search").attr("placeholder", lastsearch);
    
//    $("input#search-submit").on("click", function () {
//        var search = $("input#search").val();
//        Cookies.set('lastsearch', search);
//        
//        if ($.trim(search)) {
//            $.post("ajax/product.php", {search: search}, function (data) {
//                $("div#search-data").html(data);
//            });
//        }
//        return true;
//    });
}

function displayproducts() {
    'use strict';
    $.post("ajax/displayproducts.php", function (data, status) {
        if (status === "success") {
            $('div#search-data').html(data);
        }
        location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
    });
}

function checklogin() {
    "use strict";
    var sessionID = Cookies.get('sessionID'),
        outputhtml;
    
    $.post('ajax/checklogin.php', {sessionID: sessionID}, function (data) {
        var retdata = data.split(';');
        if (retdata[0] === "1") {
            if (retdata[2] === "staff") { //If logged in user is staff rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button> <button onclick='addproducts()' type='button'>Add Products</button>";
            }
            if (retdata[2] === "user") { //If logged in user is user rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button>";
            }
            $('div#login-form').html(outputhtml); //removes the login forms and replaces it with a greeting message, logout button and link to user account page
        }
        location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
    });
    loadcart(); // Loads the cart on page load
    searchbar(); // Loads the search bar on page load
    displayproducts(); //Loads the products on page load
}

function deletecookie() {
    "use strict";
    Cookies.remove('sessionID');
    location.reload();
}

function login() {
    "use strict";
    var username = $('input#username').val(),
        password = $('input#password').val(),
        found;

    if (($.trim(username) !== '') && ($.trim(password) !== '')) {
        $.post('ajax/login.php', {username: username, password: password}, function (data) {
            found = data;
            if (found === "1") { // Only reload on valid credentials
                location.reload();
            }
        });
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
                    location.reload(true);
                });
            }
            location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
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
            location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
        });
    });
}

function addtocart(productID) {
    "use strict";
    var currentcart = Cookies.get('cart');
    if (!currentcart) {
        currentcart = "";
    }
    currentcart = currentcart.concat(productID, "*");
    Cookies.set('cart', currentcart);
}

function clearcart() {
    "use strict";
    Cookies.set('cart', '');
    location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
//    var outputhtml = '<li><a href="#" onclick="clearcart()">Clear cart</a></li>';
//    $('div#cart').html = outputhtml;
}

