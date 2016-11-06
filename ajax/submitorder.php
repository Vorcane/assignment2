<?php
    require "../database/connect.php";
    
    $sessionID = $_POST['sessionID'];
    $cart = $_POST['cart'];
    $query = mysql_query("SELECT * FROM users WHERE sessionID = '$sessionID';");
    if (mysql_num_rows($query) > 0) {
        while ($row = mysql_fetch_array($query)) {
            $badcoding = $row['userID'];
            $insertresult = mysql_query("INSERT INTO orders (userID, userOrder) VALUES ('$badcoding', '$cart')");
        }
        if ($insertresult) {
            echo "true";
        } else {
            echo "false";
        }
    } else {
        echo "false";
    }

?>