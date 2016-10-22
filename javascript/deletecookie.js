function deletecookie(name) {
    document.cookie = name + " ;" + (d.getTime - 100) + ";path=/";
}