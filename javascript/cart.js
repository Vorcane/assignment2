function addtocart(productID){
    var currentcart = Cookies.get('cart');
    currentcart.concat(productID,";");
    Cookies.set('cart', currentcart);
}

function loadcart(){
    var currentcart = Cookies.get('cart');
    var splitcart = currentcart.split(';');
    splitcart.forEach(function(productID) {
       $.post('ajax/cart.php', {productID: productID}, function (data) {
           $('div#cart').append('<li><a href="#">' + data + "</a></li>")
       }); 
    });
}