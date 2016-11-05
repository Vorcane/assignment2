<?php    
    require "../database/connect.php";
    $username = $_POST['username'];
    $query = mysql_query("SELECT * FROM users WHERE username = '$username';");
    if (mysql_num_rows($query) !== 0){
        echo "1"; //Username taken
    } else {
        echo "0"; //Username not taken
    }
        
?>