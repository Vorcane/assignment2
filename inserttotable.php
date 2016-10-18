<!DOCTYPE html>
<html lang = "en" xmlns = "http://www.w3.org/1999/xhtml" >

<head>
	<title>HeatWave Gaming</title>
	<meta charset="utf-8"></meta>
	<link rel="stylesheet" type="text/css" href="css/styles.css"></link>
</head>

<body>
	<?php
		# Details for DB connection
		$host = "localhost";
		$user = "X32674186";
		$password = "X32674186";
		$dbname = "X32674186";
		
		# Connecting to the database
		$dbc = mysql_connect($host, $user, $password) or die("Cant connect" . mysql_error());
		mysql_select_db($dbname) or die("Select failed " . mysql_error());
		
		
		# SQL queries
		$query = "INSERT INTO products VALUES (10004, 'Overwatch', 60, 'Team based shooter with a large number of characters to choose from', 'FPS', 10, 9, 'tbd' , 'OW')";
		$retval = mysql_query($query, $dbc);
		
		if(! $retval ) {
			die('Could not enter data: ' . mysql_error());
		}
		
		echo "Entered data success";
		
		# Closing connection
		mysql_close($dbc);
	?>
</body>
</html> 


