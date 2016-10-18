<?php 
	//
	// Database isnt saved perhaps doesnt close idk
	//
	$host = "localhost";
	$user = "X32674186";
	$password = "X32674186";
	$dbname = "X32674186";

	// Create Connection
	$dbc = mysql_pconnect($host, $user, $password) or die("Can't connect" . mysql_error());
	// Select database
	mysql_select_db($dbname) or die("Couldn't select DB" . mysql_error());
    echo "test one <br>";

	// Get data from form
	$enteredname = $_POST["username"];
	$enteredpass = $_POST["password"];
    echo "test two <br>";

	// Search database with form data
	$searchquery = "SELECT * FROM users WHERE userName = '" . $enteredname . "' AND password = '" . $enteredpass . "';";
	$queryresult = mysql_query($searchquery);
    echo "test three <br>";
    $testvar = mysql_num_rows($queryresult);
    echo "$testvar ayy lmao<br>";
	// Check if data matches up
	if(mysql_num_rows($queryresult)>0)
        { 
            // Valid credentials 
            $sessionid = uniqid ('', true); //Does do this
            while($row=mysql_fetch_array($queryresult)){
                //Process $row 
		}
        $testvar = $row['userID'];
        echo "$testvar xDDD<br>"; //Doesnt get here
        
		//Updates the session ID field into the database for the user
        mysql_free_result($queryresult); //Clears leftover data from select query
		$insertinto = "UPDATE users SET sessionID = " . $sessionid . " WHERE userID = " . $row['userID'] . ";";
		$queryresult = mysql_query($insertinto);
		
        if(queryresult)
        { //Sets the cookie 
			$cookiename = "sessionID";
			$cookievalue = $sessionid;
			setcookie($cookiename, $cookievalue, time()+ (86400 * 7), "/"); // Sets cookie with the id for expiry in a week
			echo $cookievalue; //Gets here
            
		} else {
            //Couldnt insert
		}
	} ELSE {
		//Invalid credentials
	}
    mysql_close(); //Ends DB connection
?>