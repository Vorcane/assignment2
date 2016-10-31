//Function to update page to only show search value
$("input#search-submit").on("click", function() {
	var search = $("input#search").val();
    Cookies.set('lastsearch', search); //Sets the last search cookie
	
	if ($.trim(search) != "") {
		$.post("ajax/product.php", {search: search}, function(data) {
			$("div#search-data").html(data);
		});
	}
});

// CODE FOR SEARCHING GENRE BELOW
// CODE FOR SEARCHING GENRE BELOW
// CODE FOR SEARCHING GENRE BELOW
// CODE FOR SEARCHING GENRE BELOW
// CODE FOR SEARCHING GENRE BELOW

	//Function to update page to only show FPS genre
	$("a#fps").on("click", function() {
		var search = $("a#fps").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show MMO genre
	$("a#mmo").on("click", function() {
		var search = $("a#mmo").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show RACING genre
	$("a#racing").on("click", function() {
		var search = $("a#racing").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show ADVENTURE genre
	$("a#adventure").on("click", function() {
		var search = $("a#adventure").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show sandbox genre
	$("a#sandbox").on("click", function() {
		var search = $("a#sandbox").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show sports genre
	$("a#sports").on("click", function() {
		var search = $("a#sports").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show action genre
	$("a#action").on("click", function() {
		var search = $("a#action").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show rts genre
	$("a#rts").on("click", function() {
		var search = $("a#rts").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show fighter genre
	$("a#fighter").on("click", function() {
		var search = $("a#fighter").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

	//Function to update page to only show rpg genre
	$("a#rpg").on("click", function() {
		var search = $("a#rpg").text();
		
		if ($.trim(search) != "") {
			$.post("ajax/genre.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});

// CODE FOR SEARCHING PRICE BELOW
// CODE FOR SEARCHING PRICE BELOW
// CODE FOR SEARCHING PRICE BELOW
// CODE FOR SEARCHING PRICE BELOW
// CODE FOR SEARCHING PRICE BELOW

	//Function to update page to only show rpg genre
	$("a#utwent").on("click", function() {
		var search = parseFloat("20");
		
		if ($.trim(search) != "") {
			$.post("ajax/price.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});
	
	//Function to update page to only show rpg genre
	$("a#ufifty").on("click", function() {
		var search = parseFloat("50");
		
		if ($.trim(search) != "") {
			$.post("ajax/price.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});
	
	//Function to update page to only show rpg genre
	$("a#ofifty").on("click", function() {
		var search = parseFloat("52");
		
		if ($.trim(search) != "") {
			$.post("ajax/price.php", {search: search}, function(data) {
				$("div#search-data").html(data);
			});
		}
	});
	
	
//ABOUT US
$(document).ready(function(){
        $("a#aboutus").click(function(){

            $.ajax({
                type: 'POST',
                url: 'ajax/aboutus.php',
                success: function(data) {
                    $("div#search-data").html(data);
                }
            });
   });
});