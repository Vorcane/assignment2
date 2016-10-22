var cookiename = "sessionID=";
var cookiearray = document.cookie.split(';'); //Splits the cookie into a sub array
for(var i = 0; i <cookiearray.length; i++) {
    var cookie = cookiearray[i]; //Gets the individual cookie from the array
    while (cookie.charAt(0)==' ') { //Clears blank space from the value
        cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookiename) == 0) { //If cookie exists do this
        $.post('checklogin.php', {sessionID: cookie.substring(name.length+11,cookie.length)}, function(data) { //sends only value not the name of the cookie
            
        })
        document.write(cookie.substring(name.length+11,cookie.length)); //Returns the cookie value if found
        
    } else { //If cookie doesnt exist do this
    } 
}