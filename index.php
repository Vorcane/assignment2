<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>HeatWave Gaming</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="./css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="javascript/login.js"></script>
    <!--<script src="javascript/test.js"></script>-->

</head>

<body>
	<div class="outer">
		<!--Code for the header-->
		<header>
		<img src="./images/header.jpg" alt="header">
		</header>
		
		<!--Code for the nav and the search bar-->
		<nav>
			<ul>
				<!--Possibly make these drop down lists unless we dont have enough buttons-->
				<!--Example of dropdown would be genre>fps>mmo>rpg etc
				For price could be <20 <30 <30 etc make it easy to find cheap games
				Poissbly add one for on sale and make like 3 games on sale-->
				<li><a class="active" href="http://ceto.murdoch.edu.au/~32667253/assignment2/#">Home</a</li>
				<li><a href="http://ceto.murdoch.edu.au/~32667253/assignment2/#">DROP DOWN LISTS</a></li>
				<li><a href="http://ceto.murdoch.edu.au/~32667253/assignment2/#">GENRE</a></li>
				<li><a href="http://ceto.murdoch.edu.au/~32667253/assignment2/#">PRICE</a></li>
				<li><a href="http://ceto.murdoch.edu.au/~32667253/assignment2/#">HELP</a></li>
				
				<!--Code for the search bar-->
				<form class="search" name="searchBar" onsubmit="return validate()" action="searchProduct.php" method="POST">
					<label>Search: <input type="text" name="searchValue"> </label>
					<input type="submit" name="Submit" value="Submit">
				</form>
			</ul>
		</nav>
		
		<!-- Login system starts here -->
			<div id="form-messages"></div>
			<form action="login()" method="post" onsubmit=" return validateForm()">
                Username: <input type="text" name="username" id="usernamefield">
                Password: <input type="password" name="password" id="passwordfield">
                <input type="submit" value="Login" name="Login" id="login-submit">
			</form>
		<!-- Login system ends here -->
		
		<!--Code for the section that will contain the products-->
        <section class="mainCont">
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
				$query = "SELECT * FROM products"; # Selects all from DB where searchvalue is contained in either name, description or tags
				$result = mysql_query($query);
				
				# Displaying what the query retrieved
				while ($row = mysql_fetch_Array($result)) {
					print "<div class='prodContainer'>"; # Starting the container
					print "<p>" . $row["name"] . "</p>";
					print "<p>$" . $row["price"] . "</p>";
					print "<p>" . $row["description"] . "</p>";
					print "<p>" . $row["rating"] . "</p>";
					print "<form name='addButton' action='' method='POST'><input type='submit' name='addToC' value='Add to Cart'></input></form>";
					print "</div>"; # Ending the container
				}
				
				# Closing connection
				mysql_free_result ($result);
				mysql_close();
			?>
		</section>
		
		<footer>
			<p>Created by Lachlan + Mitchell</p>
		</footer>
	</div>
</body>
</html>

