<?php
	# Details for DB connection
	$host = "localhost";
	$user = "X32674186";
	$password = "X32674186";
	$dbname = "X32674186";
	
	# Connecting to the database
	$dbc = mysql_connect($host, $user, $password) or die("Cant connect" . mysql_error());
	mysql_select_db($dbname) or die("Select failed " . mysql_error());	
?>