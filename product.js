// IDs in HTML for Buttons
var none = "none"
var sugar_milk = "sugar-milk"
var vanilla_milk = "vanilla-milk"
var gf = "gf"
var pumpkin = "pumpkin"
var caramel = "caramel"

var buttons = [none, sugar_milk, vanilla_milk, gf, pumpkin, caramel];

// Temporary storage
var cur_bun = "Original";
var cur_glaze = none;

// CSS Storage
const selected = {
	"background": "#EB5757",
	"color": "#FFFFFF"
};

const unselected = {
	"color": "black",
	"background": "#FFFFFF"
};

// ID gets replaced with target
const bg = {
	"backgroundImage": "url(resources/ID.jpg)"
}


// Runs On Load
function onLoad2() {
	for (i in buttons) {
		bind_click(buttons[i]);
	}
}


// Listen to what is clicked
function bind_click(id) {
	$(document).ready(function() {
		$("#" + id).bind('click', function() {
			cur_glaze = id;
			reset_glaze()
			update_background(id)
			css_update(id, selected);
		});
	});
}



// Event: Add to Cart
// Create Bun Object and push to cart
if (button_add_cart != null) {
	button_add_cart.addEventListener("click", function() {
		quantity_sel = drop1.options[drop1.selectedIndex].text;
		add_to_cart(quantity_sel, cur_bun, cur_glaze);
		View_update_num_cart()
	})
}



// Visually Display stuff

// Target ID and change to correct css
function css_update(id, css) {
	$(document).ready(function() {
		$("#" + id).css(css)
	});
}

// Reset Glaze; for refresh
function reset_glaze() {
	for (i in buttons) {
		css_update(buttons[i], unselected)
	}
}


function update_background(id) {
	var new_bg = {
		"backgroundImage": "url(resources/ID.jpg)"
	}
	new_bg.backgroundImage = new_bg.backgroundImage.replace("ID", id);
	css_update("product_image", new_bg);



}



// Animate Similar Item on Click
$(document).ready(function() {
	$('#RIGHT').click(() => {
		$(".similar_items").animate({
			scrollLeft: "575px"
		});
	});
});

$(document).ready(function() {
	$('#LEFT').click(() => {
		$(".similar_items").animate({
			scrollLeft: "0px"
		});
	});
});


function blackberry() {
	cur_bun = "Blackberry";
	$(document).ready(function() {
		new_bg = {
			"backgroundImage": "url(https://amyshealthybaking.com/wp-content/uploads/2015/04/blackberry-almond-sticky-buns_0652.jpg)"
		}
		css_update("product_image", new_bg)


	});

}