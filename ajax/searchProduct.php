<!DOCTYPE html>
<html lang = "en" xmlns = "http://www.w3.org/1999/xhtml" >

<head>
	<title>HeatWave Gaming</title>
	<meta charset="utf-8"></meta>
	<link rel="stylesheet" type="text/css" href="css/styles.css"></link>
</head>

<body>
	<div class="search">
		<form name="searchBar" onsubmit="return validate()" action="searchProduct.php" method="POST">
			<label>Search: <input type="text" name="searchValue"></input> </label>
			<input type="submit" name="Submit" value="Submit"></input>
		</form>
	</div>
	</br>
	<div class="mainCont">
		<?php
			# Details for DB connection
			$host = "localhost";
			$user = "X32674186";
			$password = "X32674186";
			$dbname = "X32674186";
			
			# Connecting to the database
			$dbc = mysql_connect($host, $user, $password) or die("Cant connect" . mysql_error());
			mysql_select_db($dbname) or die("Select failed " . mysql_error());
			
			# Variables to hold values from search
			$searchVal = $_POST["searchValue"];
			
			# SQL queries
			$query = "SELECT * FROM products WHERE name LIKE '%$searchVal%' OR description LIKE '%$searchVal%' OR tags LIKE '%$searchVal%'"; # Selects all from DB where searchvalue is contained in either name, description or tags
			$result = mysql_query($query);
			
			# Displaying what the query retrieved
			while ($row = mysql_fetch_Array($result)) {
                $productID = $row["productID"];
				print "<div class='prodContainer'>"; # Starting the container
				print "<p>" . $row["name"] . "</p>";
				print "<p>$" . $row["price"] . "</p>";
				print "<p>" . $row["description"] . "</p>";
				print "<p>" . $row["rating"] . "</p>";
				print "<form name='addButton' action='' method='POST'><input type='submit' name='addToC' value='Add to Cart' onclick='addtocart($productID)'></input></form>";
				print "</div>"; # Ending the container
			}
			# Closing connection
			mysql_free_result ($result);
			mysql_close();
		?>
	</div>
	
	<script>
		function validate() {
			var usrInput = document.forms["searchBar"]["searchValue"].value;
			
			if (usrInput == null || usrInput == "") {
				alert("Field cannot be empty.");
				return false;
			}
			
			return true;
		}
	</script>
	
</body>
</html> 


