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
	$enteredname = trim($_POST["username"]);
	$enteredpass = trim($_POST["password"]);

	// Search database with form data
	$searchquery = 'SELECT userID FROM users WHERE userName = "' . mysql_real_escape_string($enteredname) . '" AND password = "' . mysql_real_escape_string($enteredpass) . '";';
	$queryresult = mysql_query($searchquery);
	// Check if data matches up
	if(mysql_num_rows($queryresult) !== 0)
        { 
            // Valid credentials 
            $sessionid = uniqid ('', true); //Does do this
            while($row=mysql_fetch_array($queryresult)){
                //Process $row 
                $insertinto = 'UPDATE users SET sessionID = "' . $sessionid . '" WHERE userID = "' . $row['userID'] . '";';
		        $updateresult = mysql_query($insertinto);
                if($updateresult)
                    { //Sets the cookie 
                        $cookiename = "sessionID";
                        $cookievalue = $sessionid;
                        setcookie($cookiename, $cookievalue, time()+ (86400 * 7), "/"); // Sets cookie with the id for expiry in a week
                        $found = 1;
                    } else {
                        echo "Login failed, please try again";
                    }
        }
		
	} else {
		echo "Invalid username or password";
	}
    echo "$found";
    mysql_close(); //Ends DB connection
?>