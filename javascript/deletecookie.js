function deletecookie(name) {
    var d = new Date();
    document.cookie = name + " ;" + (d.getTime - 100) + ";path=/";
}