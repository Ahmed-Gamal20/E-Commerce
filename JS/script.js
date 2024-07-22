//! open and close cart
let price;
let num_pro;
//? count head
let count_item = document.querySelector(".count_item");
let price_cart_head = document.querySelector(".price_cart_head");

//* count cart
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");

var cart = document.querySelector(".cart");
function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}

//* open and close menu
var menu = document.querySelector("#menu");

function open_menu() {
  menu.classList.add("active");
}
function close_menu() {
  menu.classList.remove("active");
}


//* change item img 
 
let bigimg=document.getElementById("bigimg");

function change_item_img(img){
  bigimg.src=img;

}

// let home=document.getElementById("home");
// let allpro=document.getElementById("allpro");
// function showallpro(){
//   allpro.href="all_product.html";
// }
// function showhome(){
//   home.href="index.html";
// }








//? add item in cart

var all_product_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];





function addtocart(id, btn) {
  product_cart.push(all_product_json[id]);
  btn.classList.add("active");
  getcartitem();
}
// let product_wish = [];

// function addtowish(id, btn) {
//   product_cart.push(all_product_json[id]);
//   btn.classList.add("active");
//   getcartitem();
// }





function getcartitem() {
  let total_price = 0;
  let items_cc = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_cc += `
    <div class="item_cart">
    <img src="${product_cart[i].img}" alt="">
    <div class="contant">
        <h4>${product_cart[i].name}</h4>
        <p class="price_cart">${product_cart[i].price}</p>
    </div>
    <button onclick="removefromcart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
</div>

    `;
    total_price += product_cart[i].price;
  }
  items_in_cart.innerHTML = items_cc;
  price_cart_head.innerHTML = "$" + total_price;
  count_item.innerHTML = product_cart.length;

  count_item_cart.innerHTML = `${product_cart.length} item in cart`;
  price_cart_total.innerHTML = "$" + total_price;
  price = count_item_cart.value;
  num_pro=product_cart.length;
}

function removefromcart(index) {
  product_cart.splice(index, 1);
  getcartitem();
  let addcartbtn = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addcartbtn.length; i++) {
    addcartbtn[i].classList.remove("active");
    product_cart.forEach((product) => {
      if (product.id == i) {
        addcartbtn[i].classList.add("active");
      }
    });
  }
}


    localStorage.setItem("number_of_product_in_cart", price);

    localStorage.setItem("price_of_product", num_pro);

// console.log(price);
// console.log(price_cart_head.valu);


let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});






//! search
let products_search=[];

fetch("/JS/item.json")
  .then((response) => response.json())
  .then((data) => {
    products_search=[...data]
    console.log(data)
  }
    );


function searchProducts() {
  const search_price =document.getElementById('search_price').value;
  console.log(search_price)

  const filteredProducts = products_search.filter(product => {
      return product.price >= search_price;
  });
  displayResults(filteredProducts);
}


function displayResults(products) {
  // co/nst produ/ctList = '';
  // productList.innerHTML = '';
  let cot='';
  products.forEach(product => {
    
      // const li = documentcreateElement.('li');
      // li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
      // const imge = document.createElement('img');
      //   imge.src=`{product.img}`


 cot+=`  <div>
       <div class="product swiper-slide">
               <div class="icons">
                   <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
                 <span><i class="fa-sharp fa-solid fa-heart"></i></span>
                <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
              </div>
              <div class="img_product" style="">
                   <img style="width:100px; height:100px;display: flex; justify-content:space-between;" src="${product.img}">
                   <img style="width:100px; height:100px;display: flex; justify-content:space-between;" class="img_hover" src="${product.img_hover}">
       </div>
       <h3 class="name_product"><a href="#">${product.name}</a></h3>
               <div class="price">
                 <p><span>$${product.price}</span></p>
                 </div>
                  <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
      </div>`
   

      document.getElementById('productList').innerHTML=cot;
});

}
console.log("ilteredProductsf");




















//!

 //     const old_price_pragraph=product.old_price ?`<p class="old_price">$${product.old_price}</p>`:"";


                
  //     const percent_disc_div = product.old_price ?`<span class="sale_present">%${Math.floor(((product.old_price - product.price) / product.old_price) * 100 )}</span>`:"";



  //     products_dev.innerHTML += `  <div class="product swiper-slide">
  //             <div class="icons">
  //                 <span><i onclick="addtocart(${product.id},this)" class="fa-sharp fa-solid fa-cart-plus"></i></span>
  //                 <span><i class="fa-sharp fa-solid fa-heart"></i></span>
  //                 <span><i class="fa-sharp fa-solid fa-share-nodes"></i></span>
  //             </div>

  //             ${ percent_disc_div}

  //             <div class="img_product">
  //                 <img src="${product.img}">
  //                 <img class="img_hover" src="${product.img_hover}">
                  
  //             </div>
  //             <h3 class="name_product"><a href="#">${product.name}</a></h3>
  //             <div class="price">
  //                 <p><span>$${product.price}</span></p>
  //                ${old_price_pragraph}
  //             </div>
  //             <div class="stars">
  //                 <i class="fa-solid fa-star"></i>
  //                 <i class="fa-solid fa-star"></i>
  //                 <i class="fa-solid fa-star"></i>
  //                 <i class="fa-solid fa-star"></i>
  //                 <i class="fa-solid fa-star"></i>
  //             </div>
              
  //         </div>`;
  //   '5000'
  // });

