<?php 
	$host = "localhost";
	$user = "X32674186";
	$password = "X32674186";
	$dbname = "X32674186";

	// Create Connection
	$dbc = mysql_pconnect($host, $user, $password) or die("Can't connect" . mysql_error());
	// Select database
	mysql_select_db($dbname) or die("Couldn't select DB" . mysql_error());

	// Get data from form
	$name = trim($_POST["name"]);
    $price = trim($_POST["price"]);
    $description = trim($_POST["description"]);
    $genre = trim($_POST["genre"]);
    $quantity = trim($_POST["quantity"]);
    $rating = trim($_POST["rating"]);
    $image = trim($_POST["image"]);
    $tags = trim($_POST["tags"]);

    // insert form data into database
	$searchquery = "INSERT INTO products (name, price, description, genre, quantity, rating, image, tags) VALUES ('$name','$price','$description','$genre','$quantity','$rating','$images','$tags');";
	$queryresult = mysql_query($searchquery);
	// Check if data matches up
	if(mysql_num_rows($queryresult) !== 0)
        { 
            while($row=mysql_fetch_array($queryresult)){
                $found = true;
            }
        } else {
		$found = false;
	}

    if($queryresult) {
        echo "Insert successful";
    } else {
        echo "Insert failed";
    }
    mysql_close(); //Ends DB connection
    //echo "$found;$pass";
?>