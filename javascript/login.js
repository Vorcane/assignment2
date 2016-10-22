$('input#login-submit').on('click', function() {
    var username = $('input#username').val();
    var password = $('input#password').val();
    if (($.trim(username) != '') && ($.trim(password) != '')) {
        $.post('login.php', {username: username, password: password, sessionID: "0"}, function(data) {
            $('div#login-data').text(data);
        })
    }
})
    
