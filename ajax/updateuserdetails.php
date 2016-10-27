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
	$username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    $name = trim($_POST["name"]);
    $contactnumber = trim($_POST["contactnumber"]);
    $address = trim($_POST["address"]);
    $email = trim($_POST["email"]);
    $sessionID = trim($_POST["sessionID"]);

    // insert form data into database
	$searchquery = 'SELECT * FROM users WHERE sessionID = "' . mysql_real_escape_string($enteredid) . '";';
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

    $insertquery = "UPDATE users SET userName='$username',password='$password',name='$name',contactNumber='$contactnumber',address='$address',email='$email' WHERE sessionID='$sessionID'";

    $queryresult = mysql_query($insertquery);

    if($queryresult) {
        echo "Update successful";
    } else {
        echo "Update failed";
    }
    mysql_close(); //Ends DB connection
    //echo "$found;$pass";
?>