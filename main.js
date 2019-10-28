// Model
// -----------------------------------
// Pointers for document ID 
drop = document.getElementById("drop"); //drop down menu
add_cart = document.getElementById("add_cart"); //Add_cart button
GF = document.getElementById("GF");
product_image = document.getElementById("product_image");


/*** Document Load ****/
// If localstorage is empty is empty create a new array
function onLoad() {
	local_cart = JSON.parse(localStorage.getItem("user_cart"));
	if (local_cart == null) {
		localStorage.setItem("user_cart", JSON.stringify([]));
	}
	View_update_num_cart();
};


// View
// -----------------------------------

// Visually update number of item in cart
function View_update_num_cart() {
	my_cart = document.getElementById("my_cart");
	my_cart.innerHTML = JSON.parse(localStorage.getItem("user_cart")).length;
}


// Controlers
// -----------------------------------

// Bun Constructor
function Bun(flavor, glaze, price = 5.99) {
	this.flavor = flavor,
		this.glaze = glaze,
		this.price = price;
};


// Adds bun to cart when click
function add_to_cart(quanitity, flavor, glaze) {
	// Push desired quantity into array
	for (var i = 0; i < quanitity; i++) {
		// Manipulation
		cart = JSON.parse(localStorage.getItem("user_cart"))
		cart.push(new Bun(flavor, glaze));
		// Local Storage
		localStorage.setItem("user_cart", JSON.stringify(cart))
	}
}

// Listening Event
if (add_cart != null) {
	add_cart.addEventListener("click", function() {
		user_select = drop.options[drop.selectedIndex].text;
		add_to_cart(user_select, "cow", "cow");
		View_update_num_cart()
	})
}



// -----------------------------------
// Just for points
// When GF IS tap
if (GF != null) {
	GF.addEventListener("click", function() {
		product_image.style.backgroundImage =
			"url(https://www.gannett-cdn.com/media/2019/04/18/USATODAY/usatsports/imageforentry22-rjz.jpg?quality=10)";
	})
}