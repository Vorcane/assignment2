/*global $, Cookies*/
/*jslint plusplus: true*/

function dobuttons() {
    "use strict";
    $("a#fps").on("click", function () {
        var search = $("a#fps").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show MMO genre
    $("a#mmo").on("click", function () {
        var search = $("a#mmo").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    
    $('a#help').on("click", function () {
        $('div#search-data').html("<p> How to use HeatWave Gaming webstore<br><br>Searching for products<br><br>There is two main ways of searching for products on our website, the first way is via the search bar located on the main navigation bar at the top right of the screen.<br><br>In the search bar you can search for anything related to the product you are after, the search will return products which are related to what you searched. For example typing in “Overwatch” will search all the products and find any that match the description or name of “Overwatch”. You do not need to complete the word you can also use tags which may be associated with the product such as “Ow”.<br><br> As you can see when searching for “Ow” it retrieved “Overwatch” but also any other entries with “Ow” in them. <br><br> The other way of viewing our products is using the buttons in the navigation menu when you mouse over the buttons “Price” and “Genre” a drop down menu will appear and clicking one of the buttons will display the corresponding products.<br><br> If you click “Sandbox” it will show all games within the genre “Sandbox”, the same applies when using the price button it will show either Games less than $20, less than $50 or over $50 depending on the button you chose.<br><br> Logging in<br><br> Logging in is done through the login form which is located under the navigation bar to log in make sure that you have an account associated with yourself.<br><br> Enter in your username in the username field and enter in your password to the password field and click the login button. Upon successful login these options will now be available to you.<br><br> Logging out is done via clicking the log out button.<br><br> Back to home<br><br> Clicking the home button on the navigation menu will take you back to the first screen and will then show every single product in our range.<br><br> Editing your details<br><br>  Clicking the edit user details button will bring you to a form allowing you to edit your details. <br><br>  Enter in the new details and press submit.<br><br>  Once you have submitted your details will be changed.<br><br>  Adding product to you cart once logged in<br><br>  Once you are logged in you will be able to add things to your cart, this is done by clicking on the add to cart button on the product you would like.<br><br> You can view the contents of your cart and clear it by hovering over the cart button in the navigation menu.<br><br>  Pressing the clear cart button will clear it and you will be able to select new items if you wish.<br><br>  Submitting your order<br><br> Once you have added items to your cart and are logged in you are able to submit your order. You do this by selecting the submit order button once logged in.<br><br>This will take you to a confirmation screen.<br><br>    If your order is correct click submit Order at the bottom and your order will be saved, it will display a confirmation screen under your user buttons.<br><br> Be careful not to click submit order multiple times or the order will be saved multiple times.</p>");
    });
    //Function to update page to only show RACING genre
    $("a#racing").on("click", function () {
        var search = $("a#racing").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show ADVENTURE genre
    $("a#adventure").on("click", function () {
        var search = $("a#adventure").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show sandbox genre
    $("a#sandbox").on("click", function () {
        var search = $("a#sandbox").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show sports genre
    $("a#sports").on("click", function () {
        var search = $("a#sports").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show action genre
    $("a#action").on("click", function () {
        var search = $("a#action").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rts genre
    $("a#rts").on("click", function () {
        var search = $("a#rts").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show fighter genre
    $("a#fighter").on("click", function () {
        var search = $("a#fighter").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#rpg").on("click", function () {
        var search = $("a#rpg").text();

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/genre.php", {search: search}, function (data) {
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
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#ufifty").on("click", function () {
        var search = parseFloat("50");

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });

    //Function to update page to only show rpg genre
    $("a#ofifty").on("click", function () {
        var search = parseFloat("52");

        if ($.trim(search) !== "") {
            $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/price.php", {search: search}, function (data) {
                $("div#search-data").html(data);
            });
        }
    });


    //ABOUT US
    $("a#aboutus").click(function () {

        $.ajax({
            type: 'POST',
            url: 'http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/aboutus.php',
            success: function (data) {
                $("div#search-data").html(data);
            }
        });
    });
}





function loadcart() {
    "use strict";
    var currentcart = localStorage.getItem('cart').slice(0, -1),
        splitcart;
    if (currentcart) {
        splitcart = currentcart.split("*");
        splitcart.forEach(function (productID) {
            $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/cart.php', {productID: productID}, function (data) {
                $('div#cart').append('<li><a href="#">' + data + "</a></li>");
            });
        });
    }
}

function searchproduct() {
    "use strict";
    var search = $("input#search").val();
    localStorage.setItem('lastsearch', search);
    if ($.trim(search)) {
        $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/product.php", {search: search}, function (data) {
            $("div#search-data").html(data);
        });
    }
    return false;
}

function searchbar() {
    "use strict";
    var lastsearch = localStorage.getItem('lastsearch');
    if (!lastsearch) {
        lastsearch = "Enter product name";
    }
    $("input#search").attr("placeholder", lastsearch);
}

function displayproducts() {
    'use strict';
    $.post("http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/displayproducts.php", function (data, status) {
        if (status === "success") {
            $('div#search-data').html(data);
        }
    });
}

function checklogin() {
    "use strict";
    var sessionID = localStorage.getItem('sessionID'),
        outputhtml;
    dobuttons();
    $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/checklogin.php', {sessionID: sessionID}, function (data) {
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
    localStorage.setItem('sessionID', "0");
    location.href = "index.html";
}

function login() {
    "use strict";
    var username = $('input#username').val(),
        password = $('input#password').val(),
        found;

    if (($.trim(username) !== '') && ($.trim(password) !== '')) {
        $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/login.php', {username: username, password: password}, function (data) {
            found = data.split(";");
            if (found[0] === "1") { // Only reload on valid credentials
                localStorage.setItem("sessionID", found[1]);
                location.href = "index.html";
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
        sessionID = localStorage.getItem('sessionID');
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
        
        $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/checkpassword.php', {sessionID: sessionID}, function (data) {
            var retdata = data.split(';');
            if (retdata[0] === "1" && retdata[1] === oldpassword) {
                $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/updateuserdetails.php', {username: username, password: newpassword, name: name, contactnumber: contactnumber, address: address, email: email, sessionID: sessionID}, function (data) {
                    location.href = "index.html";
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
        
        $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/addproduct.php', {name: name, price: price, description: description, genre: genre, quantity: quantity, rating: rating, image: image, tags: tags}, function (data) {
            location.href = "index.html";
        });
    });
}

function addtocart(productID) {
    "use strict";
    var currentcart = localStorage.getItem('cart');
    if (!currentcart) {
        currentcart = "";
    }
    currentcart = currentcart.concat(productID, "*");
    localStorage.setItem('cart', currentcart);
    location.href = "index.html";
}

function clearcart() {
    "use strict";
    localStorage.setItem('cart', '');
    location.href = "index.html";
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
            $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/checkuser.php', {username: username}, function (data) {
                if (data === "0") { //Checks if username is already taken
                    $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/register.php', {username: username, password: password, name: name, contactnumber: contactnumber, address: address, email: email, rank: rank}, function (data) {
                        location.href = "index.html";
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
            $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/checkuser.php', {username: username}, function (data) {
                if (data === "0") { //Checks if username is already taken
                    $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/register.php', {username: username, password: password, name: name, contactnumber: contactnumber, address: address, email: email, rank: rank}, function (data) {
                        location.href = "index.html";
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
    var currentcart = localStorage.getItem('cart').slice(0, -1),
        splitcart,
        products = [""],
        sessionid = localStorage.getItem('sessionID'),
        tProduct,
        testdata,
        outputhtml;
    if (currentcart) {
        $('div#search-data').html("<div><div class = 'center'> <p>You have chosen the following products: <div id='productshere'></div><br><br><button type='button' id='submitbutton' class = 'center'>Submit Order</button><br><br></div>");
        splitcart = currentcart.split("*");
        splitcart.forEach(function (productID, i) {
            $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/cart.php', {productID: productID}, function (data) {
                $('div#productshere').append(data + "<br><br>");

            });
        });
        $('div#search-data').html(outputhtml);
        $('button#submitbutton').on('click', function () {
            $.post('http://ceto.murdoch.edu.au/~32667253/assignment2/Cordova/HeatWaveGaming/www/ajax/submitorder.php', {sessionID: sessionid, cart: currentcart}, function (data) {
                testdata = data;
                if (data === "true") {
                    //location.href = "index.html";
                    $('div#login-data').text("Order successfully submitted");
                } else {
                    //location.href = "index.html";
                    $('div#login-data').text("Order did not submit, please try logging out and in");
                }
            });
        });
        
    } else {
        $('div#search-data').html("<div class='center'> <h2>You did not add any items to the cart, please go home and choose some products.</h2><br><h2>Thank you for shopping with HeatWave Gaming</h2></div>");
    }
}
