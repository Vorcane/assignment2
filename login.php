<?php 
	$host = "localhost";
	$user = "X32674186";
	$password = "X32674186";
	$dbname = "X32674186";
	// Create Connection
	$dbc = mysql_pconnect($host, $user, $password);
	// Check connection 
	if ($conn->connect_error) {
		die("Connection Failed: " . $conn->connect_error);
	}
	// Select database
	mysql_select_db($dbname);
	// Get data from form
	$enteredname = $_POST["username"];
	$enteredpass = $_POST["password"];
	// Search database with form data
	$searchquery = "SELECT * FROM users WHERE userName = '" . $enteredname . "' AND password = '" . $enteredpass . "';";
	$queryresult = mysql_query($searchquery);
	// Check if data matches up
	if(mysql_num_rows($queryresult)){
		// Valid credentials 
		$sessionid = rand(11111111111111111111, 99999999999999999999);
		while($row=mysql_fetch_array($queryresult)){
			//Process $row 
		}
		//Updates the session ID field into the database for the user
		$insertinto = "UPDATE users SET sessionID = " . $sessionid . " WHERE userID = " . $row['userID'] . ";";
		$queryresult = mysql_query($insertinto);
		if(queryresult){ //Sets the cookie 
			$cookiename = "sessionID";
			$cookievalue = $sessionid;
			setcookie($cookiename, $cookievalue, time()+ (86400 * 7), "/");
			echo $cookievalue;
		} else {
		}
	} ELSE {
		//Invalid credentials
	}
?>