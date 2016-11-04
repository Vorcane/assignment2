<?php
    require "../database/connect.php";
    $productID = $_POST['productID'];
    $searchresult = mysql_query("SELECT * FROM products WHERE productID='$productID';");
    while($row=mysql_fetch_array($searchresult)) {
        $output = $row['name'] . " " . "$" . $row['price'];
        echo "$output";
    }
?>