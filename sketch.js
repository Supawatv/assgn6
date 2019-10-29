// Model
// -----------------------------------

//creates unique ID to index card

if (localStorage.card_index == undefined) {
	localStorage.card_index = 0;
}

function set_card_index(index) {
	localStorage.card_index = index;
}

function get_card_index() {
	return Number(localStorage.card_index)
}


// Pointers for document ID 
drop1 = document.getElementById("drop1"); //drop down menu
drop2 = document.getElementById("drop2"); //drop down menu
button_add_cart = document.getElementById("button_add_cart"); //button_Add_cart button
button_add_cart2 = document.getElementById("button_add_cart2"); //button_Add_cart button


var card_container = document.getElementById("left");


// View
// -----------------------------------

// Visually update number of item in cart
function View_update_num_cart() {
	numCart = document.getElementById("numCart");
	numCart.innerHTML = JSON.parse(localStorage.getItem("user_cart")).length;
}


// Controlers
// -----------------------------------
/*** Document Load ****/
// If localstorage is empty is empty create a new array
function onLoad() {
	local_cart = JSON.parse(localStorage.getItem("user_cart"));
	if (local_cart == null) {
		localStorage.setItem("user_cart", JSON.stringify([]));
	}
	View_update_num_cart();
	view_items_in_cart();
	update_remover();
};



// Bun Constructor
function Bun(flavor, glaze) {
	card_index = Number(localStorage.card_index) + 1
	localStorage.card_index = card_index; //update local storage
	this.flavor = flavor,
		this.glaze = glaze,
		this.id = "card_index_" + card_index;
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
// Bun Type 1
if (button_add_cart != null) {
	button_add_cart.addEventListener("click", function() {
		user_select = drop1.options[drop1.selectedIndex].text;
		add_to_cart(user_select, "Bun 1", "Glaze A");
		View_update_num_cart()
		console.log("1")
	})
}

// Bun Type 2
if (button_add_cart2 != null) {
	button_add_cart2.addEventListener("click", function() {
		user_select = drop2.options[drop2.selectedIndex].text;
		add_to_cart(user_select, "Bun 2", "Glaze B");
		View_update_num_cart()
		console.log("2")
	})
}



function append_card_in_cart(str) {
	$(document).ready(function() {
		$("#left").append(str);
	});
}



function create_card(bun) {
	// Template for product card in cart
	output =
		"     <!-- Card -->" +
		"     <div class=\"cart_card\" id='_ID_'>" +
		"       <!-- Product Image -->" +
		"       <img src=\"resources/bread3.png\" alt=\"bread\">" +
		"       <!-- Title -->" +
		"       <div>" +
		"         <h1>bun_name</h1>" +
		"         <p>glaze_type</p>" +
		"       </div>" +

		"       <div id=\"details_cart\">" +
		"         <!-- Price -->" +
		"         <div>" +
		"           <h3>$5.99</h3>" +
		"         </div>" +
		"       </div>" +
		"       <div>" +
		"         <button class=\"remover\" id=\"remove_button\">Remove</button>" +
		"       </div>" +

		"     </div>";

	flavor = bun.flavor;
	glaze = bun.glaze;
	id = bun.id;

	// Replace Text
	output = output.replace("bun_name", flavor);
	output = output.replace("glaze_type", glaze);
	output = output.replace("_ID_", id); // div ID
	output = output.replace("remove_button", "remove_button_" + id); // button id


	return output;
}


function view_items_in_cart() {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	for (buns in cart) {
		card = create_card(cart[buns]);
		append_card_in_cart(card);
	}
}



setTimeout(1000);


// Upon click
function create_remover(id) {
	$(document).ready(function() {
		$("#remove_button_" + id).bind("click", function() {
			console.log(id);
			local_del(id);
			// refresh_cart_html();


			// https://css-tricks.com/snippets/jquery/combine-slide-and-fade-functions/
			$.fn.slideFadeToggle = function(speed, easing, callback) {
				return this.animate({
					opacity: 'toggle',
					height: 'toggle'
				}, speed, easing, callback);
			};

			$("#" + id).slideFadeToggle(250).delay(250)
			View_update_num_cart();

		});
	});
}


function update_remover() {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	for (bun in cart) {
		create_remover(cart[bun].id)
	}
}



function checker(id_to_delete) {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	for (bun in cart) {
		if (cart[bun].id == id_to_delete) {
			// remove from array
		}
	}
}


// Delete Item from Local Sotrage
function local_del(id) {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	console.log(cart)
	for (bun in cart) {
		if (cart[bun].id == id) {
			cart.splice(bun, 1)
			localStorage.setItem("user_cart", JSON.stringify(cart))
		}
	}

}