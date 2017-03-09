var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who-What-Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic.",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool.",
    "imageTitle": "twill.jpg"
  }
]

for (var i=0; i < products.length; i++) {
  var details = products[i];
  
  console.log(details.name);
  console.log(details.price);
  console.log(details.description);
}

function capture() {
  event.preventDefault();
  console.log(document.getElementById("selection").value);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showCart() {
    document.getElementById("cart-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".cart-items")) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//to do: trigger on change of cart contents
function sumPrices(cartArray) {
  // for loop through array; sum value of price attribute for each object
  var total = 0;
  
  for(var i=0; i<cartArray.length; i++) {
    if(cartArray[i].price) {
      total = total + cartArray[i].price;
    }
  }
  
  //to do: print total as HTML to page, next to cart icon
  console.log(total);
}

  
var cart = [];

function cartHandler(item){
 
  var i = cart.findIndex(function(el){
   return el.name.toLowerCase() == item.toLowerCase()});
     if (i >= 0) {
       cart.splice(i,1);
     }
     else {
       var cartItem = {
         "name": item
       }
       cart.push(cartItem);
     }
  console.log(cart.length);
}



function compareNames(a, b) {
  products.sort(function(a,b){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    
    if (nameA < nameB) {
      return -1;
  }
    if (nameA > nameB) {
    return 1;
  }
  return 0;
})  
  console.log(products.sort())
}

function comparePrice(a, b) {
  products.sort(function(a,b) {
    return a.price - b.price;
});
  console.log(products.sort(comparePrice))
}
  
  //call.sort on your products array and pass it your own comparison function
  
