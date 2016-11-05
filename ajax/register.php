<?php 
    require "../database/connect.php";

	// Get data from form
	$username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    $name = trim($_POST["name"]);
    $contactnumber = trim($_POST["contactnumber"]);
    $address = trim($_POST["address"]);
    $email = trim($_POST["email"]);
    $rank = trim($_POST["rank"]);

    $insertquery = "INSERT INTO users (userName, password, name, contactNumber, address, email, rank) VALUES ('$username', '$password', '$name', '$contactnumber', '$address', '$email', '$rank');";

    $queryresult = mysql_query($insertquery);

    if($queryresult) {
        echo "Registration successful";
    } else {
        echo "Registration failed";
    }
    mysql_close(); //Ends DB connection
    //echo "$found;$pass";
?>