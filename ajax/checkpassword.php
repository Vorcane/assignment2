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
	$enteredid = trim($_POST["sessionID"]);
    // Search database with form data
	$searchquery = 'SELECT password FROM users WHERE sessionID = "' . mysql_real_escape_string($enteredid) . '";';
	$queryresult = mysql_query($searchquery);
	// Check if data matches up
	if(mysql_num_rows($queryresult) !== 0)
        { 
            while($row=mysql_fetch_array($queryresult)){
                $found = true;
                $pass = $row['password'];
            }
        } else {
		$found = false;
	}
    mysql_close(); //Ends DB connection
    echo "$found;$pass";
?>