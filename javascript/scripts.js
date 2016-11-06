/*global $, Cookies*/
/*jslint plusplus: true*/

function dobuttons() {
    "use strict";
    $("a#fps").on("click", function () {
        var search = $("a#fps").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show MMO genre
    $("a#mmo").on("click", function () {
        var search = $("a#mmo").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show RACING genre
    $("a#racing").on("click", function () {
        var search = $("a#racing").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show ADVENTURE genre
    $("a#adventure").on("click", function () {
        var search = $("a#adventure").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show sandbox genre
    $("a#sandbox").on("click", function () {
        var search = $("a#sandbox").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show sports genre
    $("a#sports").on("click", function () {
        var search = $("a#sports").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show action genre
    $("a#action").on("click", function () {
        var search = $("a#action").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rts genre
    $("a#rts").on("click", function () {
        var search = $("a#rts").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show fighter genre
    $("a#fighter").on("click", function () {
        var search = $("a#fighter").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#rpg").on("click", function () {
        var search = $("a#rpg").text();

        if ($.trim(search) !== "") {
            $.post("ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    // CODE FOR SEARCHING PRICE BELOW
    // CODE FOR SEARCHING PRICE BELOW
    // CODE FOR SEARCHING PRICE BELOW
    // CODE FOR SEARCHING PRICE BELOW
    // CODE FOR SEARCHING PRICE BELOW

    //Function to update page to only show rpg genre
    $("a#utwent").on("click", function () {
        var search = parseFloat("20");

        if ($.trim(search) !== "") {
            $.post("ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#ufifty").on("click", function () {
        var search = parseFloat("50");

        if ($.trim(search) !== "") {
            $.post("ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#ofifty").on("click", function () {
        var search = parseFloat("52");

        if ($.trim(search) !== "") {
            $.post("ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });


    //ABOUT US
    $("a#aboutus").click(function () {

        $.ajax({
            type: 'POST',
            url: 'ajax/aboutus.php',
            success: function (data) {
                $("div#search-data").html(data);
            }
        });
    });
}





function loadcart() {
    "use strict";
    var currentcart = Cookies.get('cart').slice(0, -1),
        splitcart;
    if (currentcart) {
        splitcart = currentcart.split("*");
        splitcart.forEach(function (productID) {
            $.post('ajax/cart.php', {productID: productID}, function (data) {
                $('div#cart').append('<li><a href="#">' + data + "</a></li>");
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
}

function displayproducts() {
    'use strict';
    $.post("ajax/displayproducts.php", function (data, status) {
        if (status === "success") {
            $('div#search-data').html(data);
        }
    });
}

function checklogin() {
    "use strict";
    var sessionID = Cookies.get('sessionID'),
        outputhtml;
    dobuttons();
    $.post('ajax/checklogin.php', {sessionID: sessionID}, function (data) {
        var retdata = data.split(';');
        if (retdata[0] === "1") {
            if (retdata[2] === "staff") { //If logged in user is staff rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button> <button onclick='addproducts()' type='button'>Add Products</button> <button onclick='addstaff()' type='button'>Add new staff account</button> <button onclick='submitorder()' type='button'>Submit order</button>";
            }
            if (retdata[2] === "user") { //If logged in user is user rank load this
                outputhtml  = "<h3>Welcome " + retdata[1] + "</h3>" + "<button onclick='deletecookie()' type='button'>Log out</button> <button onclick='edituserdetails()' type='button'>Edit user details</button>  <button onclick='submitorder()' type='button'>Submit order</button>";
            }
            $('div#login-replace').html(outputhtml); //removes the login forms and replaces it with a greeting message, logout button and link to user account page
        }
    });
    displayproducts(); //Loads the products on page load
    loadcart(); // Loads the cart on page load
    searchbar(); // Loads the search bar on page load
    
}

function deletecookie() {
    "use strict";
    Cookies.remove('sessionID');
    location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
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
                location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
            } else {
                $('div#login-data').text("The entered username or password is incorrect");
            }
        });
    }
}

function edituserdetails() {
    "use strict";
    //document.write("I get into the function"); Gets here
    var outputhtml = '<div class="center">Username: <input type="text" id="username"><br><br> Old password: <input type="password" id="oldpassword"><br><br> New password: <input type="password" id="newpassword"><br><br> Name: <input type="text" id="name"><br><br> Contact Number: <input type="text" id="contactnumber"><br><br> Address: <input type="text" id="address"><br><br> Email: <input type="text" id="email"><br><br> <button type="button" id="edituserbutton">Submit details</button></div> ',
        editarray,
        username,
        oldpassword,
        newpassword,
        name,
        contactnumber,
        address,
        email,
        sessionID = Cookies.get('sessionID');
    dobuttons();
    $('div#search-data').html(outputhtml);
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
                    location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
                });
            }
        });
    });
}

function addproducts() {
    "use strict";
    //document.write("I get into the function"); Gets here
    var outputhtml = '<div class="center"><br><br>Name: <input type="text" id="name"><br><br> Price: <input type="text" id="price"><br><br> Description: <input type="text" id="description"><br><br> Genre: <input type="text" id="genre"><br><br> Quantity: <input type="text" id="quantity"><br><br> Rating: <input type="text" id="rating"><br><br> Image: <input type="text" id="image"><br><br> Tags: <input type="text" id="tags"><br><br> <button type="button" id="addproductsbutton">Submit details</button></div> ',
        editarray,
        name,
        price,
        description,
        genre,
        quantity,
        rating,
        image,
        tags;
    
    dobuttons();
    $('div#search-data').html(outputhtml);
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
    location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
}

function clearcart() {
    "use strict";
    Cookies.set('cart', '');
    location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
}

function register() {
    "use strict";
    var outputhtml = '<div class="center">Username: <input type="text" id="regusername"><br><br> Password: <input type="password" id="regpassword"><br><br> Confirm password: <input type="password" id="confirmedpassword"><br><br> Name: <input type="text" id="name"><br><br> Contact Number: <input type="text" id="contactnumber"><br><br> Address: <input type="text" id="address"><br><br> Email: <input type="text" id="email"><br><br> <button type="button" id="edituserbutton">Submit details</button> <textarea rows="1" cols="20" id="passwordtext"></div> ',
        editarray,
        username,
        password,
        confirmedpassword,
        name,
        contactnumber,
        address,
        email,
        rank = "user";
    
    $('div#search-data').html(outputhtml);
    //document.write("I should have outputted the html"); Gets here
    $('button#edituserbutton').on("click", function () {
        username = $('input#regusername').val();
        password = $('input#regpassword').val();
        confirmedpassword = $('input#confirmedpassword').val();
        name = $('input#name').val();
        contactnumber = $('input#contactnumber').val();
        address = $('input#address').val();
        email = $('input#email').val();
        if (password === confirmedpassword) { //Makes sure passwords match up
            $.post('ajax/checkuser.php', {username: username}, function (data) {
                if (data === "0") { //Checks if username is already taken
                    $.post('ajax/register.php', {username: username, password: password, name: name, contactnumber: contactnumber, address: address, email: email, rank: rank}, function (data) {
                        location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
                    });
                } else {
                    $('textarea#passwordtext').text("Username already taken " + data);
                }
            });
        } else {
            $('textarea#passwordtext').text("Passwords do not match");
        }
    });
}

function addstaff() {
    "use strict";
    var outputhtml = '<div class="center">Username: <input type="text" id="regusername"><br><br> Password: <input type="password" id="regpassword"><br><br> Confirm password: <input type="password" id="confirmedpassword"><br><br> Name: <input type="text" id="name"><br><br> Contact Number: <input type="text" id="contactnumber"><br><br> Address: <input type="text" id="address"><br><br> Email: <input type="text" id="email"><br><br> <button type="button" id="edituserbutton">Submit details</button> <textarea rows="1" cols="20" id="passwordtext"></textarea></div> ',
        editarray,
        username,
        password,
        confirmedpassword,
        name,
        contactnumber,
        address,
        email,
        rank = "staff";
    
    dobuttons();
    $('div#search-data').html(outputhtml);
    //document.write("I should have outputted the html"); Gets here
    $('button#edituserbutton').on("click", function () {
        username = $('input#regusername').val();
        password = $('input#regpassword').val();
        confirmedpassword = $('input#confirmedpassword').val();
        name = $('input#name').val();
        contactnumber = $('input#contactnumber').val();
        address = $('input#address').val();
        email = $('input#email').val();
        if (password === confirmedpassword) { //Makes sure passwords match up
            $.post('ajax/checkuser.php', {username: username}, function (data) {
                if (data === "0") { //Checks if username is already taken
                    $.post('ajax/register.php', {username: username, password: password, name: name, contactnumber: contactnumber, address: address, email: email, rank: rank}, function (data) {
                        location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
                    });
                } else {
                    $('textarea#passwordtext').text("Username already taken " + data);
                }
            });
        } else {
            $('textarea#passwordtext').text("Passwords do not match");
        }
    });
}

function submitorder() {
    "use strict";
    var currentcart = Cookies.get('cart').slice(0, -1),
        splitcart,
        products = [""],
        sessionid = Cookies.get('sessionID'),
        tProduct,
        testdata,
        outputhtml;
    if (currentcart) {
        $('div#search-data').html("<div><div class = 'center'> <p>You have chosen the following products: <div id='productshere'></div><br><br><button type='button' id='submitbutton' class = 'center'>Submit Order</button><br><br></div>");
        splitcart = currentcart.split("*");
        splitcart.forEach(function (productID, i) {
            $.post('ajax/cart.php', {productID: productID}, function (data) {
                $('div#productshere').append(data + "<br><br>");

            });
        });
        $('div#search-data').html(outputhtml);
        $('button#submitbutton').on('click', function () {
            $.post('ajax/submitorder.php', {sessionID: sessionid, cart: currentcart}, function (data) {
                testdata = data;
                if (data === "true") {
                    //location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
                    $('div#login-data').text("Order successfully submitted");
                } else {
                    //location.href = "http://ceto.murdoch.edu.au/~32667253/assignment2/index.html";
                    $('div#login-data').text("Order did not submit, please try logging out and in");
                }
            });
        });
        
    } else {
        $('div#search-data').html("<div class='center'> <h2>You did not add any items to the cart, please go home and choose some products.</h2><br><h2>Thank you for shopping with HeatWave Gaming</h2></div>");
    }
}
